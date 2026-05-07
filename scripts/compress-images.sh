#!/bin/bash
# 压缩图片（保持原格式）

for file in /home/louhao/Phyll1s0.Space/photos/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  [ -e "$file" ] || continue
  
  filename=$(basename "$file")
  
  # 使用 ImageMagick 压缩
  convert "$file" -quality 85 -resize 1920x1080\> "/tmp/${filename}"
  mv "/tmp/${filename}" "$file"
  
  echo "Compressed: $filename"
done

echo "Done!"