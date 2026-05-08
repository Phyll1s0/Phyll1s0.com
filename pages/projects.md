---
title: Projects
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Featured:
    - name: 'Ski Knight'
      link: 'https://github.com/Phyll1s0/ski-knight'
      desc: 'A skiing adventure game built with passion. Navigate snowy slopes, dodge obstacles, and chase high scores in this winter-themed arcade experience.'
      icon: 'i-carbon-snow-scooter'
    - name: 'Rust Compiler'
      link: 'https://github.com/Phyll1s0/rustcompiler'
      desc: 'A custom compiler implementation for a Rust-like language. Explores parsing, AST generation, semantic analysis, and code generation from scratch.'
      icon: 'i-carbon-code'
    - name: 'Ticket System'
      link: 'https://github.com/Phyll1s0/ticket-system'
      desc: 'A full-featured ticketing platform for event management. Handles reservations, seat allocation, and user management with a clean web interface.'
      icon: 'i-carbon-ticket'
  Web & Tools:
    - name: 'Phyllis0.com'
      link: 'https://github.com/Phyll1s0/Phyll1s0.com'
      desc: 'My personal portfolio website built with Vue, Vite, and UnoCSS. A minimal and elegant showcase of my work.'
      icon: 'i-carbon-website'
    - name: 'Open Source Contributions'
      link: 'https://github.com/Phyll1s0'
      desc: 'Contributions to various open-source projects in the Vue ecosystem and developer tooling.'
      icon: 'i-carbon-open-source'
---

<!-- @layout-full-width -->
<ListProjects :projects="frontmatter.projects" />
