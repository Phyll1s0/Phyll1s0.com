---
title: Private
display: ''
art: plum
---

<SubNav />

<script setup>
import { ref, onMounted } from 'vue'

const password = ref('')
const unlocked = ref(false)
const error = ref(false)

// 检查是否已解锁
onMounted(() => {
  const isUnlocked = localStorage.getItem('private-unlocked')
  if (isUnlocked === 'true') {
    unlocked.value = true
  }
})

function checkPassword() {
  if (password.value === '20051021') {
    unlocked.value = true
    error.value = false
    localStorage.setItem('private-unlocked', 'true') // 记住解锁状态
  } else {
    error.value = true
    password.value = ''
  }
}

// 可选：添加登出功能
function lock() {
  unlocked.value = false
  localStorage.removeItem('private-unlocked')
}
</script>

<div v-if="!unlocked" class="prose m-auto mb-8 flex flex-col items-center justify-center min-h-[40vh] gap-4 slide-enter">
  <div class="flex gap-2">
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="px-4 py-2 rounded border dark:border-gray-700 bg-transparent"
      @keyup.enter="checkPassword"
    />
    <button
      @click="checkPassword"
      class="px-4 py-2 rounded border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Unlock
    </button>
  </div>

  <p v-if="error" class="text-red-500 text-sm">Wrong password</p>
</div>

<div v-else class="prose m-auto">
  <div class="flex justify-between items-center mb-8">
    <h2 class="slide-enter-50">Private Posts</h2>
    <button
      @click="lock"
      class="text-sm op50 hover:op100 transition"
      title="Lock private area"
    >
      <span i-ri-lock-line /> Lock
    </button>
  </div>

  <div class="grid gap-4">
    <RouterLink to="/posts/private-diary" class="item block font-normal mb-6 mt-2 no-underline slide-enter">
      <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
        <div class="title text-lg leading-1.2em">
          <span>私人日记</span>
        </div>
        <div flex="~ gap-2 items-center">
          <span text-sm op50 ws-nowrap>2026-04-30</span>
        </div>
      </li>
    </RouterLink>
  </div>
</div>
