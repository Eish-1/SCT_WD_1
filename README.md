# Responsive Design App

A modern, responsive single-page application built with React, TypeScript, and Tailwind CSS. Features smooth scrolling, animated navigation, and interactive UI elements with a beautiful gradient background.

## 🌟 Features

- **Responsive Navigation**: Dynamic navbar that transitions from transparent to solid on scroll
- **Smooth Animations**: Scroll-triggered fade-in animations for all sections
- **Interactive Elements**: Hover effects and smooth transitions throughout
- **Mobile Responsive**: Hamburger menu for seamless mobile navigation
- **Modern Design**: Beautiful gradient backgrounds and typography using Google Fonts

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Main navigation component with scroll detection
│   └── ui/                     # Reusable UI components (shadcn/ui)
│       ├── button.tsx
│       ├── toast.tsx
│       └── ...
├── hooks/
│   └── useScrollAnimation.tsx  # Custom hook for scroll-triggered animations
├── pages/
│   ├── Index.tsx              # Main landing page
│   └── NotFound.tsx           # 404 page
├── lib/
│   └── utils.ts               # Utility functions
├── assets/                    # Static assets (images, etc.)
├── index.css                  # Global styles and CSS custom properties
└── main.tsx                   # Application entry point
```

## 🎨 Design System

The project uses a semantic design system defined in:

### `index.css`

- **CSS Custom Properties**: All colors, gradients, and design tokens
- **Navigation Colors**: Dynamic navbar theming
- **Typography**: Google Fonts integration (Kaushan Script)

### `tailwind.config.ts`

- **Theme Extensions**: Custom color palette using HSL values
- **Font Family**: Custom font configurations
- **Responsive Breakpoints**: Mobile-first design approach

## 🧩 Key Components

### Navigation Component (`src/components/Navigation.tsx`)

- **Scroll Detection**: Uses `useState` and `useEffect` to track scroll position
- **Mobile Menu**: Toggle functionality for responsive design
- **Dynamic Styling**: Transitions between transparent and solid backgrounds
- **Smooth Hover Effects**: Underline animations and color transitions

```tsx
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  // Event listener setup...
}, []);
```

### Scroll Animation Hook (`src/hooks/useScrollAnimation.tsx`)

- **Intersection Observer API**: Detects when elements enter viewport
- **Reusable Logic**: Custom hook for fade-in animations
- **Performance Optimized**: Automatic cleanup and threshold configuration

```tsx
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Implementation...
  return [ref, isVisible] as const;
};
```

### Main Page (`src/pages/Index.tsx`)

- **Section Management**: Hero, About, Contact, and Footer sections
- **Smooth Scrolling**: Programmatic navigation between sections
- **Animation Orchestration**: Coordinates multiple scroll animations

## 🎯 Interactive Features

### Navigation Bar

- **Transparent to Solid**: Background changes on scroll
- **Hover Effects**: Black background overlay on hover
- **Wind Icon**: Links to GitHub profile
- **Mobile Menu**: Slide-down animation with backdrop

### Content Sections

- **Hero Section**: Large typography with smooth scroll button
- **About Section**: Card-based layout with hover transformations
- **Contact Section**: Interactive contact cards with color transitions
- **Footer**: Minimal design with scroll prompt

### Hover Interactions

- **About Cards**: Transform to white background with black text
- **Contact Cards**: Background turns black on hover
- **Navigation Links**: Underline animation effects
- **Buttons**: Color transition effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <YOUR_GIT_URL>
cd responsive-design-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 🎨 Customization Guide

### Colors

Modify the color scheme in `src/index.css`:

```css
:root {
  --primary: 240 10% 3.9%;
  --nav-text: 0 0% 100%;
  --nav-text-hover: 180 100% 50%;
  /* Add more custom properties */
}
```

### Typography

Update font families in `tailwind.config.ts`:

```ts
fontFamily: {
  kaushan: ['Kaushan Script', 'cursive'],
  // Add more fonts
}
```

### Animations

Extend animations in the Tailwind config or create custom CSS:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Flexible Layouts**: Grid and flexbox for adaptive content
- **Touch Friendly**: Appropriate tap targets and spacing

## 🔧 Development Tools

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting rules
- **Prettier**: Code formatting (if configured)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Core Dependencies

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.26.2

### UI & Styling

- `tailwindcss`: Latest
- `@radix-ui/react-*`: Various UI primitives
- `lucide-react`: ^0.462.0
- `class-variance-authority`: ^0.7.1

### Development

- `typescript`: Latest
- `vite`: Latest
- `@vitejs/plugin-react`: Latest

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Google Fonts](https://fonts.google.com/) for typography
