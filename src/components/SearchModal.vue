<script setup lang="ts">
import { ref, computed } from 'vue'

const showModal = ref(false)
const searchQuery = ref('')

// 文章索引数据，构建时生成
const searchIndex = ref<any[]>([])

// 加载搜索索引
async function loadSearchIndex() {
  try {
    const response = await fetch('/search-index.json')
    const data = await response.json()
    searchIndex.value = data
  } catch (e) {
    console.error('Failed to load search index:', e)
  }
}

// 简单模糊搜索
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  
  const query = searchQuery.value.toLowerCase()
  return searchIndex.value.filter((item: any) => {
    return item.title?.toLowerCase().includes(query) ||
           item.path?.toLowerCase().includes(query)
  }).slice(0, 10)
})

// 打开搜索
function openSearch() {
  showModal.value = true
  loadSearchIndex()
  // 聚焦输入框
  setTimeout(() => {
    document.querySelector('.search-input')?.focus()
  }, 100)
}

// 关闭搜索
function closeSearch() {
  showModal.value = false
  searchQuery.value = ''
}

// 键盘快捷键
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K 打开搜索
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      openSearch()
    }
    // ESC 关闭搜索
    if (e.key === 'Escape' && showModal.value) {
      closeSearch()
    }
  })
})
</script>

<template>
  <!-- 搜索图标 -->
  <button
    title="Search (Cmd+K)"
    class="search-trigger"
    @click="openSearch()"
  >
    <div i-ri-search-line />
  </button>

  <!-- 搜索弹窗 -->
  <Teleport to="body">
    <div
      v-if="showModal"
      class="search-modal"
      @click.self="closeSearch()"
    >
      <div class="search-container">
        <div class="search-header">
          <div i-ri-search-line class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            class="search-input"
            placeholder="Search articles..."
          />
          <button class="search-close" @click="closeSearch()">
            <div i-ri-close-line />
          </button>
        </div>
        
        <div class="search-results">
          <div v-if="!searchQuery.trim()" class="search-hint">
            Type to search articles...
          </div>
          
          <div v-else-if="searchResults.length === 0" class="search-empty">
            No results found
          </div>
          
          <RouterLink
            v-for="result in searchResults"
            :key="result.path"
            :to="result.path"
            class="search-result"
            @click="closeSearch()"
          >
            <div class="result-title">{{ result.title }}</div>
            <div class="result-path">{{ result.path }}</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.search-trigger {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  background: none;
  border: none;
  padding: 0;
  font-size: 1.2em;
}

.search-trigger:hover {
  opacity: 1;
}

.search-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.search-container {
  background: var(--c-bg, #fff);
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 70vh;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.dark .search-container {
  background: #1a1a1a;
}

.search-header {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  gap: 12px;
}

.search-icon {
  font-size: 1.2em;
  opacity: 0.5;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.1em;
  background: transparent;
  color: inherit;
}

.search-close {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  padding: 4px;
}

.search-close:hover {
  opacity: 1;
}

.search-results {
  overflow-y: auto;
  max-height: 50vh;
}

.search-hint,
.search-empty {
  padding: 40px 20px;
  text-align: center;
  opacity: 0.5;
}

.search-result {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
  transition: background 0.2s;
}

.search-result:hover {
  background: rgba(128, 128, 128, 0.1);
}

.result-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.result-path {
  font-size: 0.85em;
  opacity: 0.5;
}
</style>