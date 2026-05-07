import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 简单解析 frontmatter
function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/)
  if (!match) return {}
  
  const frontmatter = {}
  const lines = match[1].split('\n')
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim()
      // 移除引号
      frontmatter[key] = value.replace(/^["']|["']$/g, '')
    }
  }
  
  return frontmatter
}

// 扫描 pages 目录下的所有 .md 文件
function scanPages(dir, basePath = '') {
  const results = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      results.push(...scanPages(fullPath, path.join(basePath, item)))
    } else if (item.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const data = parseFrontmatter(content)
      const routePath = path.join(basePath, item.replace('.md', ''))

      if (data.title && !routePath.includes('private')) {
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

// 写入 public 目录
const outputPath = path.join(__dirname, '../public/search-index.json')
fs.writeFileSync(outputPath, JSON.stringify(index, null, 2))

console.log(`Generated search index with ${index.length} items`)
console.log('Output:', outputPath)
