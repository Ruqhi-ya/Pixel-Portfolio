# 🎮 Ruqhiya — Pixel Art Interactive Portfolio

A premium pixel-art interactive portfolio inspired by retro 16-bit RPG games. Visitors explore a pixel world instead of reading a traditional website.

## ✨ Features

- **Pixel-art world** — Every element is crafted in pixel art style
- **Animated character** — Pixel avatar with blinking, breathing, and typing animations
- **Cat companion** — Animated pixel cat that sits, walks, and sleeps
- **Parallax background** — Multi-layer scrolling with stars, moon, mountains, and trees
- **Fireflies & shooting stars** — Dynamic ambient particles
- **Day/Night toggle** — Switch between light and dark sky
- **RPG-style navigation** — Pixel nav bar with walking cat indicator
- **Skills inventory** — Collectible items with level indicators and glow effects
- **Quest timeline** — Experience displayed as RPG quests with XP bars
- **Project buildings** — Click to open and explore project details
- **Village mailbox** — Interactive contact section with cat message delivery
- **Custom cursor** — Pixel cursor with sparkle trail
- **Loading screen** — Game-style boot sequence with progress bar
- **Responsive** — Desktop, tablet, and mobile support
- **Accessible** — ARIA labels, semantic HTML, keyboard navigation

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide Icons** — Lightweight icon set
- **Google Fonts** — Press Start 2P & VT323 pixel fonts

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── DayNightToggle.tsx
│   └── ParallaxBackground.tsx
├── sections/         # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ToolsSection.tsx
│   └── ContactSection.tsx
├── game/             # Game-like interactive elements
│   ├── ShootingStars.tsx
│   ├── Fireflies.tsx
│   └── CursorTrail.tsx
├── sprites/          # Pixel art character components
│   ├── PixelCharacter.tsx
│   └── PixelCat.tsx
├── styles/
│   └── index.css     # Global styles & animations
├── App.tsx
└── main.tsx
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

| Color       | Hex       | Usage          |
|-------------|-----------|----------------|
| Night Sky   | `#1A1A40` | Background     |
| Deep Sky    | `#16213E` | Alt background |
| Grass       | `#3CB043` | Nature         |
| Dark Grass  | `#2F8F46` | Shadows        |
| Pink        | `#FF7EB6` | Accents        |
| Purple      | `#8A63D2` | Primary        |
| Golden      | `#F5D76E` | Highlights     |
| Cloud       | `#F5F5F5` | Light elements |
| Text        | `#FFFFFF` | Body text      |

## 📝 Customization

- Edit personal info in each section component
- Swap skill items and levels in `SkillsSection.tsx`
- Add projects in `ProjectsSection.tsx`
- Update contact links in `ContactSection.tsx`
- Modify the pixel character in `sprites/PixelCharacter.tsx`

---

Built with pixels, love, and lots of coffee ☕
