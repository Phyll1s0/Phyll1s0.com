<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import aboutEn from '~/content/about/en.md?raw'
import aboutZh from '~/content/about/zh.md?raw'

type Language = 'en' | 'zh'

const language = ref<Language>('en')
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

const languageOptions: Array<{
  label: string
  value: Language
}> = [
  { label: 'EN', value: 'en' },
  { label: '中文', value: 'zh' },
]

const onlineLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/Phyll1s0',
    detail: {
      en: 'Code and projects',
      zh: '代码和项目',
    },
  },
  {
    label: 'X/Twitter',
    url: 'https://x.com/louhao088',
    detail: {
      en: 'Short updates',
      zh: '一些更轻的更新',
    },
  },
  {
    label: 'Email',
    url: 'mailto:louhao088@gmail.com',
    detail: {
      en: 'louhao088@gmail.com',
      zh: 'louhao088@gmail.com',
    },
  },
]

const friendLinks = [
  {
    label: 'norb.space',
    url: 'https://norb.space',
    detail: {
      en: 'A friend\'s corner of the web',
      zh: '朋友在网上的一角',
    },
  },
  {
    label: 'theunknownth.ing',
    url: 'https://theunknownth.ing',
    detail: {
      en: 'The About page that inspired this structure',
      zh: '这次结构参考的 About 页面',
    },
  },
]

const aboutContent: Record<Language, string> = {
  en: aboutEn,
  zh: aboutZh,
}

const aboutHtml = computed(() => markdown.render(aboutContent[language.value]))
const aboutLang = computed(() => language.value === 'zh' ? 'zh-CN' : 'en')

function setLanguage(value: Language) {
  language.value = value
}
</script>

<template>
  <div class="about-language-toggle">
    <div class="language-switcher" aria-label="About language">
      <template v-for="(option, index) in languageOptions" :key="option.value">
        <button
          type="button"
          class="language-button"
          :class="{ active: language === option.value }"
          :aria-pressed="language === option.value"
          @click="setLanguage(option.value)"
        >
          {{ option.label }}
        </button>
        <span v-if="index === 0" class="language-divider" aria-hidden="true">/</span>
      </template>
    </div>

    <nav class="about-index" aria-label="About sections">
      <a href="#about-bio">{{ language === 'zh' ? '简介' : 'Bio' }}</a>
      <a href="#about-online">{{ language === 'zh' ? '在线联系' : 'Find Me Online' }}</a>
      <a href="#about-friends">{{ language === 'zh' ? '友链' : 'Friend Links' }}</a>
    </nav>

    <section id="about-bio" class="about-section">
      <h2 class="about-section-title">
        {{ language === 'zh' ? '简介' : 'Bio' }}
      </h2>

      <div class="about-copy" :lang="aboutLang" v-html="aboutHtml" />
    </section>

    <section id="about-online" class="about-section">
      <h2 class="about-section-title">
        {{ language === 'zh' ? '在线联系' : 'Find Me Online' }}
      </h2>

      <div class="link-list">
        <a
          v-for="link in onlineLinks"
          :key="link.url"
          class="link-row"
          :href="link.url"
          :target="link.url.startsWith('mailto:') ? undefined : '_blank'"
          rel="noopener"
        >
          <span>
            <span class="link-label">{{ link.label }}</span>
            <span class="link-detail">{{ link.detail[language] }}</span>
          </span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section id="about-friends" class="about-section friend-links" aria-label="Friend links">
      <h2 class="about-section-title">
        {{ language === 'zh' ? '友链' : 'Friend Links' }}
      </h2>

      <div class="friend-grid">
        <a
          v-for="friend in friendLinks"
          :key="friend.url"
          class="friend-link"
          :href="friend.url"
          target="_blank"
          rel="noopener"
        >
          <span>
            <span class="link-label">{{ friend.label }}</span>
            <span class="link-detail">{{ friend.detail[language] }}</span>
          </span>
          <span class="link-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-language-toggle {
  position: relative;
}

.language-switcher {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.42rem;
  margin-bottom: 1.35rem;
  width: fit-content;
  margin-left: auto;
  color: var(--fg);
  font-size: 0.82rem;
  line-height: 1;
}

.language-divider {
  opacity: 0.25;
}

.language-button {
  border: 0;
  padding: 0.05rem 0;
  color: inherit;
  font: inherit;
  letter-spacing: 0;
  background: transparent;
  opacity: 0.38;
  cursor: pointer;
  transition:
    color 0.18s ease,
    opacity 0.18s ease;
}

.language-button:hover,
.language-button:focus-visible {
  opacity: 0.72;
}

.language-button:focus-visible {
  outline: 2px solid var(--fg-deeper);
  outline-offset: 0.2rem;
}

.language-button.active {
  color: var(--fg-deeper);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25em;
  opacity: 0.82;
}

.about-index {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
  color: var(--fg);
  font-size: 0.88rem;
  opacity: 0.55;
}

.about-index a {
  color: inherit;
  text-decoration: none;
}

.about-index a:hover {
  color: var(--fg-deeper);
  opacity: 1;
}

.about-section {
  margin-top: 2.25rem;
}

.about-section:first-of-type {
  margin-top: 0;
}

.about-section-title {
  margin-top: 0;
  margin-bottom: 0.9rem;
}

.about-copy :deep(p:first-child) {
  margin-top: 0;
}

.link-list,
.friend-grid {
  display: grid;
  gap: 0.55rem;
  margin-top: 0.75rem;
}

.friend-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.link-row,
.friend-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-width: 0;
  border: 1px solid rgba(125, 125, 125, 0.2);
  border-radius: 8px;
  padding: 0.65rem 0.75rem;
  color: inherit;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease;
}

.link-row:hover,
.friend-link:hover {
  border-color: rgba(125, 125, 125, 0.35);
  color: var(--fg-deeper);
  background: rgba(125, 125, 125, 0.06);
}

.link-row > span:first-child,
.friend-link > span:first-child {
  min-width: 0;
}

.link-label,
.link-detail {
  display: block;
}

.link-label {
  color: var(--fg-deep);
  font-weight: 600;
  line-height: 1.35;
}

.link-detail {
  margin-top: 0.12rem;
  color: var(--fg);
  font-size: 0.84rem;
  line-height: 1.35;
  opacity: 0.52;
}

.link-arrow {
  flex: none;
  color: var(--fg);
  opacity: 0.38;
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.link-row:hover .link-arrow,
.friend-link:hover .link-arrow {
  opacity: 0.8;
  transform: translateX(0.15rem);
}

.friend-links {
  padding-top: 1.75rem;
  border-top: 1px solid rgba(125, 125, 125, 0.22);
}

@media (max-width: 640px) {
  .language-switcher {
    margin-bottom: 1.1rem;
  }

  .about-index {
    gap: 0.6rem;
  }

  .friend-grid {
    grid-template-columns: 1fr;
  }
}
</style>
