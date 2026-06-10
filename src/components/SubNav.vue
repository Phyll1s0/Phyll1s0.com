<script setup lang="ts">
import { useRoute } from 'vue-router/auto'
import { contentCategory, englishOnly } from '../logics'

const inactiveStyle = 'opacity-20 hover:opacity-50'
const activeStyle = 'opacity-100 underline'
const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'academic', label: 'Academic' },
  { value: 'life', label: 'Life' },
] as const

const route = useRoute()
</script>

<template>
  <div class="prose m-auto mb-8 select-none animate-none! op100!">
    <div flex="~ gap-2 wrap" items-center mb2 text-sm>
      <button flex="~ gap1" items-center op30 hover:op60 @click="englishOnly = !englishOnly">
        <div :i="englishOnly ? 'carbon-checkbox-checked' : 'carbon-checkbox'" />
        English Only
      </button>

      <div flex="~ gap1 wrap" items-center>
        <button
          v-for="option in categoryOptions"
          :key="option.value"
          rounded px2 py0.5 transition
          :aria-pressed="contentCategory === option.value"
          :class="contentCategory === option.value ? 'op80 bg-zinc:15' : 'op30 hover:op60'"
          @click="contentCategory = option.value"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <div mb-0 flex="~ col gap-1 sm:row sm:gap-3 wrap" text-3xl>
      <RouterLink to="/posts" class="!border-none" :class="route.path === '/posts' ? activeStyle : inactiveStyle">
        Blog
      </RouterLink>
      <RouterLink to="/presentations" class="!border-none" :class="route.path === '/presentations' ? activeStyle : inactiveStyle">
        Presentations
      </RouterLink>
      <RouterLink to="/notes" class="!border-none" :class="route.path === '/notes' ? activeStyle : inactiveStyle">
        Notes
      </RouterLink>
      <RouterLink to="/private" class="!border-none" :class="route.path === '/private' ? activeStyle : inactiveStyle">
        Private
      </RouterLink>
    </div>
  </div>
</template>
