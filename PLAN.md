# Full Stack Developer Portfolio: Technical Blueprint & Plan

**Developer**: Jose Janlofre Dy  
**Headline**: Software Developer | Application Architect | Bug Hunter  
**Framework**: Nuxt 3 (Static Site Generation / GitHub Pages)  
**Design Paradigm**: Clean Modern Engineering (Minimalist, utilitarian, high-contrast, developer-centric)  
**Portfolio URL**: [janlofre.com](https://janlofre.com)  
**Contact**: `dy@janlofre.com` | `09127051862` | Caraga, Philippines

---

## 1. Approved Architectural Decisions

1. **Monetization & Privacy**: Removed Google AdSense and Cookie Popup.
2. **Page Architecture**: **Single-Page Architecture (`/`)** with smooth anchor navigation (`#projects`, `#stack`, `#experience`, `#simulation`, `#contact`) + `/practice/threedy` for fullscreen 3D.
3. **Call To Action**: Emphasize professional engineering opportunities ("Available for Full Stack & Backend Engineering"), with a subtle "Support / Buy me a coffee" option.
4. **Theme & Palette**: Clean modern engineering dark slate (`#030712`, `#0b0f19`, zinc `#1e293b`, cyan/teal accents, monospace typography). Discard old pastel green/teal blocks.
5. **Animations**: Native Tailwind CSS transitions (drop `aos` external library).
6. **Project Visuals**: Real screenshots/previews for AP Training, LowerMyDTI, CHRMS Butuan, The Library, OpenPose animation for ASLT, and live canvas for Three.js.

---

## 2. Content & Information Architecture

```
[ Navigation Bar ]
  - Status indicator (● Full Stack / Backend Developer • Available)
  - Navigation anchors: #projects, #stack, #simulation, #experience, #contact
  - Social icons (GitHub, LinkedIn, Twitter/X) + Resume download action

[ Hero / Terminal Overview ]
  - Name: Jose Janlofre Dy
  - Domain: janlofre.com
  - Headline: Software Developer | Application Architect | Bug Hunter
  - Engineering Elevator Pitch: Specialized in architecting custom enterprise solutions, resilient REST APIs, and interactive WebGL experiences.
  - Telemetry / Stats: (6+ Years Engineering, Enterprise Platforms, Competitive Programming Regional Champion)

[ Technical Arsenal / Stack Matrix ]
  - Backend & Systems: PHP (Laravel, CodeIgniter), Python (Flask), Node.js, Java, C, C#, REST APIs, Livewire, Microservices
  - Databases & Architecture: MySQL, PostgreSQL, SQLite, Database Design, Eloquent ORM, Firebase, Redis
  - Frontend Engineering: Nuxt 3, Vue 3, TypeScript, React.js, Alpine.js, Tailwind CSS, Pinia, PWAs
  - Graphics & Optimization: Three.js, WebGL, Algorithm Optimizations, OpenPose / HMMs

[ Featured Custom Software Case Studies (With Screenshots) ]
  - Project 1: AP Training (Role: Collaborator • Enterprise LMS / B2B Agency / TALL Stack: Laravel, Livewire, Alpine, Tailwind)
  - Project 2: LowerMyDTI (Role: Collaborator • Fintech / Nuxt / PayPal Live / Firebase / Google APIs)
  - Project 3: CHRMS Butuan (Role: Collaborator • Government Enterprise HRIS / RBAC / High Availability)
  - Project 4: The Journal Library (Role: Personal Project • PWA / Offline Storage / Skeuomorphic Engine)
  - Project 5: Interactive 3D Simulation (Role: Personal Project • Playable Three.js WebGL Engine)
  - Project 6: ASLT American Sign Language Translator (Role: Thesis Researcher • AI / CV / OpenPose / HMM)

[ Playable Three.js WebGL Simulation Arena ]
  - Embedded canvas running PointerLockControls
  - Keyboard overlay HUD (WASD movement, Space fly mode, double-click lock)
  - Dynamic aspect-ratio responsive camera

[ Career & Experience Timeline ]
  - City Government of Butuan (Senior Web Developer)
  - Engtech Global Solutions Inc. (Software Dev Manager -> Architect -> Senior -> Junior)
  - myBizNiche (Full-stack Developer: Nuxt JS, Laravel)
  - ACLC College of Butuan (CS Instructor)
  - Academic background: BS Computer Science

[ Engineering Footer & Socials ]
  - Direct contact: dy@janlofre.com | 09127051862
  - Live link: janlofre.com
  - Subtle Coffee/Support button
  - Social Network Grid: GitHub, LinkedIn, Twitter/X, Facebook, Instagram
```

---

## 3. Execution Milestones

- [ ] **Milestone 1**: Consolidate structured portfolio data and project screenshot references in `data/portfolioData.ts`.
- [ ] **Milestone 2**: Clean up `nuxt.config.ts`, `package.json`, and `tailwind.config.js` (remove AdSense/cookie/AOS modules, configure dark engineering theme).
- [ ] **Milestone 3**: Build modern engineering layout components (`CommonHeader.vue`, `CommonFooter.vue`, `ProjectCard.vue`).
- [ ] **Milestone 4**: Rebuild `pages/index.vue` into the unified single-page engineering showcase.
- [ ] **Milestone 5**: Refine and embed the playable Three.js simulator (`TheWindow.vue`) with an engineering HUD.
- [ ] **Milestone 6**: Clean up unused placeholder pages (`about.vue`, `contact.vue`, `donate.vue`, `privacypolicy.vue`, `projects.vue`) and update `pages/practice/threedy.vue`.
- [ ] **Milestone 7**: Build and verify static generation (`npm run generate`) to confirm zero compilation or SSR hydration errors.
