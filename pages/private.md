---
title: Private
display: ''
art: plum
---

<SubNav />

<script setup>
import { ref } from 'vue'

const password = ref('')
const unlocked = ref(false)
const error = ref(false)

function checkPassword() {
  if (password.value === '20051021') {
    unlocked.value = true
    error.value = false
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<div v-if="!unlocked" class="prose m-auto mb-8 flex flex-col items-center justify-center min-h-[40vh] gap-4 slide-enter">
  <div i-ri-lock-line text-4xl op50 />
  <h1 class="text-2xl font-bold">Private</h1>
  <p class="op50">Enter password to access private posts</p>

  <div class="flex gap-2">
    <input
      v-model="password"
      type="password"
      placeholder="Password..."
      class="px-4 py-2 rounded border dark:border-gray-700 bg-transparent"
      @keyup.enter="checkPassword"
    />
    <button
      @click="checkPassword"
      class="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
    >
      Unlock
    </button>
  </div>

  <p v-if="error" class="text-red-500">Wrong password, try again</p>
</div>

<div v-else class="prose m-auto">
  <h2 class="mb-8 slide-enter-50">Private Posts</h2>

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
