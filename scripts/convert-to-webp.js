const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const photosDir = '/home/louhao/Phyll1s0.Space/photos';

// 获取所有图片文件
const files = fs.readdirSync(photosDir)
  .filter(file => /\.(png|jpg|jpeg|PNG|JPG|JPEG)$/.test(file));

async function convert() {
  for (const file of files) {
    const inputPath = path.join(photosDir, file);
    const name = path.parse(file).name;
    const outputPath = path.join(photosDir, `${name}.webp`);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ Converted: ${file} → ${name}.webp`);
    } catch (err) {
      console.error(`❌ Failed: ${file}`, err.message);
    }
  }
  
  console.log('\nDone!');
}

convert();
