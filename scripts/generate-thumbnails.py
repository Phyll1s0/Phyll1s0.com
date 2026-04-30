from PIL import Image
import os
import glob

photos_dir = '/home/louhao/Phyll1s0.Space/photos'

# 获取所有原图文件
files = glob.glob(os.path.join(photos_dir, '*.png')) + \
        glob.glob(os.path.join(photos_dir, '*.jpg')) + \
        glob.glob(os.path.join(photos_dir, '*.jpeg'))

for file_path in files:
    filename = os.path.basename(file_path)
    name = os.path.splitext(filename)[0]
    
    # 生成缩略图（压缩版）
    thumb_path = os.path.join(photos_dir, f'{name}-thumb.webp')
    # 生成高清 WebP
    full_path = os.path.join(photos_dir, f'{name}.webp')
    
    try:
        img = Image.open(file_path)
        
        # 缩略图：宽度 800px，质量 60%
        img_thumb = img.copy()
        img_thumb.thumbnail((800, 800), Image.LANCZOS)
        img_thumb.save(thumb_path, 'WEBP', quality=60)
        print(f'✅ Thumbnail: {filename} → {name}-thumb.webp')
        
        # 高清图：原尺寸，质量 85%
        img.save(full_path, 'WEBP', quality=85)
        print(f'✅ Full: {filename} → {name}.webp')
        
    except Exception as e:
        print(f'❌ Failed: {filename} - {e}')

print('\nDone!')
