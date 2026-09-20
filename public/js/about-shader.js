document.addEventListener('DOMContentLoaded', () => {
    // Wait for canvas to exist in DOM (React may render after)
    let tries = 0;
    function init() {
        const canvas = document.getElementById('about-photo-canvas');
        if (!canvas && tries < 50) {
            tries++;
            setTimeout(init, 100);
            return;
        }
        if (!canvas) return;

        // Fix body text — make all split-lines visible immediately (GSAP not needed here)
        const splitLines = document.querySelectorAll('.split-lines');
        splitLines.forEach(el => {
            el.style.transform = 'translateY(0%)';
            el.style.opacity = '1';
            el.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease';
        });

        // Use IntersectionObserver for elegant reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let delay = 0;
                    splitLines.forEach(el => {
                        el.style.transform = 'translateY(100%)';
                        el.style.opacity = '0';
                        setTimeout(() => {
                            el.style.transform = 'translateY(0%)';
                            el.style.opacity = '1';
                        }, delay);
                        delay += 80;
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.1 });

        const textContent = document.getElementById('about-text-content');
        if (textContent) observer.observe(textContent);

        setupWebGL(canvas);
    }
    init();
});

function setupWebGL(canvas) {
    // ResizeObserver fires once the element has real layout dimensions
    const ro = new ResizeObserver(entries => {
        for (const entry of entries) {
            const W = entry.contentRect.width;
            if (W > 10) { // has real size
                ro.disconnect();
                _initGL(canvas, W);
                break;
            }
        }
    });
    ro.observe(canvas.parentElement);
}

