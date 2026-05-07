<template>
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Ski Logo</title>
    <!-- 滑雪者剪影 - 极简线条 -->
    <path
      class="path1"
      d="M20 80 
         Q40 60 50 50
         Q60 40 70 30
         Q75 25 80 30
         Q85 35 80 40
         Q75 45 70 50
         Q60 60 50 70
         Q40 80 30 85"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      fill="none"
    />
    <!-- 滑雪板 -->
    <path
      class="path2"
      d="M30 85 Q50 90 70 85"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      fill="none"
    />
    <!-- 速度线 -->
    <path
      class="path3"
      d="M15 75 L25 78"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.6"
    />
    <path
      class="path3"
      d="M10 70 L20 73"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.4"
    />
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1, .path2, .path3 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1, .path2, .path3 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes draw {
  0% {
    stroke-dashoffset: 500px;
    stroke-dasharray: 0 500px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    stroke-dasharray: 250px 0;
  }
  100% {
    stroke-dasharray: 500px 0;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 500px 0;
  animation: draw 6s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
.path2 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 200px 0;
  animation: draw 4s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 1s;
}
.path3 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 100px 0;
  animation: draw 3s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 2s;
}
.dark .path1,
.dark .path2,
.dark .path3 {
  stroke: #fdfdfd;
}
</style>
