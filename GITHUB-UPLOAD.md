# Upload CocoBlim ke GitHub Repository

## 🎯 Target Repository
**URL:** https://github.com/fullloaded1/vanamei

## 📋 Step-by-Step Upload Process

### Step 1: Persiapan Git
```bash
# Masuk ke folder project
cd C:\Users\Dell\CascadeProjects\coconut-company-profile

# Initialize git (jika belum ada)
git init

# Add remote repository (ganti dengan repo yang sudah ada)
git remote add origin https://github.com/fullloaded1/vanamei.git

# Atau jika sudah ada remote, update URL
git remote set-url origin https://github.com/fullloaded1/vanamei.git
```

### Step 2: Backup Repository Lama (Opsional)
```bash
# Clone repository lama untuk backup
git clone https://github.com/fullloaded1/vanamei.git vanamei-backup

# Atau download sebagai ZIP dari GitHub
```

### Step 3: Prepare Files untuk Upload
```bash
# Check status
git status

# Add semua files
git add .

# Commit dengan message yang jelas
git commit -m "Replace with CocoBlim website - Indonesian charcoal supplier"
```

### Step 4: Force Push (Mengganti Semua Konten)
```bash
# Force push untuk mengganti semua konten
git push -f origin main

# Atau jika branch utama adalah master
git push -f origin master
```

## 🔧 Alternative Method: Manual Upload

### Jika Git Command Tidak Bekerja:

1. **Download Repository Lama:**
   - Go to https://github.com/fullloaded1/vanamei
   - Click "Code" → "Download ZIP"
   - Backup jika diperlukan

2. **Delete All Files di GitHub:**
   - Go to repository di browser
   - Delete semua files satu per satu
   - Atau create new branch dan delete main branch

3. **Upload Files Baru:**
   - Click "uploading an existing file"
   - Drag & drop semua files dari project CocoBlim
   - Commit changes

## 📁 Files yang Akan Di-Upload

### Root Files:
```
├── .gitignore
├── README.md (akan dibuat baru)
├── SETUP-GUIDE.md
├── BACKUP-CONFIG.md
├── COMMANDS.md
├── GITHUB-UPLOAD.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
└── netlify.toml
```

### Directories:
```
├── public/
│   └── images/
│       ├── CocoBlim Logo 1.png
│       └── hero gambar.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionTitle.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── posts.ts
│   │   └── products.ts
│   ├── hooks/
│   │   └── useScrollAnimation.tsx
│   └── lib/
│       └── formatDate.ts
```

## 📝 Create New README.md

Saya akan buat README.md baru untuk repository:

```markdown
# CocoBlim - Premium Indonesian Charcoal Supplier

🔥 **Professional website for CocoBlim - Trusted Indonesian charcoal supplier**

## 🌟 Features

- ✅ **Modern Design** - Clean, professional layout
- ✅ **Responsive** - Mobile-first design
- ✅ **Multi-language** - English & Indonesian
- ✅ **Scroll Animations** - Smooth user experience
- ✅ **SEO Optimized** - Fast loading & search friendly
- ✅ **Easy Customization** - Well-documented code

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Animations:** Custom React hooks
- **Deployment:** Netlify/Vercel ready

## 🏃‍♂️ Quick Start

```bash
# Clone repository
git clone https://github.com/fullloaded1/vanamei.git

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📖 Documentation

- **[Setup Guide](SETUP-GUIDE.md)** - Complete setup instructions
- **[Commands](COMMANDS.md)** - All essential commands
- **[Backup Config](BACKUP-CONFIG.md)** - Configuration backup

## 🎨 Customization

### Update Branding
1. Replace logo: `public/images/CocoBlim Logo 1.png`
2. Replace hero image: `public/images/hero gambar.jpg`
3. Update company name in `src/components/Navbar.tsx`
4. Update content in `src/contexts/LanguageContext.tsx`

### Update Colors
Primary colors in Tailwind classes:
- `blue-600` - Primary blue
- `gray-900` - Main text
- `white` - Backgrounds

## 🌐 Deployment

### Netlify
```bash
npm run build
# Deploy .next folder
```

### Vercel
```bash
vercel
# Follow prompts
```

## 📞 Contact

**CocoBlim - Supplier arang Indonesia yang dapat dipercaya**

- 🌐 Website: [Your Domain]
- 📧 Email: info@cocoblim.com
- 📱 WhatsApp: +62 xxx xxxx xxxx

## 📄 License

This project is for CocoBlim company use.

---
**Built with ❤️ for Indonesian charcoal industry**
```

## 🔄 Git Commands Summary

### Complete Upload Process:
```bash
# 1. Navigate to project
cd C:\Users\Dell\CascadeProjects\coconut-company-profile

# 2. Initialize git
git init

# 3. Add remote
git remote add origin https://github.com/fullloaded1/vanamei.git

# 4. Add all files
git add .

# 5. Commit
git commit -m "CocoBlim website - Indonesian charcoal supplier

- Modern Next.js website
- Multi-language support (EN/ID)
- Responsive design
- Scroll animations
- Professional layout
- SEO optimized"

# 6. Force push (replace all content)
git push -f origin main
```

## ⚠️ Important Notes

1. **Backup First:** Download existing repository jika ada konten penting
2. **Force Push:** Akan mengganti SEMUA konten di repository
3. **Branch:** Pastikan push ke branch yang benar (main/master)
4. **Permissions:** Pastikan punya write access ke repository
5. **Large Files:** GitHub limit 100MB per file

## 🚨 Troubleshooting

### Error: Permission Denied
```bash
# Login ke GitHub CLI
gh auth login

# Atau use personal access token
git remote set-url origin https://[token]@github.com/fullloaded1/vanamei.git
```

### Error: File Too Large
```bash
# Check file sizes
find . -size +50M

# Use Git LFS for large files
git lfs track "*.jpg"
git lfs track "*.png"
```

### Error: Branch Protection
- Go to GitHub repository settings
- Disable branch protection temporarily
- Push files
- Re-enable protection

---
**Upload guide for CocoBlim to GitHub repository**
