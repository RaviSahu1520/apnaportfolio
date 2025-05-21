// build-netlify.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Run build commands
console.log('Building the frontend...');
execSync('npm run build', { stdio: 'inherit' });

// Ensure public images are copied
console.log('Copying public assets...');
const sourceImageDir = path.join(process.cwd(), 'client/public/images');
const targetImageDir = path.join(process.cwd(), 'dist/images');

// Create directory if it doesn't exist
if (!fs.existsSync(targetImageDir)) {
  fs.mkdirSync(targetImageDir, { recursive: true });
}

// Copy team images
const teamImagesSource = path.join(sourceImageDir, 'team');
const teamImagesTarget = path.join(targetImageDir, 'team');

if (!fs.existsSync(teamImagesTarget)) {
  fs.mkdirSync(teamImagesTarget, { recursive: true });
}

if (fs.existsSync(teamImagesSource)) {
  const files = fs.readdirSync(teamImagesSource);
  for (const file of files) {
    const srcPath = path.join(teamImagesSource, file);
    const destPath = path.join(teamImagesTarget, file);
    fs.copyFileSync(srcPath, destPath);
  }
}

console.log('Build completed successfully!');