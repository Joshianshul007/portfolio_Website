import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/images';

const files = fs.readdirSync(inputDir);

for (const file of files) {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const inputPath = path.join(inputDir, file);
    const fileName = path.basename(file, path.extname(file));
    const outputPath = path.join(inputDir, `${fileName}.webp`);

    try {
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true }) // Max width 1200
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
      console.log(`Converted ${file} to ${fileName}.webp successfully.`);
    } catch (error) {
      console.error(`Error converting ${file}:`, error);
    }
  }
}
console.log("All done!");
