<script setup lang="ts">
type Language = 'en' | 'zh'

const language = ref<Language>('en')

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

      <section v-show="language === 'en'" class="about-copy" lang="en">
        <p>
          I am <strong>Hao Lou</strong>, also known online as <strong>phyll1s0</strong>. I study Computer Science at Shanghai Jiao Tong University, but that sentence is only the formal entrance to a messier and more interesting room. Most days, I am somewhere between systems, AI, web experiments, games, and the strange little tools that begin as a passing thought and quietly become something I care about.
        </p>

        <p>
          I like making vague ideas survive contact with reality. A project might start as a line in a note, a late-night question, or a small irritation with how existing tools behave. Then comes the part I enjoy most: giving it a shape, watching it break, arguing with the details, and slowly turning it into something that can be used, played with, or at least honestly learned from. Code, for me, is not only a way to solve problems. It is also a way to think in public, to leave traces of curiosity, and to find out what an idea really means after the pretty version in my head has met the compiler.
        </p>

        <p>
          My technical interests tend to orbit <strong>AI</strong> and <strong>systems</strong>. I am fascinated by models and agents because they change the texture of everyday work, but I am just as drawn to the lower layers: compilers, operating systems, networks, performance, and all the machinery that makes software feel solid. I also care about the surface where people actually meet the machine. A good interface has rhythm. A good website has a voice. A good tool should feel like it respects the person using it.
        </p>

        <p>
          Outside the terminal, I am not especially eager to become a single-purpose human. I ski when I can, play tennis and billiards, wander through games like <em>Zenless Zone Zero</em>, <em>Hollow Knight</em>, and CS2, and read whatever catches me, from web novels to philosophy. I like films, music, travel, and long questions that do not become less important just because they refuse to become tidy. Creation, existence, relationships, memory, selfhood: these are not side quests to me. They are part of the same map.
        </p>

        <p>
          This site is my small corner of that map. It holds notes, projects, experiments, and the occasional attempt to write down what I am becoming before the next version of me changes the wording. I believe people are shaped by what they repeatedly do, but also by what they repeatedly return to. For now, I keep returning to building things, asking better questions, and trying to live with enough attention that the work does not flatten the life around it.
        </p>
      </section>

      <section v-show="language === 'zh'" class="about-copy" lang="zh-CN">
        <p>
          我是 <strong>Hao Lou</strong>，在互联网上也叫 <strong>phyll1s0</strong>。我在上海交通大学读计算机科学，但这句话更像一扇正式的门，门后面其实要杂乱、有趣得多。大多数时候，我在系统、AI、网页实验、游戏，以及一些从一个念头慢慢长成形状的小工具之间游荡。
        </p>

        <p>
          我喜欢让模糊的想法经受现实的碰撞。一个项目可能开始于笔记里的一行字、深夜突然冒出来的问题，或者对某个现有工具的一点不满。真正让我着迷的是后面的过程：给它形状，看它摔坏，和细节争执，再一点点把它变成可以使用、可以玩、或者至少可以诚实地从中学到东西的样子。对我来说，代码不只是解决问题的方式，也是一种公开思考的方式，一种留下好奇心痕迹的方式。
        </p>

        <p>
          我的技术兴趣常常围绕着 <strong>AI</strong> 和 <strong>systems</strong> 打转。我对模型和 agents 感兴趣，因为它们正在改变日常工作的质感；同时我也很喜欢更底层的东西：编译器、操作系统、网络、性能，以及所有让软件变得可靠的机械结构。我也在意人真正碰到机器的那一层表面。好的界面有节奏，好的网站有声音，好的工具应该让使用它的人觉得自己被认真对待。
        </p>

        <p>
          终端之外，我并不想把自己训练成一个单一用途的人。有机会的时候我会去滑雪，也打网球和台球；我会在 <em>绝区零</em>、<em>Hollow Knight</em>、CS2 这样的游戏里闲逛，也会读网文和哲学。电影、音乐、旅行，还有那些无法被整理得很干净的问题，对我来说都很重要。创造、存在、关系、记忆、自我，这些不是生活的支线任务，而是同一张地图上的不同路径。
        </p>

        <p>
          这个网站就是那张地图上的一个小角落。它放着笔记、项目、实验，以及我偶尔试图在下一个版本的自己改掉措辞之前，先把当下正在成为的东西写下来。我相信人会被自己反复做的事情塑造，也会被自己反复回到的东西塑造。现在，我还在反复回到建造、提问，以及尽量认真地生活这几件事上。
        </p>
      </section>
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

    <p class="about-updated">
      Last updated: May 2026
    </p>

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

.about-copy p:first-child {
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

.about-updated {
  margin-top: 1.75rem;
  color: var(--fg);
  font-style: italic;
  opacity: 0.5;
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
