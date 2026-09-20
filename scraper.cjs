const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://lukebaffait.fr';
const PUBLIC_DIR = path.join(__dirname, 'public');

const filesToDownload = [
  '/styles/index.css',
  '/js/i18n.js',
  '/js/core-renderer.js',
  '/js/hero-project.js',
  '/js/vendor/gsap.min.js',
  '/js/vendor/ScrollTrigger.min.js',
  '/js/vendor/lenis.min.js',
  '/js/index.js',
  '/assets/fonts/Breton.woff2',
  '/assets/fonts/Machine.otf',
  '/assets/images/cover/cover.jpg',
  '/assets/favicon/favicon.ico',
  '/assets/images/profile/me.avif',
  '/assets/images/projects/Covers/cyberDiag_web.avif',
  '/assets/images/projects/Covers/Overtake.avif',
  '/assets/images/projects/Covers/Anima.avif',
  '/assets/images/projects/Covers/Beyond%20the%20clouds.avif',
  '/assets/images/projects/Covers/Zenith.avif',
  '/assets/images/projects/Covers/SkymcDB.avif',
  '/assets/images/projects/Covers/ChromaBlock.avif',
  '/assets/images/projects/Covers/CyberDiag.avif',
  '/assets/images/projects/Covers/Portfolio.avif',
  '/assets/images/art/Untitled2.png',
  '/assets/images/art/Untitled1.png',
];

// Wait, the image sequence for the reveal animation is 341 images long.
// '/assets/images/hero%20sequence/0001.jpg' ... to 0341.jpg
// We should download them too to make it an *exact* clone.
for (let i = 1; i <= 341; i++) {
  const pad = String(i).padStart(4, '0');
  filesToDownload.push(`/assets/images/hero%20sequence/${pad}.jpg`);
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    ensureDir(dest);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 404) {
          console.error(`404 Not Found: ${url}`);
          file.close();
          fs.unlink(dest, () => resolve());
      } else {
        file.close();
        fs.unlink(dest, () => reject(new Error(`Failed to download ${url}: ${response.statusCode}`)));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log('Starting downloads...');
  let i = 0;
  for (const file of filesToDownload) {
    const url = `${BASE_URL}${file.replace(/ /g, '%20')}`;
    const dest = path.join(PUBLIC_DIR, decodeURIComponent(file));
    try {
      await downloadFile(url, dest);
      i++;
      if (i % 50 === 0) console.log(`Downloaded ${i}/${filesToDownload.length}`);
    } catch (err) {
      console.error(`Error downloading ${file}:`, err.message);
    }
  }
  console.log('Done downloading assets.');
}

main();
