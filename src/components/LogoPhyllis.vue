<template>
  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Phyllis0 Logo</title>
    <!-- 手写体风格的 phyllis0 -->
    <path
      class="path1"
      d="M15 70 
         Q20 20 25 50 
         Q30 80 35 40
         M40 60
         Q45 30 50 50
         Q55 70 60 40
         M65 55
         Q70 35 75 50
         Q80 65 85 45
         M90 50
         Q95 40 100 50
         Q105 60 110 45
         M115 55
         Q120 45 125 55
         Q130 65 135 50
         M140 50
         Q145 40 150 50
         Q155 60 160 45
         M165 55
         L175 55
         M180 40
         Q185 50 190 40
         Q195 30 190 50
         Q185 70 180 60"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      fill="none"
    />
    <!-- 下划线装饰 -->
    <path
      class="path2"
      d="M10 75 Q100 85 195 75"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
</template>

<style scoped>
@media (prefers-reduced-motion) {
  .path1, .path2 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@media print {
  .path1, .path2 {
    animation: none !important;
    stroke-dasharray: unset !important;
  }
}
@keyframes draw {
  0% {
    stroke-dashoffset: 1000px;
    stroke-dasharray: 0 1000px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    stroke-dasharray: 500px 0;
  }
  100% {
    stroke-dasharray: 1000px 0;
  }
}
.path1 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 1000px 0;
  animation: draw 8s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 0s;
}
.path2 {
  stroke-dashoffset: 1px;
  stroke-dasharray: 300px 0;
  animation: draw 6s ease forwards infinite;
  transform-origin: center;
  stroke: #303030;
  animation-delay: 2s;
}
.dark .path1,
.dark .path2 {
  stroke: #fdfdfd;
}
</style>
