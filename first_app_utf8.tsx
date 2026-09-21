import { useEffect, useRef } from 'react';

const scripts = [
  'js/i18n.js',
  'js/core-renderer.js',
  'js/hero-project.js',
  'js/vendor/gsap.min.js',
  'js/vendor/ScrollTrigger.min.js',
  'js/vendor/lenis.min.js',
  'js/index.js'
];

function App() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    
    // We append scripts sequentially to preserve execution order
    const loadSequential = async () => {
      for (const src of scripts) {
        await new Promise<void>((resolve, _reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => resolve(); // Ignore errors so next scripts load
          document.body.appendChild(script);
        });
      }
    };
    
    loadSequential();
  }, []);

  return (
    <>
        <div className="intro-bg" id="intro-bg"></div>

  <div className="name-layer" id="name-layer">
    <div className="preloader-content" id="preloader-content">
      <div id="preloader-logo">L</div>
      <span id="preloader-luke">uke</span>
      <span id="preloader-baffait"> Baffait</span>
      <span id="preloader-dot">.</span>
    </div>
  </div>

  <div className="transition-panel" id="transition-panel">
    <div className="t-panel-dark" id="t-panel-dark"></div>
    <div className="t-panel-red" id="t-panel-red"></div>
  </div>

  <div className="scroll-wrap" id="scroll-wrap">
    <section className="hero" id="hero">
      <h1 className="sr-only" >Luke Baffait, Creative Developer, computer science student in Vannes, specialized in web development, animation and interactive design.</h1>
      <div className="hero-canvas" id="hero-canvas"></div>

      <div className="hero-content">
        <div className="hero-tagline" id="hero-tagline" >
          Quiet creator, <span className="other-accent">bringing ideas to life</span>,<br/>
          through motion, detail and softness.
        </div>

        <div className="hero-line" id="hero-line"></div>
        <div className="hero-bar" id="hero-bar">
          <div className="hero-bar-left">
            <span className="chr-hover" data-chr="≡ƒí║V3.0"></span>
          </div>
          <nav className="hero-bar-center" aria-label="R├⌐seaux sociaux">
            <a className="chr-hover" data-chr="Behance" href="https://www.behance.net/lukebaffait" target="_blank" rel="noopener noreferrer" aria-label="Behance"></a>
            <span className="sep" aria-hidden="true">/</span>
            <a className="chr-hover" data-chr="LinkedIn" href="https://www.linkedin.com/in/luke-baffait/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
            <span className="sep" aria-hidden="true">/</span>
            <a className="chr-hover" data-chr="GitHub" href="https://github.com/SkyNigh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          </nav>
          <nav className="hero-bar-right" aria-label="Navigation principale">
            <a className="chr-hover" data-chr="Work" href="works/" data-page-link="work" aria-label="Work"></a>
            <a className="chr-hover" data-chr="Info" href="info/" data-page-link="info" aria-label="Info"></a>
            <a className="chr-hover" data-chr="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
          </nav>
        </div>
      </div>
    </section>
  </div>

  <div className="reveal-image-wrap" id="reveal-image-wrap">
    <canvas className="reveal-image reveal-seq" id="reveal-canvas"></canvas>
    <div className="reveal-frame reveal-seq">
      <span className="reveal-corner tl"></span>
      <span className="reveal-corner tr"></span>
      <span className="reveal-corner bl"></span>
      <span className="reveal-corner br"></span>
    </div>
    <div className="reveal-overlay" id="reveal-overlay"></div>
    <p className="reveal-phrase" id="reveal-phrase">Basically, I make websites.</p>
  </div>

  <section className="section-after" id="section-after">
    <div className="about" id="about">
      <div className="about-text" id="about-text" >
        As a<span className="other-accent"> creative developer</span>, I craft tailor-made web experiences, blending technical precision and <span className="other-accent">emotion</span>.
      </div>
      <div className="about-sub" id="about-sub">
        My name is Luke. A passionate creator and computer science student in Vannes, I build memorable digital experiences, always seeking the symbiosis between art and information.
      </div>
      <div className="about-btn">
        <a className="chr-hover" data-chr="Info" href="info/" data-page-link="info" aria-label="En savoir plus sur moi"></a>
      </div>
      <div className="about-version"><svg style={{width: '1.25em', height: '1.25em', verticalAlign: '-0.25em'}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg>V3.0</div>
      <div className="about-photo-wrap" id="about-photo-wrap">
        <img className="about-photo" src="assets/images/profile/me.avif" alt="Luke Baffait" decoding="async" width="2500"
          height="3001" />
      </div>
    </div>

    <div className="projects" id="projects">
      <svg className="fluid-line-svg" id="fluid-line-svg" viewBox="0 0 1400 1400" preserveAspectRatio="xMidYMid slice">
        <path className="fluid-line" id="fluid-line" d="
          M -80,0
          C 300,-20  600,150  540,400
          C 490,650   0,655    300,1050
          C 600,1385 650,1250 850,1200
          C 1050,1150 1350,1250 1540,1300
        " />
      </svg>
      <div className="projects-inner">
        <div className="projects-list" id="projects-list">
          <div className="proj-item" data-id="cyberdiag" data-img="assets/images/projects/Covers/cyberDiag_web.avif"
            data-date="01 2025">CyberDiag website</div>
          <div className="proj-item" data-id="overtake" data-img="assets/images/projects/Covers/Overtake.avif"
            data-date="08 2026">Overtake</div>
          <div className="proj-item" data-id="anima" data-img="assets/images/projects/Covers/Anima.avif"
            data-date="06 2025">Anima</div>
          <div className="proj-item" data-id="beyond-the-clouds" data-img="assets/images/projects/Covers/Beyond%20the%20clouds.avif"
            data-date="05 2026">Beyond the Clouds</div>
          <div className="proj-item" data-id="zenith" data-img="assets/images/projects/Covers/Zenith.avif"
            data-date="11 2025">Zenith</div>
          <div className="proj-item" data-id="skymcdb" data-img="assets/images/projects/Covers/SkymcDB.avif"
            data-date="02 2026">SkymcDB</div>
          <div className="proj-item" data-id="chromablock" data-img="assets/images/projects/Covers/ChromaBlock.avif"
            data-date="03 2026">ChromaBlock</div>
          <div className="proj-item" data-id="cyberdiag-app" data-img="assets/images/projects/Covers/CyberDiag.avif"
            data-date="09 2025">CyberDiag app</div>
        </div>
      </div>
    </div>
  </section>

  <section className="circle-gallery" id="circle-gallery">
    <div className="circle-gallery-pin" id="circle-gallery-pin">
      <img className="cg-img" src="assets/images/projects/Covers/cyberDiag_web.avif" alt="CyberDiag ΓÇö site web" width="3000" height="2250" />
      <img className="cg-img" src="assets/images/projects/Covers/Overtake.avif" alt="Overtake ΓÇö simulateur de course automobile arcade" width="4000" height="3000" />
      <img className="cg-img" src="assets/images/projects/Covers/Anima.avif" alt="Anima ΓÇö site web sur la cause animale" width="3000" height="2250" />
      <img className="cg-img" src="assets/images/projects/Covers/Beyond%20the%20clouds.avif" alt="Beyond the Clouds ΓÇö monde 3D Three.js et WebGL" width="7257" height="5443" />
      <img className="cg-img" src="assets/images/projects/Covers/Zenith.avif" alt="Zenith ΓÇö navigateur web" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/SkymcDB.avif" alt="SkymcDB ΓÇö outil pour builders Minecraft" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/ChromaBlock.avif" alt="ChromaBlock ΓÇö version web de SkymcDB" width="2667" height="2000" />
      <img className="cg-img" src="assets/images/projects/Covers/CyberDiag.avif" alt="CyberDiag ΓÇö application desktop de cybers├⌐curit├⌐" width="1333" height="1000" />
      <p className="cg-phrase" id="cg-phrase">Each project is a chance to <span className="other-accent">learn</span>, <span className="other-accent">experiment</span> and push my limits.</p>
    </div>
  </section>

  <section className="skills" id="skills">
    <div className="skills-inner">
      <div className="skills-left">
        <div className="skills-subtitle" >Skills</div>
        <div className="skills-text" >
          Computer Science student in Vannes, specialized in cybersecurity, passionate about web development and design.
        </div>
        <div className="skills-separator"></div>
        <div><a className="skills-contact chr-hover" data-chr="Contact me≡ƒ₧ú" href="contact/"
            data-page-link="contact" aria-label="Me contacter"></a></div>
        <div className="skills-arrow" id="skills-arrow"><svg style={{width: '1.25em', height: '1.25em', verticalAlign: '-0.25em'}} viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
</svg></div>
      </div>
      <div className="skills-right" id="skills-right">
        <div className="skill-group open" data-group="frontend">
          <div className="skill-header"><span className="skill-header-title">Frontend</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>Electron</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="animation">
          <div className="skill-header"><span className="skill-header-title">Animation & 3D</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>GSAP</li>
              <li>Lenis</li>
              <li>Barba.js</li>
              <li>Three.js</li>
              <li>WebGL</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="backend">
          <div className="skill-header"><span className="skill-header-title">Backend</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="database">
          <div className="skill-header"><span className="skill-header-title" >Databases</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="devops">
          <div className="skill-header"><span className="skill-header-title">DevOps & Outils</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Docker</li>
              <li>Vercel</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Cloudflare</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="sysadmin">
          <div className="skill-header"><span className="skill-header-title" >System & Security</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Linux</li>
              <li>Bash</li>
              <li>Shell</li>
              <li>Owasp</li>
              <li>Metasploit</li>
              <li>Nmap</li>
              <li>OpenVAS</li>
              <li>Ossec</li>
            </ul>
          </div>
        </div>
        <div className="skill-group" data-group="design">
          <div className="skill-header"><span className="skill-header-title">Design</span><span
              className="skill-header-icon"></span></div>
          <div className="skill-body">
            <ul className="skill-body-inner">
              <li>Photoshop</li>
              <li>Canva</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="awards" id="awards">
    <div className="awards-inner">
      <div className="skills-subtitle awards-title">Awards & Misc</div>
      <div className="awards-list" id="awards-list">
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/Portfolio.avif">
          <div className="award-org">GSAP</div>
          <div className="award-site">lukebaffait.fr</div>
          <div className="award-prize">Site of the week</div>
          <div className="award-date">17 05 2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/Portfolio.avif">
          <div className="award-org">Awwwards</div>
          <div className="award-site">lukebaffait.fr</div>
          <div className="award-prize">Honorable Mention</div>
          <div className="award-date">26 05 2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/Portfolio.avif">
          <div className="award-org">Youtube</div>
          <div className="award-site">lukebaffait.fr</div>
          <div className="award-prize">Featured on Codegrid</div>
          <div className="award-date">25 06 2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/Portfolio.avif">
          <div className="award-org">Awwwards</div>
          <div className="award-site">lukebaffait.fr</div>
          <div className="award-prize">Portfolio Honors nomination</div>
          <div className="award-date">01 07 2026</div>
        </div>
        <div className="award-item" data-cursor-img="assets/images/projects/Covers/Portfolio.avif">
          <div className="award-org">landing.love</div>
          <div className="award-site">lukebaffait.fr</div>
          <div className="award-prize">featured for the Best animations</div>
          <div className="award-date">10 06 2026</div>
        </div>
      </div>
    </div>
  </section>

  <div className="contact-bg" id="contact-bg"></div>
  <div className="contact-blob-wrap" id="contact-blob-wrap">
    <div className="contact-blob" id="contact-blob"></div>
  </div>
  <section className="contact" id="contact">
    <div className="contact-pin" id="contact-pin">
      <div className="contact-title" id="contact-title">Contact</div>

      <div className="contact-dispo" id="contact-dispo">
        <p>Looking for a <span className="other-accent">16-week internship</span> starting January 2027. Eager to join an innovative team and contribute to ambitious projects.</p>
      </div>

      <div className="contact-frame" id="contact-frame">
        <img className="contact-frame-img" id="contact-frame-img" src="assets/images/art/Untitled2.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-dispo" id="contact-dispo-2">
        <p >
          I\'m available for<span className="other-accent"> freelance missions worldwide</span>, on<span className="other-accent"> your ambitious projects</span> and international collaborations.</p>
      </div>

      <div className="contact-frame" id="contact-frame-2">
        <img className="contact-frame-img" id="contact-frame-img-2" src="assets/images/art/Untitled1.png" alt=""
          loading="lazy" decoding="async" />
        <span className="frame-corner tl"></span>
        <span className="frame-corner tr"></span>
        <span className="frame-corner bl"></span>
        <span className="frame-corner br"></span>
      </div>

      <div className="contact-bottom" id="contact-bottom">
        <nav className="contact-socials" id="contact-socials" aria-label="R├⌐seaux sociaux">
          <a className="chr-hover" data-chr-contact="GitHub" href="https://github.com/SkyNigh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-contact="LinkedIn" href="https://www.linkedin.com/in/luke-baffait/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
          <a className="chr-hover" data-chr-contact="Behance" href="https://www.behance.net/lukebaffait" target="_blank" rel="noopener noreferrer" aria-label="Behance"></a>
        </nav>
        <a className="contact-mail" id="contact-mail" href="mailto:luke.baffait@yahoo.com">luke.baffait@yahoo.com</a>
      </div>
    </div>
  </section>

  <div className="footer-transition" id="footer-transition"></div>
  <footer className="footer" id="footer">
    <div className="footer-content" id="footer-content">
      <div className="footer-top">
        <div className="footer-top-col">
          <a className="chr-hover footer-mail" data-chr-footer="luke.baffait@yahoo.com"
            href="mailto:luke.baffait@yahoo.com" aria-label="Envoyer un mail"></a>
          <span className="chr-hover footer-date" data-chr-footer="┬⌐ 2026"></span>
        </div>
        <nav className="footer-top-col" aria-label="R├⌐seaux sociaux">
          <a className="chr-hover" data-chr-footer="GitHub" href="https://github.com/SkyNigh1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"></a>
          <a className="chr-hover" data-chr-footer="LinkedIn" href="https://www.linkedin.com/in/luke-baffait/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
          <a className="chr-hover" data-chr-footer="Behance" href="https://www.behance.net/lukebaffait" target="_blank" rel="noopener noreferrer" aria-label="Behance"></a>
        </nav>
        <nav className="footer-top-col" aria-label="Navigation pied de page">
          <a className="chr-hover" data-chr-footer="Work" href="works/" data-page-link="work" aria-label="Work"></a>
          <a className="chr-hover" data-chr-footer="Info" href="info/" data-page-link="info" aria-label="Info"></a>
          <a className="chr-hover" data-chr-footer="Contact" href="contact/" data-page-link="contact" aria-label="Contact"></a>
        </nav>
      </div>
      <div className="footer-ascii-wrap">
        <div className="footer-ascii left">
          <pre id="ascii-left"></pre>
        </div>
        <div className="footer-ascii right">
          <pre id="ascii-right"></pre>
        </div>
      </div>
      <div className="footer-name">
        <span className="footer-name-luke"><span className="first-letter">L</span>uke</span><span
          className="footer-name-baffait-wrap"><span className="footer-name-baffait">Baffait</span><span
            className="footer-name-dot">.</span></span>
      </div>
    </div>
  </footer>

  <div className="proj-preview" id="proj-preview">
    <div className="proj-card" id="proj-card">
      <div className="proj-meta">
        <span className="proj-date" id="proj-date">01 2025</span>
        <span className="proj-label">Preview</span>
      </div>
      <img id="proj-cover" src="assets/images/projects/Covers/CyberDiag.avif" alt="" width="1333" height="1000" />
    </div>
  </div>
  <div className="proj-cursor" id="proj-cursor">See project</div>

  <div className="page-fade" id="page-fade"></div>
  <div className="flying-title" id="flying-title"></div>
  <div className="work-transition-overlay" id="work-transition-overlay"></div>
  <div className="work-flying-text" id="work-flying-text">Work</div>

  <section className="project-detail" id="project-detail">
    <div className="detail-back chr-hover" id="detail-back" data-chr="≡ƒí╝BACK"></div>
    <div className="detail-info">
      <div className="detail-title-wrap" id="detail-title-wrap">
        <h1 className="detail-title" id="detail-title"></h1>
        <span className="detail-year" id="detail-year"></span>
      </div>
      <p className="detail-desc" id="detail-desc"></p>
      <div className="detail-tags" id="detail-tags"></div>
      <a className="detail-visit chr-hover" id="detail-visit" target="_blank" rel="noopener noreferrer"
        data-chr="VISIT ≡ƒí▓"></a>
    </div>
    <div className="detail-gallery-wrap" id="detail-gallery-wrap">
      <div className="detail-thumbs" id="detail-thumbs">
        <div className="detail-thumbs-inner" id="detail-thumbs-inner"></div>
      </div>
      <div className="detail-selected" id="detail-selected"></div>
    </div>
  </section>

  <div className="scroll-pct" id="scroll-pct">(0)</div>
  <div className="scroll-timeline" id="scroll-timeline">
    <span className="st-label" id="st-label"></span>
    <div className="st-bar" id="st-bar"></div>
  </div>

    </>
  );
}

export default App;