function _initGL(canvas, W) {
    const DPR = Math.min(window.devicePixelRatio, 2);
    // Set initial size at portrait 4:5 ratio; will resize when image loads
    const H = Math.round(W * 1.25);
    canvas.width  = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!gl) return;
    gl.viewport(0, 0, canvas.width, canvas.height);

    // ── Vertex Shader ──────────────────────────────────────────
    const vsSource = `
        attribute vec2 a_pos;
        varying vec2 v_uv;
        void main() {
            v_uv = a_pos * 0.5 + 0.5;
            gl_Position = vec4(a_pos, 0.0, 1.0);
        }
    `;

    // ── Fragment Shader with Simplex noise ripple ───────────────
    const fsSource = `
        precision highp float;
        varying vec2 v_uv;
        uniform sampler2D u_photo;
        uniform sampler2D u_ascii;
        uniform vec2      u_mouse;   // 0..1 space, (-1,-1) = no hover
        uniform float     u_time;

        vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
        float snoise(vec2 v){
            const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
            vec2 i=floor(v+dot(v,C.yy));
            vec2 x0=v-i+dot(i,C.xx);
            vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
            vec4 x12=x0.xyxy+C.xxzz;
            x12.xy-=i1;
            i=mod(i,289.0);
            vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
            vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
            m=m*m;m=m*m;
            vec3 x=2.0*fract(p*C.www)-1.0;
            vec3 h=abs(x)-0.5;
            vec3 ox=floor(x+0.5);
            vec3 a0=x-ox;
            m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
            vec3 g;
            g.x=a0.x*x0.x+h.x*x0.y;
            g.yz=a0.yz*x12.xz+h.yz*x12.yw;
            return 130.0*dot(m,g);
        }

        void main(){
            vec2 uv = v_uv;
            // flip v so image is upright
            vec2 uvFlip = vec2(uv.x, 1.0 - uv.y);

            vec4 ascii = texture2D(u_ascii, uvFlip);
            
            // The intensity of the ASCII pixel (white mask on black)
            float intensity = ascii.r;

            // Base orange/gold color (unlit state) - highly visible
            vec3 baseColor = vec3(1.0, 0.45, 0.05) * intensity * 1.5;

            // If mouse is off-canvas, show base ascii
            if(u_mouse.x < 0.0){
                gl_FragColor = vec4(baseColor, 1.0);
                return;
            }

            // Glow effect around mouse
            float d = distance(uv, u_mouse);
            
            // Add some noise to the glow boundary
            float noise = snoise(uv * 12.0 - u_time * 1.5) * 0.04;
            float radius = 0.35 + noise;
            
            // Smooth glow falloff
            float glowAmount = 1.0 - smoothstep(0.0, radius, d);
            
            // Intense bright yellow/white glow for hovered ASCII
            vec3 glowColor = vec3(1.0, 0.9, 0.4) * intensity * 3.5;
            
            // Mix base color with glowing color based on distance
            vec3 finalColor = mix(baseColor, glowColor, glowAmount);

            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    function compileShader(type, src) {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(prog));
        return;
    }
    gl.useProgram(prog);

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uPhoto    = gl.getUniformLocation(prog, 'u_photo');
    const uAscii    = gl.getUniformLocation(prog, 'u_ascii');
    const uMouse    = gl.getUniformLocation(prog, 'u_mouse');
    const uTime     = gl.getUniformLocation(prog, 'u_time');

    // Mouse tracking (normalized 0..1)
    let mx = -1, my = -1, tmx = -1, tmy = -1;
    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        tmx = (e.clientX - r.left) / r.width;
        tmy = (e.clientY - r.top)  / r.height;   // keep Y as-is; shader handles it
    });
    canvas.addEventListener('mouseleave', () => { tmx = -1; tmy = -1; });

    // Generate ASCII texture from the portrait
    function buildAsciiTex(img, onDone) {
        const COLS = 80;
        const CHAR_ASPECT = 0.55; // monospace character h/w ratio correction

        // Sample image at ASCII grid resolution
        const sampleCanvas = document.createElement('canvas');
        sampleCanvas.width  = COLS;
        const sampleRows = Math.round(COLS * (img.height / img.width) * CHAR_ASPECT);
        sampleCanvas.height = sampleRows;
        const sc = sampleCanvas.getContext('2d');
        sc.drawImage(img, 0, 0, COLS, sampleRows);
        const px = sc.getImageData(0, 0, COLS, sampleRows).data;

        // Render ASCII at high resolution
        const FONT_PX = 14;                        // crisp, readable size
        const OUT_W = COLS * FONT_PX * 2;          // *2 for sharpness
        const CELL_H = Math.round(FONT_PX / CHAR_ASPECT);
        const OUT_H = sampleRows * CELL_H;

        const out = document.createElement('canvas');
        out.width  = OUT_W;
        out.height = OUT_H;
        const oc = out.getContext('2d');
        oc.fillStyle = '#050505';
        oc.fillRect(0, 0, OUT_W, OUT_H);

        const CHARS = "   .,:;+*?%S#@"; // dark->light density
        const cellW = OUT_W / COLS;

        oc.font         = `${FONT_PX * 2}px "Space Mono", "Courier New", monospace`;
        oc.textBaseline = 'top';

        for (let row = 0; row < sampleRows; row++) {
            for (let col = 0; col < COLS; col++) {
                const i = (row * COLS + col) * 4;
                const lum = 0.299 * px[i] + 0.587 * px[i+1] + 0.114 * px[i+2];
                const ci  = Math.min(CHARS.length - 1, Math.floor((lum / 255) * CHARS.length));
                const ch  = CHARS[ci];
                // Pure white for maximum crispness; shader colors it
                oc.fillStyle = '#ffffff';
                oc.fillText(ch, col * cellW, row * CELL_H);
            }
        }

        onDone(out);
    }

    function makeTexture(slot, src) {
        const tex = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + slot);
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
        // Non-power-of-two textures cannot use mipmaps in WebGL 1
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        return tex;
    }

    const img = new Image();
    // No crossOrigin — same origin, and crossOrigin can block canvas.getImageData on AVIF
    img.src = '/assets/images/profile/me.avif';
    img.onload = () => {
        // Resize canvas to real image aspect ratio
        const realH = Math.round(W * (img.naturalHeight / img.naturalWidth));
        canvas.height = Math.round(realH * DPR);
        canvas.style.height = realH + 'px';
        gl.viewport(0, 0, canvas.width, canvas.height);

        makeTexture(0, img);
        buildAsciiTex(img, (asciiCanvas) => {
            makeTexture(1, asciiCanvas);
            gl.useProgram(prog);
            gl.uniform1i(uPhoto, 0);
            gl.uniform1i(uAscii, 1);
            loop(performance.now());
        });
    };
    img.onerror = () => console.error('about-shader: failed to load portrait');

    const t0 = performance.now();
    function loop(now) {
        // Smooth mouse lerp
        mx += (tmx - mx) * 0.1;
        my += (tmy - my) * 0.1;

        gl.useProgram(prog);
        gl.uniform1f(uTime, (now - t0) * 0.001);
        gl.uniform2f(uMouse, mx, my);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(loop);
    }
}
