import { useEffect, useRef } from 'react';

// Minimal birds — positioned in the upper sky area
const BIRDS = [
  { top: '12%', delay: '0s',  dur: '25s', size: 28 },
  { top: '20%', delay: '14s', dur: '30s', size: 20 },
  { top: '8%',  delay: '22s', dur: '35s', size: 16 },
];

export default function EyeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const maxScroll = 1200;
        const scrollY = window.scrollY;
        const t = Math.min(scrollY / maxScroll, 1);

        // Zoom into hole
        const scale = 1 + t * 15;
        el.style.transform = `scale(${scale})`;

        // Fade out text early
        if (nameRef.current) {
          nameRef.current.style.opacity = String(Math.max(0, 1 - t / 0.25));
        }

        // Fade out portal in later part of scroll
        const opacity = t > 0.6 ? Math.max(0, 1 - (t - 0.6) / 0.4) : 1;
        el.style.opacity = String(opacity);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const imgUrl = 'url(/assets/images/portal_transparent.png)';

  return (
    <>
      <style>{`
        @keyframes birdFly {
          0%   { transform: translateX(-15vw) translateY(0px) scale(1); opacity: 0; }
          10%  { opacity: 0.9; }
          90%  { opacity: 0.9; }
          100% { transform: translateX(115vw) translateY(-15px) scale(0.8); opacity: 0; }
        }
        .sky-bird {
          animation: birdFly linear infinite;
          position: absolute;
          pointer-events: none;
        }
        @keyframes cloudDrift {
          0%   { transform: scale(1)    translate(0, 0); }
          25%  { transform: scale(1.04) translate(-1.5%, 0.5%); }
          50%  { transform: scale(1.02) translate(0.5%, -0.5%); }
          75%  { transform: scale(1.05) translate(-0.5%, 1%); }
          100% { transform: scale(1)    translate(0, 0); }
        }
        .sv-name-static {
          font-family: 'other', sans-serif;
          font-size: clamp(3.5rem, 12vw, 12rem);
          letter-spacing: -0.02em;
          font-weight: normal;
          color: #f0f0f0;
          text-shadow: 0 4px 25px rgba(0,0,0,0.35);
          margin: 0;
          line-height: 1;
        }
        #eye-portal {
          will-change: transform, opacity;
          transform-origin: 50% 23%;
        }
      `}</style>

      <div
        id="eye-portal"
        ref={containerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* ── Layer 1: Full portal image with living cloud animation ── */}
        <div style={{
          position: 'absolute',
          inset: '-3%',
          zIndex: 1,
          backgroundImage: imgUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          animation: 'cloudDrift 16s ease-in-out infinite',
        }} />

        {/* ── Layer 2: Birds on the sky ── */}
        {BIRDS.map((b, i) => (
          <svg
            key={i}
            className="sky-bird"
            style={{
              top: b.top,
              left: '-15vw',
              width: b.size,
              zIndex: 2,
              animationDuration: b.dur,
              animationDelay: b.delay,
            }}
            viewBox="0 0 40 16" fill="none"
          >
            <path
              d="M20 8 Q12 1 2 6 Q10 8 20 8 Q30 8 38 6 Q28 1 20 8Z"
              fill="rgba(10,10,10,0.8)"
            />
          </svg>
        ))}

        {/* ── Layer 3: Santosh V. text — some clouds naturally cover parts of it for depth ── */}
        <div
          ref={nameRef}
          style={{
            position: 'absolute',
            top: '60%',
            width: '100%',
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <h1 className="sv-name-static">Santosh V.</h1>
        </div>

        {/* ── Layer 4: The Man (Clean Cutout) ──
            This puts the man IN FRONT of the text, but since it's a transparent PNG of just the man,
            there is no weird square and the background clouds are untouched. */}
        <div style={{
          position: 'absolute',
          inset: '-3%',
          zIndex: 4,
          backgroundImage: 'url(/assets/images/portal_man_alpha.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          animation: 'cloudDrift 16s ease-in-out infinite',
          WebkitMaskImage: 'linear-gradient(to right, transparent 25%, black 45%, black 55%, transparent 75%)',
          maskImage: 'linear-gradient(to right, transparent 25%, black 45%, black 55%, transparent 75%)',
        }} />
      </div>
    </>
  );
}
