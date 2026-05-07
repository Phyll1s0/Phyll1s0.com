<script setup lang="ts">
import { ref, computed } from 'vue'
import CryptoJS from 'crypto-js'

const props = defineProps<{
  salt: string
  iv: string
  authTag: string
  encryptedContent: string
}>()

const password = ref('')
const decrypted = ref('')
const error = ref('')
const showInput = ref(true)

function decrypt() {
  try {
    error.value = ''
    
    // 使用 PBKDF2 生成密钥
    const key = CryptoJS.PBKDF2(password.value, 
      CryptoJS.enc.Hex.parse(props.salt), {
        keySize: 256 / 32,
        iterations: 100000
      })
    
    // 解密
    const decrypted_bytes = CryptoJS.AES.decrypt(props.encryptedContent, 
      key.toString(), {
        iv: CryptoJS.enc.Hex.parse(props.iv),
        mode: CryptoJS.mode.GCM,
        padding: CryptoJS.pad.NoPadding
      })
    
    decrypted.value = decrypted_bytes.toString(CryptoJS.enc.Utf8)
    
    if (!decrypted.value) {
      throw new Error('解密失败')
    }
    
    showInput.value = false
  } catch (e) {
    error.value = '密码错误，请重试'
    password.value = ''
  }
}
</script>

<template>
  <div v-if="showInput" class="encrypted-post">
    <div class="lock-icon">
      <div i-ri-lock-line text-4xl op50 />
    </div>
    <p class="text-lg mb-4">此文章已加密</p>
    <div class="flex gap-2">
      <input 
        v-model="password" 
        type="password" 
        placeholder="输入密码..."
        class="px-4 py-2 rounded border dark:border-gray-700 bg-transparent"
        @keyup.enter="decrypt"
      />
      <button 
        @click="decrypt"
        class="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
      >
        解锁
      </button>
    </div>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
  <div v-else class="decrypted-content" v-html="decrypted" />
</template>

<style scoped>
.encrypted-post {
  @apply flex flex-col items-center justify-center py-20;
}
</style>
