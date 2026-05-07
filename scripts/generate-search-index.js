import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 扫描 pages 目录下的所有 .md 文件
function scanPages(dir, basePath = '') {
  const results = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 递归扫描子目录
      results.push(...scanPages(fullPath, path.join(basePath, item)))
    } else if (item.endsWith('.md')) {
      // 读取 markdown 文件的 frontmatter
      const content = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(content)

      if (data.title) {
        const routePath = path.join(basePath, item.replace('.md', ''))
        results.push({
          title: data.title,
          path: '/' + routePath.replace(/\\/g, '/'),
          date: data.date,
          type: data.type,
        })
      }
    }
  }

  return results
}

// 生成搜索索引
const pagesDir = path.join(__dirname, '../pages')
const index = scanPages(pagesDir)

// 写入 public 目录，构建时会复制到 dist
const outputPath = path.join(__dirname, '../public/search-index.json')
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2))

console.log(`Generated search index with ${index.length} items`)
console.log('Output:', outputPath)
