<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import creditEn from '../../pages/about/credit.en.md?raw'
import creditZh from '../../pages/about/credit.zh.md?raw'
import aboutEn from '../../pages/about/en.md?raw'
import funFactEn from '../../pages/about/funfact.en.md?raw'
import funFactZh from '../../pages/about/funfact.zh.md?raw'
import aboutZh from '../../pages/about/zh.md?raw'

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
    label: 'norb',
    url: 'https://norb.space',
    detail: {
      en: 'A friend\'s corner of the web',
      zh: '朋友在网上的一角',
    },
  },
  {
    label: 'theunkownthing',
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

const funFactContent: Record<Language, string> = {
  en: funFactEn,
  zh: funFactZh,
}

const creditContent: Record<Language, string> = {
  en: creditEn,
  zh: creditZh,
}

const profilePhotoAlt = computed(() => language.value === 'zh'
  ? 'Hao Lou 的个人照片'
  : 'Portrait of Hao Lou')
const aboutHtml = computed(() => markdown.render(aboutContent[language.value]))
const funFactHtml = computed(() => markdown.render(funFactContent[language.value]))
const creditHtml = computed(() => markdown.render(creditContent[language.value]))
const aboutLang = computed(() => language.value === 'zh' ? 'zh-CN' : 'en')

function setLanguage(value: Language) {
  language.value = value
}
</script>

<template>
  <div class="about-language-toggle">
    <div class="about-backdrop" aria-hidden="true">
      <span>ABOUT</span>
    </div>

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
      <a href="#about-bio">Bio</a>
      <a href="#about-fun-fact">Fun Fact</a>
      <a href="#about-online">Find Me Online</a>
      <a href="#about-friends">Friend Links</a>
      <a href="#about-credit">Credit</a>
    </nav>

    <div class="about-lead">
      <figure class="about-portrait">
        <div class="portrait-frame" role="img" :aria-label="profilePhotoAlt" />
        <figcaption>Hao Lou / phyll1s0</figcaption>
      </figure>

      <div class="about-lead-main">
        <section id="about-bio" class="about-section">
          <h2 class="about-section-title">
            Bio
          </h2>

          <div class="about-copy" :lang="aboutLang" v-html="aboutHtml" />
        </section>
      </div>
    </div>

    <section id="about-fun-fact" class="about-section about-note">
      <h2 class="about-section-title">
        Fun Fact
      </h2>

      <details class="fun-fact-disclosure">
        <summary>
          <span>Why phyll1s0?</span>
          <span class="fun-fact-toggle" aria-hidden="true" />
        </summary>

        <div class="about-copy fun-fact-answer" :lang="aboutLang" v-html="funFactHtml" />
      </details>
    </section>

    <section id="about-online" class="about-section">
      <h2 class="about-section-title">
        Find Me Online
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
        Friend Links
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

    <section id="about-credit" class="about-section about-credit">
      <h2 class="about-section-title">
        Credit
      </h2>

      <div class="about-copy" :lang="aboutLang" v-html="creditHtml" />
    </section>
  </div>
</template>

<style scoped>
.about-language-toggle {
  position: relative;
  z-index: 0;
  isolation: isolate;
  padding-top: 0.35rem;
}

.about-backdrop {
  position: absolute;
  z-index: -1;
  top: -3.4rem;
  right: -5.25rem;
  width: min(34rem, 92vw);
  height: 13rem;
  overflow: hidden;
  color: rgba(125, 125, 125, 0.2);
  pointer-events: none;
}

.about-backdrop span {
  position: absolute;
  top: 0;
  right: 0;
  color: transparent;
  font-size: clamp(4.8rem, 15vw, 10rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  opacity: 0.62;
  -webkit-text-stroke: 1px currentColor;
  text-stroke: 1px currentColor;
  user-select: none;
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

.about-lead {
  display: flow-root;
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

.about-copy :deep(a) {
  color: var(--fg-deeper);
}

.about-portrait {
  float: right;
  width: min(23rem, 42%);
  margin: 0.25rem 0 1.25rem 2.25rem;
}

.portrait-frame {
  aspect-ratio: 999 / 829;
  border: 1px solid rgba(125, 125, 125, 0.24);
  border-radius: 8px;
  background-image:
    url('/images/about/profile.jpg'),
    repeating-linear-gradient(
      135deg,
      rgba(125, 125, 125, 0.08) 0,
      rgba(125, 125, 125, 0.08) 1px,
      transparent 1px,
      transparent 10px
    );
  background-position: center;
  background-size: cover, auto;
  box-shadow:
    0 1rem 2.5rem rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
}

.about-portrait figcaption {
  margin-top: 0.55rem;
  color: var(--fg);
  font-size: 0.78rem;
  line-height: 1.35;
  text-align: center;
  opacity: 0.48;
}

.about-note {
  position: relative;
  border-left: 1px solid rgba(125, 125, 125, 0.25);
  padding-left: 1rem;
}

.about-note::before {
  position: absolute;
  top: 0.2rem;
  left: -0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 999px;
  background: var(--fg);
  opacity: 0.28;
  content: '';
}

.fun-fact-disclosure {
  color: inherit;
}

.fun-fact-disclosure summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
  min-width: min(18rem, 100%);
  color: var(--fg-deep);
  font-weight: 600;
  line-height: 1.35;
  list-style: none;
  cursor: pointer;
  user-select: none;
}

.fun-fact-disclosure summary::-webkit-details-marker {
  display: none;
}

.fun-fact-disclosure summary:hover {
  color: var(--fg-deeper);
}

.fun-fact-disclosure summary:focus-visible {
  outline: 2px solid var(--fg-deeper);
  outline-offset: 0.25rem;
}

.fun-fact-toggle {
  display: inline-grid;
  flex: none;
  width: 1.2rem;
  height: 1.2rem;
  place-items: center;
  border: 1px solid rgba(125, 125, 125, 0.28);
  border-radius: 999px;
  color: var(--fg);
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1;
}

.fun-fact-toggle::before {
  content: '+';
}

.fun-fact-disclosure[open] .fun-fact-toggle::before {
  content: '-';
}

.fun-fact-answer {
  margin-top: 0.85rem;
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

.about-credit {
  padding-top: 1.75rem;
  border-top: 1px solid rgba(125, 125, 125, 0.22);
}

@media (max-width: 640px) {
  .about-language-toggle {
    padding-top: 0.1rem;
  }

  .about-backdrop {
    top: -2rem;
    right: -1.25rem;
    width: 88vw;
    height: 8.5rem;
    opacity: 0.72;
  }

  .about-backdrop span {
    font-size: clamp(3.6rem, 22vw, 6.5rem);
  }

  .language-switcher {
    margin-bottom: 1.1rem;
  }

  .about-index {
    gap: 0.6rem;
  }

  .about-lead {
    display: block;
  }

  .about-portrait {
    float: none;
    width: min(18.5rem, 86vw);
    margin: 0 auto 0.25rem;
  }

  .friend-grid {
    grid-template-columns: 1fr;
  }
}
</style>
