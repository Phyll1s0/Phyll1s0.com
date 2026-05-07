---
title: My AI Toolkit: 2026 Model Selection & Usage Guide
date: 2026-05-07
type: blog
---

# My AI Toolkit: 2026 Model Selection & Usage Guide

> As a CS student, AI tools have become essential assistants for my daily learning, coding, and content creation. This article summarizes my current AI tool stack and thoughts on model selection.

---

## 1. Q&A Models: Daily Learning & Knowledge Acquisition

### Primary Recommendation: Gemini 2.5 Pro

**Why Gemini?**

Gemini 2.5 Pro is my go-to for daily Q&A. Its strengths:

- **Ultra-long context**: Supports 1M+ token context window, can process entire books, codebases, or long papers at once
- **Multimodal understanding**: Not just text, but images, charts, even video content
- **Google ecosystem integration**: Seamless with Google Search, Gmail, Docs

**Use cases:**

- Quick extraction of core ideas from papers
- Organizing course notes, generating mind maps
- Cross-disciplinary queries (e.g., "Explain Transformer in simple terms")

**Benchmark Performance:**

| Benchmark         | Gemini 2.5 Pro | GPT-4o | Claude 3.5 Sonnet |
| :---------------- | :------------- | :----- | :---------------- |
| MMLU (Knowledge)  | 89.7%          | 88.7%  | 88.5%             |
| MMMU (Multimodal) | 75.0%          | 69.1%  | 68.3%             |
| HumanEval (Code)  | 85.7%          | 90.2%  | 92.0%             |

> Data sources: Official technical reports from vendors and LMSYS Arena public data

---

## 2. Code Agents: Programming Assistant Selection

### Tier 1: Claude Code + GPT-5.5

**Claude Code**

Claude Code is currently one of the strongest coding agents, especially for:

- **Deep code understanding**: Handles complex codebases, understands project architecture
- **Refactoring capability**: Considers contextual dependencies when refactoring
- **Debug accuracy**: High precision in bug localization

**⚠️ Warning: Account Ban Risk**

Claude has strict account风控, especially for:

- Frequent IP switching
- Shared accounts
- High-volume automated requests

**Recommendation**: If stability is priority, consider GPT Plus/Pro with lower ban risk.

**GPT-5.5 (Code Interpreter)**

OpenAI's coding capability remains top-tier:

- **Rich tool calling**: File I/O, data analysis, chart generation
- **High stability**: Reliable API for production use
- **Mature ecosystem**: Deep integration with GitHub Copilot, VS Code

### Budget Limited? Copilot Pro is the Best Value

If your monthly budget is under $20:

- **GitHub Copilot Pro** ($19/month): Best code completion, ideal for daily coding
- **ChatGPT Plus** ($20/month): Strong general capability, decent coding too
- Choose Copilot Pro if you code more frequently

---

## 3. API Selection: Official vs. Domestic Proxies

### Official Channels

**For**: Those seeking stability with overseas payment capability

- **OpenAI API**: Most mature, comprehensive docs, rich ecosystem
- **Google AI Studio**: Generous free tier for Gemini API
- **Anthropic API**: Official Claude, but strict风控

### Domestic Models: Cost-Effective Options

**Kimi 2.6 (Moonshot)**

- **Price advantage**: ¥200 package, splittable among friends, student-friendly
- **Long text strength**: Supports 2M character context
- **Monthly subscription recommended**: Domestic models upgrade fast, buy latest

**DeepSeek V4 Pro**

- **Current性价比之王**: 2.5折 pricing (until end of May)
- **Surprising performance**: Near top-tier on multiple benchmarks
- **Great for experimenting**: Low cost to try premium models

**Benchmark Comparison (Domestic Models):**

| Model           | MMLU  | C-Eval (Chinese) | Price (per 1M tokens) |
| :-------------- | :---- | :--------------- | :-------------------- |
| DeepSeek V4 Pro | 87.2% | 91.5%            | ¥0.5 (2.5折)          |
| Kimi 2.6        | 85.8% | 89.2%            | ¥1.2                  |
| GPT-4o          | 88.7% | 86.1%            | $5.0                  |

> Prices as of May 2026, subject to official updates

---

## 4. My Personal Tool Stack

**Daily Q&A**: Gemini 2.5 Pro (free tier sufficient)
**Development**: Claude Code + Copilot Pro (double insurance)
**Paper Reading**: Gemini + Kimi (complementary long-text capabilities)
**API Calls**: DeepSeek V4 Pro (best性价比)

---

## 5. Selection Advice Summary

| Need               | Recommendation        | Budget                  |
| :----------------- | :-------------------- | :---------------------- |
| Daily Q&A          | Gemini 2.5 Pro        | Free                    |
| Stable Coding      | GPT-5.5 / Copilot Pro | $20/month               |
| Deep Code          | Claude Code           | $20/month (ban risk)    |
| Long Text          | Kimi 2.6              | ¥200/month (splittable) |
| Cost-effective API | DeepSeek V4 Pro       | ¥0.5/1M tokens          |

---

## Final Thoughts

AI tools evolve rapidly. My advice:

1. **Don't lock into one model**: Different tasks, different tools
2. **Watch性价比**: Students prioritize free/low-cost options
3. **Monthly subscriptions**: Models upgrade fast, stay flexible
4. **Experiment**: Try new models when they launch before committing

> _"Tools are means, solving problems is the goal. Pick what fits you best, not what's most expensive."_

---

_Author: Phyllis (音音)_
_Updated: 2026-05-07_
