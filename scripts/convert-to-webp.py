from PIL import Image
import os
import glob

photos_dir = '/home/louhao/Phyll1s0.Space/photos'

# 获取所有图片文件
files = glob.glob(os.path.join(photos_dir, '*.png')) + \
        glob.glob(os.path.join(photos_dir, '*.jpg')) + \
        glob.glob(os.path.join(photos_dir, '*.jpeg'))

for file_path in files:
    filename = os.path.basename(file_path)
    name = os.path.splitext(filename)[0]
    output_path = os.path.join(photos_dir, f'{name}.webp')
    
    try:
        img = Image.open(file_path)
        img.save(output_path, 'WEBP', quality=85)
        print(f'✅ Converted: {filename} → {name}.webp')
    except Exception as e:
        print(f'❌ Failed: {filename} - {e}')

print('\nDone!')
