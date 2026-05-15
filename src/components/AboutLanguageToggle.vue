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

const friendLinks = [
  { label: 'norb.space', url: 'https://norb.space' },
  { label: 'theunknown.ing', url: 'https://theunknown.ing' },
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

      <p>
        You can find my code and projects on <a href="https://github.com/Phyll1s0" target="_blank" rel="noopener">GitHub</a>, lighter updates on <a href="https://x.com/louhao088" target="_blank" rel="noopener">X/Twitter</a>, or reach me by <a href="mailto:louhao088@gmail.com">email</a>.
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

      <p>
        你可以在 <a href="https://github.com/Phyll1s0" target="_blank" rel="noopener">GitHub</a> 看我的代码和项目，在 <a href="https://x.com/louhao088" target="_blank" rel="noopener">X/Twitter</a> 看到一些更轻的更新，也可以通过 <a href="mailto:louhao088@gmail.com">email</a> 联系我。
      </p>
    </section>

    <p class="about-updated">
      Last updated: May 2026
    </p>

    <section class="friend-links" aria-label="Friend links">
      <p class="friend-links-title">
        {{ language === 'zh' ? '友链：' : 'Friends:' }}
      </p>
      <a
        v-for="friend in friendLinks"
        :key="friend.url"
        class="friend-link"
        :href="friend.url"
        target="_blank"
        rel="noopener"
      >
        {{ friend.label }}
      </a>
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

.about-copy p:first-child {
  margin-top: 0;
}

.about-updated {
  margin-top: 1.75rem;
  color: var(--fg);
  font-style: italic;
  opacity: 0.5;
}

.friend-links {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(125, 125, 125, 0.22);
}

.friend-links-title {
  margin-top: 0;
  margin-bottom: 0.55rem;
  color: var(--fg-deep);
  font-weight: 600;
}

.friend-link {
  display: block;
  width: fit-content;
  margin-top: 0.35rem;
}

@media (max-width: 640px) {
  .language-switcher {
    margin-bottom: 1.1rem;
  }
}
</style>
