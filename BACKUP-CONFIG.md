# CocoBlim - Backup Configuration

## 🔧 Critical Files to Backup

### 1. package.json (Dependencies)
```json
{
  "name": "coconut-company-profile",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.33",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.19",
    "eslint": "^8",
    "eslint-config-next": "14.2.33",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5"
  }
}
```

### 2. tailwind.config.cjs
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
```

### 3. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

### 4. postcss.config.cjs
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. tsconfig.json
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 📁 File Structure Backup

### Critical Directories:
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── contexts/
│   └── LanguageContext.tsx
└── hooks/
    └── useScrollAnimation.tsx

public/
└── images/
    ├── CocoBlim Logo 1.png
    └── hero gambar.jpg
```

## 🎨 Key Styling Classes

### Colors Used:
- `text-blue-600` - Primary blue for headings
- `bg-blue-600` - Primary blue for buttons
- `text-gray-900` - Main text color
- `text-gray-700` - Secondary text
- `text-white` - White text on dark backgrounds
- `bg-white` - White backgrounds
- `bg-gray-50` - Light gray sections

### Typography:
- `text-4xl md:text-6xl` - Hero headings
- `text-2xl md:text-3xl` - Section headings
- `text-xl md:text-2xl` - Subheadings
- `text-base` - Body text
- `text-sm` - Small text
- `text-xs` - Extra small text

### Animations:
- `transition-all duration-1000` - Smooth transitions
- `hover:scale-105` - Button hover effects
- `opacity-0 translate-y-10` - Initial state for scroll animations
- `opacity-100 translate-y-0` - Final state for scroll animations

## 🌐 Language Configuration

### Supported Languages:
```typescript
type Language = 'en' | 'id';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
];
```

### Key Translation Keys:
- `heroTitle` - Main hero heading
- `heroSubtitle` - Hero subtitle
- `supplierText` - Supplier description
- `benefit1Title`, `benefit2Title`, `benefit3Title` - Benefit headings
- `benefit1Text`, `benefit2Text`, `benefit3Text` - Benefit descriptions
- `getSample` - CTA button text

## 🚀 Deployment Settings

### Netlify Configuration:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables (if needed):
```
NEXT_PUBLIC_SITE_URL=https://cocoblim.netlify.app
```

## 🔄 Quick Recovery Commands

### If npm install fails:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### If build fails:
```bash
npm run lint
npm run build
```

### If images not loading:
- Check file names in public/images/
- Verify URL encoding for spaces
- Check file permissions

## 📋 Migration Checklist

When copying to new account:

1. **Copy Files:**
   - [ ] Copy entire project folder
   - [ ] Verify all files copied correctly
   - [ ] Check public/images/ folder

2. **Install Dependencies:**
   - [ ] Run `npm install`
   - [ ] Check for any error messages
   - [ ] Verify Node.js version (18+)

3. **Test Locally:**
   - [ ] Run `npm run dev`
   - [ ] Check localhost:3000
   - [ ] Test language switching
   - [ ] Test scroll animations

4. **Build Test:**
   - [ ] Run `npm run build`
   - [ ] Check for build errors
   - [ ] Run `npm run start`

5. **Deploy:**
   - [ ] Connect to hosting service
   - [ ] Configure build settings
   - [ ] Test live website

---
**Backup created for CocoBlim project migration**
