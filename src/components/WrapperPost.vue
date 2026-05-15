<script setup lang='ts'>
import { formatDate } from '~/logics'

const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()

const base = 'https://phyll1s0.com'
const pageUrl = computed(() => `${base}${route.path}`)
const shareText = computed(() => `Reading ${pageUrl.value}\n\nI think...`)
const shareTitle = computed(() => frontmatter.display ?? frontmatter.title ?? 'Phyll1s0.com')
const shareSummary = computed(() => frontmatter.description ?? '')
const tweetUrl = computed(() => `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText.value)}`)
const elkUrl = computed(() => `https://elk.zone/intent/post?text=${encodeURIComponent(shareText.value)}`)
const blueskyUrl = computed(() => `https://bsky.app/intent/compose?text=${encodeURIComponent(shareText.value)}`)
const qqUrl = computed(() => `https://connect.qq.com/widget/shareqq/index.html?${new URLSearchParams({
  summary: shareSummary.value,
  title: shareTitle.value,
  url: pageUrl.value,
})}`)
const wechatUrl = computed(() => `https://api.qrserver.com/v1/create-qr-code/?${new URLSearchParams({
  data: pageUrl.value,
  margin: '16',
  size: '240x240',
})}`)

onMounted(() => {
  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash))
      if (el) {
        const rect = el.getBoundingClientRect()
        const y = window.scrollY + rect.top - 40
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        })
        return true
      }
    }
  }

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  const setupTableOfContents = () => {
    const tocs = content.value?.querySelectorAll<HTMLElement>('.table-of-contents') ?? []

    tocs.forEach((toc, index) => {
      const trigger = toc.querySelector<HTMLElement>('.table-of-contents-anchor')
      const list = toc.querySelector<HTMLElement>('ul')
      if (!trigger)
        return

      const listId = list?.id || `post-toc-${index}`
      if (list)
        list.id = listId

      const setOpen = (open: boolean) => {
        toc.classList.toggle('toc-open', open)
        trigger.setAttribute('aria-expanded', String(open))
      }

      trigger.setAttribute('role', 'button')
      trigger.setAttribute('tabindex', '0')
      trigger.setAttribute('aria-label', 'Toggle table of contents')
      trigger.setAttribute('aria-expanded', 'false')
      if (list)
        trigger.setAttribute('aria-controls', listId)

      useEventListener(trigger, 'click', (event) => {
        event.preventDefault()
        setOpen(!toc.classList.contains('toc-open'))
      })

      useEventListener(trigger, 'keydown', (event: KeyboardEvent) => {
        if (event.key !== 'Enter' && event.key !== ' ')
          return

        event.preventDefault()
        setOpen(!toc.classList.contains('toc-open'))
      })

      useEventListener(toc, 'click', (event) => {
        const target = event.target
        if (target instanceof HTMLElement && target.closest('a'))
          setOpen(false)
      })

      useEventListener(document, 'click', (event) => {
        const target = event.target
        if (target instanceof Node && !toc.contains(target))
          setOpen(false)
      })
    })
  }

  setupTableOfContents()
  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  setTimeout(() => {
    if (!navigate())
      setTimeout(navigate, 1000)
  }, 1)
})

const ArtComponent = computed(() => {
  let art = frontmatter.art
  if (art === 'random')
    art = Math.random() > 0.5 ? 'plum' : 'dots'
  if (typeof window !== 'undefined') {
    if (art === 'plum')
      return defineAsyncComponent(() => import('./ArtPlum.vue'))
    else if (art === 'dots')
      return defineAsyncComponent(() => import('./ArtDots.vue'))
  }
  return undefined
})
</script>

<template>
  <ClientOnly v-if="ArtComponent">
    <component :is="ArtComponent" />
  </ClientOnly>
  <div
    v-if="frontmatter.display ?? frontmatter.title"
    class="prose m-auto mb-8"
    :lang="frontmatter.lang"
    :class="[frontmatter.wrapperClass]"
  >
    <h1 class="mb-0 slide-enter-50">
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="opacity-50 !-mt-6 slide-enter-50"
    >
      {{ formatDate(frontmatter.date, false) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
    </p>
    <p v-if="frontmatter.place" class="mt--4!">
      <span op50>at </span>
      <a v-if="frontmatter.placeLink" :href="frontmatter.placeLink" target="_blank">
        {{ frontmatter.place }}
      </a>
      <span v-else font-bold>
        {{ frontmatter.place }}
      </span>
    </p>
    <p
      v-if="frontmatter.subtitle"
      class="opacity-50 !-mt-6 italic slide-enter"
    >
      {{ frontmatter.subtitle }}
    </p>
    <p
      v-if="frontmatter.draft"
      class="slide-enter" bg-orange-4:10 text-orange-4 border="l-3 orange-4" px4 py2
    >
      This is a draft post, the content may be incomplete. Please check back later.
    </p>
  </div>
  <article
    ref="content"
    :lang="frontmatter.lang"
    :class="[frontmatter.tocAlwaysOn ? 'toc-always-on' : '', frontmatter.class]"
  >
    <slot />
  </article>
  <GiscusComments
    v-if="frontmatter.duration && !frontmatter.draft"
    class="prose m-auto mt-10 mb-8 slide-enter animate-delay-500 print:hidden"
  />
  <div v-if="route.path !== '/'" class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
    <template v-if="frontmatter.duration">
      <span font-mono op50>> </span>
      <span op50>share on </span>
      <a :href="blueskyUrl" target="_blank" op50>bluesky</a>
      <span op25> / </span>
      <a :href="elkUrl" target="_blank" op50>mastodon</a>
      <span op25> / </span>
      <a :href="tweetUrl" target="_blank" op50>twitter</a>
      <span op25> / </span>
      <a :href="wechatUrl" target="_blank" title="Scan with WeChat" op50>wechat</a>
      <span op25> / </span>
      <a :href="qqUrl" target="_blank" op50>qq</a>
    </template>
    <br>
    <span font-mono op50>> </span>
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="font-mono op50 hover:op75"
      v-text="'cd ..'"
    />
  </div>
</template>
