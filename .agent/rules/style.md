---
trigger: always_on
---

# 🐼 LingoDrip Web Design System & Guidelines
**Role:** Senior Frontend Engineer (Astro + Tailwind Specialist)
**Objective:** Create high-energy, "dopamine-inducing" landing pages that convert scrollers into users.

---

## 1. 🎨 Visual Design Philosophy ("Web Fun Edition")
The site must feel **alive, playful, and fast**. Avoid corporate SaaS templates or "Bootstrap" looks.

### Core Principles
- **Round Everything:** Default `rounded-2xl` or `rounded-full`. No sharp corners.
- **Dopamine Colors:** Use high-contrast, happy colors defined in `tailwind.config.mjs`.
- **Tactile Feedback:** Buttons must react on hover/click (`hover:scale-105`, `active:scale-95`).
- **Whitespace:** Generous padding (`p-8` / `gap-6` minimum). Let the content breathe.

### 🌈 Color Palette (Tailwind Config)
**NEVER** use arbitrary hex codes. Use semantic Tailwind classes.

| Semantic Name | Usage | Tailwind Class |
| :--- | :--- | :--- |
| **Primary Brand** | Main CTAs, highlights | `bg-brand-green` / `text-brand-green` (Bamboo) |
| **Panda Black** | Main text, borders | `bg-panda-black` / `text-panda-black` (Deep Green/Black) |
| **Accent Orange** | Alerts, 'Hard' badges | `bg-accent-orange` |
| **Background** | Page background | `bg-mint-white` |
| **Surface** | Card backgrounds | `bg-white` (always with `shadow-card`) |

### 🔤 Typography
**NEVER** use system fonts (Arial/Helvetica).
- **Headers / Fun Text:** `font-fredoka` (Rounded, friendly, bold).
- **Body / Content:** `font-nunito` (Readable, rounded sans-serif).

---

## 2. 🏗 Component Architecture (Astro Islands)

### The "Islands" Rule
- **Static First:** Write standard HTML/CSS in `.astro` files by default.
- **Interactive Only:** Use React components **only** for complex interactivity (Forms, Toggles, Carousels).
    - Use `client:visible` for elements below the fold.
    - Use `client:load` for critical hero interactions.

### Common Components
- **Buttons (`<PandaButton />`):**
    - *Style:* `rounded-full`, `font-fredoka`, `border-2 border-panda-black`.
    - *Effect:* Neo-brutalist shadow (`shadow-[4px_4px_0px_#000]`) that collapses on click.
- **Cards:**
    - `div` with `bg-white`, `rounded-3xl`, `border-2 border-panda-black`.
- **Layouts:**
    - Use CSS Grid (`grid-cols-1 md:grid-cols-3`) for feature lists.

---

## 3. 🛠 Tech Stack & Best Practices
- **Framework:** `Astro` (Static Site Generation).
- **Styling:** `Tailwind CSS`.
- **Interactivity:** `React` (for specific islands).
- **State (if needed):** `Nano Stores` (lightweight state sharing between islands).
- **Backend:** `Supabase` (JS SDK) for capturing emails.

---

## 4. 📝 Code Style Examples

