<template>
  <!-- 选项 1: 小猫咪 -->
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Cat Logo</title>
    <!-- 猫耳朵 -->
    <path d="M20 35 L30 15 L40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M60 35 L70 15 L80 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- 猫头轮廓 -->
    <circle cx="50" cy="55" r="25" stroke="currentColor" stroke-width="3" fill="none"/>
    <!-- 眼睛 -->
    <circle cx="40" cy="50" r="3" fill="currentColor"/>
    <circle cx="60" cy="50" r="3" fill="currentColor"/>
    <!-- 鼻子 -->
    <path d="M47 58 L53 58 L50 62 Z" fill="currentColor"/>
    <!-- 胡须 -->
    <path d="M30 55 L20 52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M30 60 L20 63" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M70 55 L80 52" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M70 60 L80 63" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
</template>

<style scoped>
svg {
  color: #303030;
}
.dark svg {
  color: #fdfdfd;
}
</style>