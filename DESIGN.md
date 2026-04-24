# Design Brief: Futuristic Drone Services

## Overview
Premium, cinematic drone services website inspired by aerospace and cutting-edge tech. Pure black backgrounds, white text, electric blue accents with glow effects. Sleek, high-contrast, visual-heavy with smooth Framer Motion animations throughout.

## Tone & Differentiation
**Futuristic aerospace-grade premium.** Uncompromising contrast. Electric blue glow on interactive elements. Minimal, sharp geometry. Signature detail: subtle cyan glow border on cards and CTAs. No rounded corners—sharp modernism.

## Color Palette (OKLCH)

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| background | `0.99 0 0` (white) | `0.04 0 0` (pure black) | Page backgrounds |
| foreground | `0.15 0 0` (dark gray) | `0.98 0 0` (white) | Body text |
| card | `1.0 0 0` (white) | `0.10 0 0` (dark gray) | Card surfaces, glass-morphism |
| primary | `0.57 0.23 254` (electric blue) | `0.65 0.23 254` (bright electric blue) | Primary buttons, active states, accents |
| accent | `0.57 0.23 254` (electric blue) | `0.65 0.23 254` (bright electric blue) | Highlights, glow effects, focus states |
| destructive | `0.55 0.22 25` (red) | `0.65 0.19 22` (red) | Errors, danger actions |
| border | `0.9 0 0` (light gray) | `0.18 0 0` (dark gray) | Component borders |
| muted | `0.95 0 0` (light gray) | `0.15 0 0` (dark) | Disabled states, secondary elements |

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Space Grotesk (700) | Headlines, hero text, CTAs |
| Body | General Sans (400–500) | Paragraphs, descriptions, navigation |
| Mono | Geist Mono (400–500) | Code snippets, technical details, stats |

**Hierarchy:** H1 = 3.5rem bold, H2 = 2.25rem bold, H3 = 1.5rem medium, body = 1rem regular.

## Elevation & Depth

| Level | Style | Purpose |
|-------|-------|---------|
| Flat | `border: 1px solid oklch(var(--border))` | Subtle, default |
| Elevated | `box-shadow: 0 4px 16px rgba(0,0,0,0.3)` | Hover states, cards |
| Intense | `box-shadow: 0 8px 32px rgba(0,0,0,0.6)` | Modal overlays, expanded sections |
| Glow | `box-shadow: 0 0 20px oklch(var(--accent) / 0.3)` | Interactive focus, accent elements |

**Signature glow:** Electric blue `0.65 0.23 254` at 30–50% opacity creates subtle halo on hover.

## Structural Zones

| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| Header/Nav | `bg-background` dark | `border-b border-border` | Top navigation, sticky, minimal |
| Hero | `bg-background` with video overlay | None | Full-bleed hero section with drone footage |
| Content sections | Alternating `bg-background` / `bg-card/10` | Optional `border-t` on section breaks | Full-width sections with card grids |
| Cards | `bg-glass` (card 80% opacity + blur) | `border-glow` (electric blue subtle) | Portfolio, services, features |
| Footer | `bg-secondary/5` | `border-t border-border` | Contact, links, bottom alignment |

## Spacing & Rhythm

- **Grid:** 1rem (16px) baseline
- **Padding:** Components: 1.5rem; Sections: 4rem vertical, 2rem horizontal
- **Gap:** Card grids: 1.5rem; List items: 1rem

## Component Patterns

- **Button (Primary):** `bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold hover:shadow-glow-intense transition-smooth`
- **Button (Secondary):** `border border-primary text-primary px-6 py-3 rounded-sm hover:bg-primary/10 transition-smooth`
- **Button (Ghost):** `text-primary underline hover:no-underline transition-smooth`
- **Card:** `bg-glass border-glow px-6 py-8 rounded-sm hover:shadow-glow-intense transition-smooth`
- **Input:** `bg-input border border-border text-foreground px-4 py-2 rounded-sm focus:border-primary focus:ring-2 focus:ring-primary/30`

## Motion

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| fade-in | 500ms | ease-out | Page load, lazy content |
| slide-up | 500ms | ease-out | Card entry, section reveal |
| glow-pulse | 3s | ease-in-out | Subtle accent pulse on CTAs |
| transition-smooth | 300ms | cubic-bezier(0.4, 0, 0.2, 1) | All interactive elements |

**Choreography:** Stagger list items by 50ms offset for polished entrance.

## Constraints

- Max-width container: 1400px
- Mobile-first responsive: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px
- Border-radius: 0.375rem (sharp, minimal)
- No opacity fallbacks—OKLCH with alpha values
- Glow effects: opacity 0.3 default, 0.5 on hover

## Signature Detail

**Cyan glow halo on interactive elements.** Every button, card, and CTA link gains a subtle electric blue glow on hover (`box-shadow: 0 0 20px oklch(var(--accent) / 0.3)`). Combined with 300ms smooth transition, this creates a premium "aerospace scanning" feel—distinctly premium, distinctly drone services.
