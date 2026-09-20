const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://lukebaffait.fr';
const PUBLIC_DIR = path.join(__dirname, 'public');

const filesToDownload = [
  '/assets/images/footer/left.png',
  '/assets/images/footer/right.png',
  '/assets/images/shader%20background/background.png'
];

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
  for (const file of filesToDownload) {
    const url = `${BASE_URL}${file.replace(/ /g, '%20')}`;
    const dest = path.join(PUBLIC_DIR, decodeURIComponent(file));
    try {
      await downloadFile(url, dest);
      console.log(`Downloaded ${file}`);
    } catch (err) {
      console.error(`Error downloading ${file}:`, err.message);
    }
  }
}

main();
