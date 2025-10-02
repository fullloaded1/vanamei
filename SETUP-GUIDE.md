# CocoBlim Website - Setup Guide

## 📋 Project Overview
Website company profile untuk CocoBlim - supplier arang Indonesia yang dapat dipercaya.

## 🚀 Quick Setup (Copy ke Akun Baru)

### 1. Prerequisites
```bash
# Install Node.js (versi 18 atau lebih baru)
# Download dari: https://nodejs.org/

# Verify installation
node --version
npm --version
```

### 2. Project Setup
```bash
# Clone atau copy project folder
# Masuk ke directory project
cd coconut-company-profile

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### 3. File Structure Penting
```
coconut-company-profile/
├── public/
│   └── images/
│       ├── CocoBlim Logo 1.png    # Logo utama
│       └── hero gambar.jpg         # Background hero section
├── src/
│   ├── app/
│   │   ├── globals.css            # Styling global
│   │   ├── layout.tsx             # Layout utama
│   │   └── page.tsx               # Homepage
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation bar
│   │   └── Footer.tsx             # Footer
│   ├── contexts/
│   │   └── LanguageContext.tsx    # Multi-language system
│   └── hooks/
│       └── useScrollAnimation.tsx  # Scroll animations
├── package.json                   # Dependencies
├── tailwind.config.cjs           # Tailwind configuration
└── next.config.js                # Next.js configuration
```

## 🔧 Configuration Files

### package.json - Dependencies
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

### tailwind.config.cjs - Styling
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

### next.config.js - Next.js Config
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

## 🎨 Customization Guide

### 1. Branding
- **Logo:** Replace `public/images/CocoBlim Logo 1.png`
- **Hero Image:** Replace `public/images/hero gambar.jpg`
- **Company Name:** Edit di `src/components/Navbar.tsx` line 36
- **Metadata:** Edit di `src/app/layout.tsx` lines 8-9

### 2. Content
- **Hero Text:** Edit di `src/contexts/LanguageContext.tsx` lines 26-28
- **Benefits:** Edit di `src/contexts/LanguageContext.tsx` lines 51-56
- **Products:** Edit di `src/app/page.tsx` starting line 228
- **Contact Info:** Edit di `src/app/page.tsx` starting line 473

### 3. Colors
Primary colors yang digunakan:
- **Blue:** `blue-600` (#2563eb) - untuk buttons dan headings
- **Gray:** `gray-900` (#111827) - untuk text utama
- **White:** `white` (#ffffff) - untuk backgrounds

### 4. Languages
Supported languages di `src/contexts/LanguageContext.tsx`:
- English (en)
- Indonesian (id)

## 🚨 Common Issues & Solutions

### Issue 1: Build Error
```bash
# Error: @tailwind directives
# Solution: Make sure globals.css has correct format
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Issue 2: Images Not Loading
```bash
# Error: Image path dengan spasi
# Solution: Use URL encoding
/images/hero%20gambar.jpg  # ✅ Correct
/images/hero gambar.jpg    # ❌ Wrong
```

### Issue 3: Language Not Switching
```bash
# Error: Translation not found
# Solution: Check LanguageContext.tsx for missing keys
```

### Issue 4: Animation Not Working
```bash
# Error: useScrollAnimation hook
# Solution: Make sure component is client-side
'use client';  // Add this at top of component
```

## 📦 Deployment Options

### Option 1: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 2: Vercel
1. Import project from GitHub
2. Auto-detected Next.js settings
3. Deploy automatically

### Option 3: Manual Build
```bash
npm run build
npm run start
```

## 🔄 Migration Checklist

Ketika copy ke akun baru:

- [ ] Copy seluruh folder project
- [ ] Run `npm install`
- [ ] Check `public/images/` folder
- [ ] Update branding di Navbar.tsx
- [ ] Update metadata di layout.tsx
- [ ] Test `npm run dev`
- [ ] Test `npm run build`
- [ ] Deploy ke hosting

## 📞 Support

Jika ada masalah:
1. Check console untuk error messages
2. Verify semua dependencies ter-install
3. Make sure Node.js version 18+
4. Clear browser cache (Ctrl+F5)
5. Restart development server

## 🎯 Key Features
- ✅ Responsive design (mobile-first)
- ✅ Multi-language support (EN/ID)
- ✅ Scroll animations
- ✅ Professional typography
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Modern UI/UX

---
**Created for CocoBlim - Supplier arang Indonesia yang dapat dipercaya**
