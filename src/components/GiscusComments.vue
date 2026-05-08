<script setup lang='ts'>
import { isDark } from '~/logics'

const route = useRoute()
const container = ref<HTMLElement>()

const giscusOrigin = 'https://giscus.app'
const giscusTheme = computed(() => isDark.value ? 'transparent_dark' : 'noborder_light')

const giscusAttributes = computed(() => ({
  'data-repo': 'Phyll1s0/Phyll1s0.com',
  'data-repo-id': 'R_kgDOSXmRag',
  'data-category': 'General',
  'data-category-id': 'DIC_kwDOSXmRas4C8l-0',
  'data-mapping': 'pathname',
  'data-strict': '1',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-theme': giscusTheme.value,
  'data-lang': 'en',
  'data-loading': 'lazy',
}))

function loadGiscus() {
  if (!container.value)
    return

  container.value.replaceChildren()

  const script = document.createElement('script')
  script.src = `${giscusOrigin}/client.js`
  script.async = true
  script.crossOrigin = 'anonymous'

  Object.entries(giscusAttributes.value).forEach(([name, value]) => {
    script.setAttribute(name, value)
  })

  container.value.appendChild(script)
}

function syncGiscusTheme() {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  iframe?.contentWindow?.postMessage({
    giscus: {
      setConfig: {
        theme: giscusTheme.value,
      },
    },
  }, giscusOrigin)
}

onMounted(loadGiscus)

watch(() => route.path, async () => {
  await nextTick()
  loadGiscus()
})

watch(giscusTheme, async () => {
  await nextTick()
  syncGiscusTheme()
})
</script>

<template>
  <section aria-labelledby="comments-title">
    <h2 id="comments-title" class="mb-4 text-lg font-normal">
      Comments
    </h2>
    <div ref="container" class="not-prose min-h-32" />
  </section>
</template>
