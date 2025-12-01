@echo off
echo ========================================
echo CocoBlim - Upload to GitHub Repository
echo ========================================
echo.

echo [1/6] Initializing Git repository...
git init

echo [2/6] Adding remote repository...
git remote add origin https://github.com/fullloaded1/vanamei.git
git remote set-url origin https://github.com/fullloaded1/vanamei.git

echo [3/6] Adding all files...
git add .

echo [4/6] Committing changes...
git commit -m "CocoBlim website - Indonesian charcoal supplier

- Modern Next.js website with TypeScript
- Multi-language support (English/Indonesian)
- Responsive design with Tailwind CSS
- Scroll animations and smooth UX
- Professional layout inspired by Cocologi
- SEO optimized and fast loading
- Complete documentation included

Features:
- Hero section with background image
- Benefits section with staggered animations
- Language switcher (EN/ID)
- Clean navigation with dropdowns
- Contact section with multiple options
- Mobile-first responsive design

Tech Stack:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Custom React hooks
- Intersection Observer API"

echo [5/6] Pushing to GitHub (this will replace all content)...
echo WARNING: This will replace ALL content in the repository!
pause
git push -f origin main

echo [6/6] Upload completed!
echo.
echo Repository URL: https://github.com/fullloaded1/vanamei
echo.
echo Next steps:
echo 1. Check the repository on GitHub
echo 2. Set up deployment (Netlify/Vercel)
echo 3. Update any remaining configurations
echo.
pause
