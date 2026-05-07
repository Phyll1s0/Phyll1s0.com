from PIL import Image
import os

# 提高 PIL 尺寸限制
Image.MAX_IMAGE_PIXELS = None

# 处理大图
file_path = '/home/louhao/Phyll1s0.Space/photos/04-winter-snow-mountain.jpg'
name = '04-winter-snow-mountain'

# 删除旧的 webp
for f in [f'/home/louhao/Phyll1s0.Space/photos/{name}.webp', 
          f'/home/louhao/Phyll1s0.Space/photos/{name}-thumb.webp']:
    if os.path.exists(f):
        os.remove(f)
        print(f'Removed old: {f}')

img = Image.open(file_path)
print(f'Original size: {img.width}x{img.height}')

# 缩小到 8000px 宽
max_size = 8000
if img.width > max_size:
    ratio = max_size / img.width
    new_height = int(img.height * ratio)
    img = img.resize((max_size, new_height), Image.LANCZOS)
    print(f'Resized to: {img.width}x{img.height}')

# 保存高清 WebP
full_path = f'/home/louhao/Phyll1s0.Space/photos/{name}.webp'
img.save(full_path, 'WEBP', quality=85)
print(f'✅ Full: {name}.webp')

# 生成缩略图
thumb_path = f'/home/louhao/Phyll1s0.Space/photos/{name}-thumb.webp'
img_thumb = img.copy()
img_thumb.thumbnail((800, 800), Image.LANCZOS)
img_thumb.save(thumb_path, 'WEBP', quality=60)
print(f'✅ Thumbnail: {name}-thumb.webp')

print('Done!')
