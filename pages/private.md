---
title: Private
layout: full-width
---

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

<div v-if="!unlocked" class="flex flex-col items-center justify-center min-h-[50vh] gap-4">
  <div i-ri-lock-line text-4xl op50 />
  <h2 class="text-xl font-bold">Private Area</h2>
  <p class="text-sm op50">Enter password to access private posts</p>

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

  <p v-if="error" class="text-red-500 text-sm">Wrong password, try again</p>
</div>

<div v-else>
  <h1 class="text-2xl font-bold mb-8">Private Posts</h1>

  <div class="grid gap-4">
    <a href="/posts/private-diary" class="block p-4 rounded border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      <h3 class="font-bold">私人日记</h3>
      <p class="text-sm op50">2026-04-30</p>
    </a>
  </div>
</div>
