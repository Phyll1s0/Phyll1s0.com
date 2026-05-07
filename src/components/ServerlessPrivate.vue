<script setup>
import { ref } from 'vue'

const password = ref('')
const content = ref('')
const error = ref(false)

async function unlock() {
  try {
    const response = await fetch('/api/unlock', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: password.value })
    })
    
    if (response.ok) {
      content.value = await response.text()
      error.value = false
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  }
}
</script>

<template>
  <div v-if="!content">
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="unlock">Unlock</button>
    <p v-if="error">Wrong password</p>
  </div>
  <div v-else v-html="content" />
</template>