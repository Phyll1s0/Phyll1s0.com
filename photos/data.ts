export interface PhotoMate {
  text?: string
  lang?: string
  blurhash?: string
}

export interface Photo extends PhotoMate {
  name: string
  url: string
  thumbUrl?: string
}

const metaInfo = Object.entries(
  import.meta.glob<PhotoMate>('./**/*.json', {
    eager: true,
    import: 'default',
  }),
).map(([name, data]) => {
  name = name.replace(/\.\w+$/, '').replace(/^\.\//, '')
  return {
    name,
    data,
  }
})

// 获取所有图片（排除缩略图）
const allImages = Object.entries(
  import.meta.glob<string>('./**/*.{jpg,png,webp,JPG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

// 分离原图和缩略图
const thumbs = new Map<string, string>()
const fullImages: [string, string][] = []

for (const [name, url] of allImages) {
  const cleanName = name.replace(/\.\w+$/, '').replace(/^\.\//, '')

  if (cleanName.endsWith('-thumb')) {
    // 缩略图
    const baseName = cleanName.replace('-thumb', '')
    thumbs.set(baseName, url)
  }
  else {
    // 原图
    fullImages.push([cleanName, url])
  }
}

const photos = fullImages
  .map(([name, url]): Photo => {
    return {
      ...metaInfo.find(info => info.name === name)?.data,
      name,
      url,
      thumbUrl: thumbs.get(name),
    }
  })
  .sort((a, b) => b.name.localeCompare(a.name))

export default photos
