# CocoBlim - Essential Commands

## 🚀 Development Commands

### Setup Project (First Time)
```bash
# Navigate to project folder
cd coconut-company-profile

# Install all dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Daily Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Troubleshooting Commands
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install

# Kill all Node.js processes (Windows)
taskkill /f /im node.exe

# Clear Next.js cache
rm -rf .next

# Hard refresh browser
# Ctrl + F5 (Windows)
# Cmd + Shift + R (Mac)
```

## 📦 Package Management

### Install New Package
```bash
# Install production dependency
npm install package-name

# Install development dependency
npm install -D package-name

# Install specific version
npm install package-name@version
```

### Current Dependencies
```bash
# Production dependencies
npm install next@14.2.33
npm install react@^18
npm install react-dom@^18

# Development dependencies
npm install -D @types/node@^20
npm install -D @types/react@^18
npm install -D @types/react-dom@^18
npm install -D autoprefixer@^10.4.19
npm install -D eslint@^8
npm install -D eslint-config-next@14.2.33
npm install -D postcss@^8.4.38
npm install -D tailwindcss@^3.4.4
npm install -D typescript@^5
```

## 🔧 Configuration Commands

### Tailwind CSS
```bash
# Initialize Tailwind (if needed)
npx tailwindcss init -p

# Build Tailwind CSS
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css --watch
```

### TypeScript
```bash
# Type check
npx tsc --noEmit

# Generate types
npx next build
```

## 🌐 Deployment Commands

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Manual Build & Deploy
```bash
# Build the project
npm run build

# Start production server
npm run start

# Or serve static files
npx serve .next
```

## 🔍 Debugging Commands

### Check Versions
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Next.js version
npx next --version

# List all installed packages
npm list
```

### Development Debugging
```bash
# Run with verbose logging
npm run dev -- --verbose

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Build Debugging
```bash
# Build with detailed output
npm run build -- --debug

# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📁 File Operations

### Backup Important Files
```bash
# Copy entire project
cp -r coconut-company-profile coconut-company-profile-backup

# Backup specific files
cp package.json package.json.backup
cp tailwind.config.cjs tailwind.config.cjs.backup
cp next.config.js next.config.js.backup
```

### Reset to Clean State
```bash
# Remove generated files
rm -rf .next
rm -rf node_modules
rm package-lock.json

# Reinstall everything
npm install
```

## 🎨 Content Update Commands

### Update Images
```bash
# Replace logo (keep same filename)
# Replace: public/images/CocoBlim Logo 1.png

# Replace hero image (keep same filename)  
# Replace: public/images/hero gambar.jpg
```

### Update Content
```bash
# Edit company info
# File: src/contexts/LanguageContext.tsx

# Edit homepage content
# File: src/app/page.tsx

# Edit navigation
# File: src/components/Navbar.tsx
```

## 🚨 Emergency Recovery

### If Website Breaks
```bash
# 1. Stop development server
# Ctrl + C

# 2. Clear everything
rm -rf .next
rm -rf node_modules
rm package-lock.json

# 3. Reinstall
npm install

# 4. Restart
npm run dev
```

### If Build Fails
```bash
# Check for syntax errors
npm run lint

# Check TypeScript errors
npx tsc --noEmit

# Try building again
npm run build
```

### If Images Don't Load
```bash
# Check file exists
ls public/images/

# Check filename encoding
# Use: hero%20gambar.jpg instead of hero gambar.jpg

# Restart development server
npm run dev
```

## 📋 Quick Reference

### Port Information
- Development: http://localhost:3000
- Production: Depends on hosting service

### Important Directories
- Source code: `src/`
- Images: `public/images/`
- Styles: `src/app/globals.css`
- Components: `src/components/`

### Key Files to Never Delete
- `package.json` - Dependencies
- `next.config.js` - Next.js config
- `tailwind.config.cjs` - Styling config
- `src/app/layout.tsx` - Main layout
- `src/app/page.tsx` - Homepage

---
**Command reference for CocoBlim project**
