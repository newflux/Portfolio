const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf8');

// Replace texts
const replacements = {
  'data-i18n="index.h1">Luke Baffait — Creative Developer, étudiant en informatique à Vannes, spécialisé en développement web, animation et design interactif.': '>Luke Baffait, Creative Developer, computer science student in Vannes, specialized in web development, animation and interactive design.',
  'data-i18n="index.hero.tagline">\n          Créatif discret, <span className="other-accent">je donne vie</span> aux idées,<br/>\n          entre mouvement, détail et douceur.': '>\n          Quiet creator, <span className="other-accent">bringing ideas to life</span>,<br/>\n          through motion, detail and softness.',
  'data-i18n="index.about.text">\n        En tant que<span className="other-accent"> creative developer</span>, je conçois des expériences web sur mesure , en\n        mêlant précision technique et <span className="other-accent">emotion</span>.': '>\n        As a<span className="other-accent"> creative developer</span>, I craft tailor-made web experiences, blending technical precision and <span className="other-accent">emotion</span>.',
  'data-i18n="index.about.sub">\n        Je m\\\'appelle Luke. Créatif passionné, je suis étudiant en informatique à Vannes, et je produis des expériences\n        digitales mémorables, toujours à la recherche d\\\'une symbiose entre l\\\'art et l\\\'information.': '>\n        My name is Luke. A passionate creator and computer science student in Vannes, I build memorable digital experiences, always seeking the symbiosis between art and information.',
  'data-i18n="index.cg.phrase">Chaque projet est une occasion d\\\'<span className="other-accent">apprendre</span>,\n        d\\\'<span className="other-accent">expérimenter</span> et de repousser mes limites.': '>Each project is a chance to <span className="other-accent">learn</span>, <span className="other-accent">experiment</span> and push my limits.',
  'data-i18n="index.skills.subtitle">Compétences': '>Skills',
  'data-i18n="index.skills.text">\n          Étudiant en BUT Informatique à Vannes, spécialisé en cybersécurité, passionné par le développement et le\n          design web.': '>\n          Computer Science student in Vannes, specialized in cybersecurity, passionate about web development and design.',
  'data-i18n="index.skills.database">Bases de données': '>Databases',
  'data-i18n="index.skills.security">Système & Sécurité': '>System & Security',
  'data-i18n="index.contact.dispo1">À la recherche d\\\'un <span className="other-accent">stage de 16 semaines</span> à partir de janvier 2027. Motivé à rejoindre\n          une équipe innovante et à contribuer à des projets ambitieux.': '>Looking for a <span className="other-accent">16-week internship</span> starting January 2027. Eager to join an innovative team and contribute to ambitious projects.',
  'data-i18n="index.contact.dispo2">Je suis disponible pour<span className="other-accent"> des missions en freelance</span> partout dans le monde,\n          sur<span className="other-accent"> vos projets ambitieux</span> et des collaborations internationales.': '>\n          I\\\'m available for<span className="other-accent"> freelance missions worldwide</span>, on<span className="other-accent"> your ambitious projects</span> and international collaborations.',
  'data-chr="🡼RETOUR" data-i18n-attr="data-chr:index.detail.back"': 'data-chr="🡼BACK"',
  'data-chr="VISITER 🡲" data-i18n-attr="data-chr:index.detail.visit"': 'data-chr="VISIT 🡲"'
};

for (const [key, value] of Object.entries(replacements)) {
  app = app.replace(key, value);
}

// Remove remaining data-i18n attributes
app = app.replace(/ data-i18n="[^"]+"/g, '');

fs.writeFileSync('src/App.tsx', app);
console.log('App.tsx updated to English.');
