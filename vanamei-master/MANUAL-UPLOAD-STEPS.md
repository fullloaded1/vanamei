# Manual Upload ke GitHub - Step by Step

## ⚠️ Git Belum Ter-install

Git command tidak ditemukan di sistem. Berikut cara upload manual:

## 🔧 Opsi 1: Install Git (Recommended)

### Download & Install Git:
1. **Download Git:** https://git-scm.com/download/windows
2. **Install** dengan default settings
3. **Restart** Command Prompt/PowerShell
4. **Test:** `git --version`

### Setelah Git Ter-install:
```bash
cd C:\Users\Dell\CascadeProjects\coconut-company-profile
git init
git remote add origin https://github.com/fullloaded1/vanamei.git
git add .
git commit -m "CocoBlim website - Indonesian charcoal supplier"
git push -f origin main
```

## 📁 Opsi 2: Manual Upload via GitHub Web

### Step 1: Backup Repository Lama
1. Go to: https://github.com/fullloaded1/vanamei
2. Click **"Code"** → **"Download ZIP"**
3. Save backup jika diperlukan

### Step 2: Delete All Files
1. Go to repository: https://github.com/fullloaded1/vanamei
2. Click pada setiap file
3. Click **"Delete file"** (🗑️ icon)
4. Commit deletion

### Step 3: Upload New Files
1. Click **"Add file"** → **"Upload files"**
2. **Drag & drop** SEMUA files dari folder:
   ```
   C:\Users\Dell\CascadeProjects\coconut-company-profile\
   ```
3. **Include these important files:**
   - README.md
   - package.json
   - next.config.js
   - tailwind.config.cjs
   - tsconfig.json
   - netlify.toml
   - .gitignore
   - All documentation files (.md)
   - src/ folder (entire)
   - public/ folder (entire)

### Step 4: Commit Changes
1. **Commit message:**
   ```
   CocoBlim website - Indonesian charcoal supplier
   
   - Modern Next.js website with TypeScript
   - Multi-language support (English/Indonesian)  
   - Responsive design with Tailwind CSS
   - Scroll animations and smooth UX
   - Professional layout inspired by Cocologi
   - Complete documentation included
   ```
2. Click **"Commit changes"**

## 🚀 Opsi 3: GitHub Desktop (User-Friendly)

### Download GitHub Desktop:
1. **Download:** https://desktop.github.com/
2. **Install** dan login dengan GitHub account
3. **Clone repository:** https://github.com/fullloaded1/vanamei
4. **Replace all files** dengan files dari project CocoBlim
5. **Commit & Push** via GUI

## 📋 Files yang Harus Di-Upload

### Root Files:
```
├── .gitignore
├── README.md
├── SETUP-GUIDE.md
├── BACKUP-CONFIG.md
├── COMMANDS.md
├── GITHUB-UPLOAD.md
├── MANUAL-UPLOAD-STEPS.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── netlify.toml
└── upload-to-github.bat
```

### Folders:
```
├── public/
│   └── images/
│       ├── CocoBlim Logo 1.png
│       └── hero gambar.jpg
└── src/
    ├── app/
    ├── components/
    ├── contexts/
    ├── data/
    ├── hooks/
    └── lib/
```

## ✅ Verification Checklist

Setelah upload, pastikan:

- [ ] README.md ter-upload dengan benar
- [ ] package.json ada dan benar
- [ ] src/ folder lengkap dengan semua files
- [ ] public/images/ ada dengan logo dan hero image
- [ ] Semua dokumentasi (.md files) ter-upload
- [ ] Repository structure sesuai dengan project

## 🌐 Next Steps Setelah Upload

1. **Check Repository:** https://github.com/fullloaded1/vanamei
2. **Setup Deployment:**
   - Netlify: Connect GitHub repo
   - Vercel: Import from GitHub
3. **Test Build:**
   ```bash
   npm install
   npm run build
   ```
4. **Update Domain** jika diperlukan

## 🆘 Jika Ada Masalah

### File Too Large Error:
- GitHub limit: 100MB per file
- Check: `public/images/` folder
- Compress images jika perlu

### Permission Denied:
- Pastikan login ke GitHub account yang benar
- Check repository permissions
- Use Personal Access Token jika perlu

### Upload Gagal:
- Try upload in smaller batches
- Upload folders satu per satu
- Check internet connection

---
**Manual upload guide untuk CocoBlim ke GitHub**