### ✅ Good Component Structure (`FunCard.astro`)
```astro
---
// Server-side logic (Frontmatter)
const { title, emoji } = Astro.props;
---
<div class="bg-white rounded-3xl border-2 border-panda-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform p-6">
  <div class="flex items-center gap-4 mb-4">
    <span class="text-4xl">{emoji}</span>
    <h3 class="font-fredoka text-2xl text-panda-black">{title}</h3>
  </div>
  <p class="font-nunito text-gray-700 leading-relaxed">
    <slot /> </p>
</div>
Adapting Flutter to Web

I've been working on translating the Flutter design principles for the LingoDrip landing page into a web-friendly format using Astro. The core "Dopamine Design" philosophy is still central, but I'm adapting the technical implementation to suit web standards. It's an interesting challenge to maintain the original aesthetic while optimizing for a web environment.

Developing Design Principles

I've been refining the "Web Fun Edition" design principles for the LingoDrip project. Key updates include more detail on color usage (no arbitrary hexes!) and tactile feedback implementation. I'm also specifying more generous whitespace guidelines, as well as a focus on rounded elements for a friendlier feel. I'm keen on establishing these design rules with clear guidelines for the whole team.

Refining Color and Typography

I've been drilling down on specific color guidelines. We're using Panda Black for main text on dark backgrounds, and Accent Orange for alerts. I'm also standardizing on Mint White for backgrounds and white with a shadow for surface elements. Typefaces are also becoming more defined: Fredoka for headers and Nunito for body text. I'm documenting these for team consistency.

Establishing Core Elements

I'm working on the fundamental elements for the LingoDrip website, including cards, buttons, and grids. I'm using Tailwind CSS to implement these, focusing on responsive design with CSS Grid. I'm also specifying animation with transition-transform and the active:scale-95 classes, as well as distinct shadows. Components should include bg-white, rounded-3xl, and a black border for a consistent feel.

Analyzing UI Component Shifts

I'm currently working to translate Flutter's design concepts into Astro and Tailwind CSS. The new challenge is adapting these Flutter UI elements to an Astro/Tailwind paradigm. Replacing Flutter's object styles with Tailwind classes to maintain the original design is my main concern. Considering the differences between UI architectures, I'm working to integrate interactive elements and data into the existing UI components.

Here is the rewritten .cursorrules file adapted for Astro + Tailwind. I have translated your Flutter specific rules (Widgets, Riverpod) into Web equivalents (Components, Tailwind, Astro Islands) while keeping the exact same "Dopamine/Fun" design language.

.cursorrules (For Astro Project)
Markdown
# 🐼 LingoDrip Web Design System & Guidelines
**Role:** Senior Frontend Engineer (Astro + Tailwind Specialist)
**Objective:** Create high-energy, "dopamine-inducing" landing pages that convert scrollers into users.

---

## 1. 🎨 Visual Design Philosophy ("Web Fun Edition")
The site must feel **alive, playful, and fast**. Avoid corporate SaaS templates or "Bootstrap" looks.

### Core Principles
- **Round Everything:** Default `rounded-2xl` or `rounded-full`. No sharp corners.
- **Dopamine Colors:** Use high-contrast, happy colors defined in `tailwind.config.mjs`.
- **Tactile Feedback:** Buttons must react on hover/click (`hover:scale-105`, `active:scale-95`).
- **Whitespace:** Generous padding (`p-8` / `gap-6` minimum). Let the content breathe.

### 🌈 Color Palette (Tailwind Config)
**NEVER** use arbitrary hex codes. Use semantic Tailwind classes.

| Semantic Name | Usage | Tailwind Class |
| :--- | :--- | :--- |
| **Primary Brand** | Main CTAs, highlights | `bg-brand-green` / `text-brand-green` (Bamboo) |
| **Panda Black** | Main text, borders | `bg-panda-black` / `text-panda-black` (Deep Green/Black) |
| **Accent Orange** | Alerts, 'Hard' badges | `bg-accent-orange` |
| **Background** | Page background | `bg-mint-white` |
| **Surface** | Card backgrounds | `bg-white` (always with `shadow-card`) |

### 🔤 Typography
**NEVER** use system fonts (Arial/Helvetica).
- **Headers / Fun Text:** `font-fredoka` (Rounded, friendly, bold).
- **Body / Content:** `font-nunito` (Readable, rounded sans-serif).

---

## 2. 🏗 Component Architecture (Astro Islands)

### The "Islands" Rule
- **Static First:** Write standard HTML/CSS in `.astro` files by default.
- **Interactive Only:** Use React components **only** for complex interactivity (Forms, Toggles, Carousels).
    - Use `client:visible` for elements below the fold.
    - Use `client:load` for critical hero interactions.

### Common Components
- **Buttons (`<PandaButton />`):**
    - *Style:* `rounded-full`, `font-fredoka`, `border-2 border-panda-black`.
    - *Effect:* Neo-brutalist shadow (`shadow-[4px_4px_0px_#000]`) that collapses on click.
- **Cards:**
    - `div` with `bg-white`, `rounded-3xl`, `border-2 border-panda-black`.
- **Layouts:**
    - Use CSS Grid (`grid-cols-1 md:grid-cols-3`) for feature lists.

---

## 3. 🛠 Tech Stack & Best Practices
- **Framework:** `Astro` (Static Site Generation).
- **Styling:** `Tailwind CSS`.
- **Interactivity:** `React` (for specific islands).
- **State (if needed):** `Nano Stores` (lightweight state sharing between islands).
- **Backend:** `Supabase` (JS SDK) for capturing emails.

---

## 4. 📝 Code Style Examples

### ✅ Good Component Structure (`FunCard.astro`)
```astro
---
// Server-side logic (Frontmatter)
const { title, emoji } = Astro.props;
---
<div class="bg-white rounded-3xl border-2 border-panda-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform p-6">
  <div class="flex items-center gap-4 mb-4">
    <span class="text-4xl">{emoji}</span>
    <h3 class="font-fredoka text-2xl text-panda-black">{title}</h3>
  </div>
  <p class="font-nunito text-gray-700 leading-relaxed">
    <slot /> </p>
</div>
❌ Bad Practices
❌ <div style="border-radius: 0px"> (Sharp corners).

❌ importing useState in .astro files (Impossible).

❌ Using generic "text-blue-500" instead of brand colors.

❌ "Wall of text" paragraphs without generous leading or p spacing.

5. 🚀 Behavioral Prompts
"Make it pop!" -> Add hover:rotate-1, heavy hard shadows (shadow-black), or bold borders.

"Gamify it!" -> Add progress bars, badges (e.g., "🔥 Hot"), or subtle confetti.

"Student vibe" -> Use 'Fredoka', lowercase headers (optional), and rounded imagery.