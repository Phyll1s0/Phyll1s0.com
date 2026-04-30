<script setup lang="ts">
import type { Photo } from '../../../photos/data'
import { blurhashToGradientCssObject } from '@unpic/placeholder'
import { ref } from 'vue'

defineProps<{
  photos: Photo[]
  view?: 'cover' | 'contain'
}>()

const selectedPhoto = ref<Photo | null>(null)
const isLoading = ref(false)
const isLoaded = ref(false)

function openPhoto(photo: Photo) {
  selectedPhoto.value = photo
  isLoading.value = true
  isLoaded.value = false
}

function closePhoto() {
  selectedPhoto.value = null
  isLoading.value = false
  isLoaded.value = false
}

function onImageLoad() {
  isLoading.value = false
  isLoaded.value = true
}
</script>

<template>
  <div class="photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" max-w-500 mx-auto>
    <div v-for="photo, idx in photos" :key="idx" class="cursor-pointer" @click="openPhoto(photo)">
      <img
        :src="photo.thumbUrl || photo.url"
        :alt="photo.text"
        :data-photo-index="idx"
        :style="photo.blurhash && view !== 'contain' ? blurhashToGradientCssObject(photo.blurhash) as any : ''"
        loading="lazy"
        w-full
        :class="view === 'contain' ? 'object-contain sm:aspect-square' : 'object-cover aspect-square'"
      >
    </div>
  </div>

  <!-- 大图弹窗 -->
  <div v-if="selectedPhoto" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90" @click="closePhoto">
    <!-- 加载中 -->
    <div v-if="isLoading" class="text-white text-xl">
      Loading...
    </div>

    <!-- 高清图 -->
    <img
      v-show="isLoaded"
      :src="selectedPhoto.url"
      :alt="selectedPhoto.text"
      class="max-w-[90vw] max-h-[90vh] object-contain"
      @load="onImageLoad"
    >

    <button class="absolute top-4 right-4 text-white text-2xl" @click="closePhoto">
      ✕
    </button>
  </div>
</template>
