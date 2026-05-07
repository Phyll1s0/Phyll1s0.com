#!/bin/bash
# 批量转换为 WebP

for file in /home/louhao/Phyll1s0.Space/photos/*.{png,jpg,jpeg,PNG,JPG,JPEG}; do
  [ -e "$file" ] || continue
  
  filename=$(basename "$file")
  name="${filename%.*}"
  
  # 转换为 WebP，质量 85%
  cwebp -q 85 "$file" -o "/home/louhao/Phyll1s0.Space/photos/${name}.webp"
  
  echo "Converted: $filename → ${name}.webp"
done

echo "Done!"
