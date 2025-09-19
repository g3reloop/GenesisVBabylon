# GitHub Setup Guide for Genesis V Babylon

## 🚀 Manual GitHub Repository Creation

Since GitHub CLI is not available, follow these steps to create a repository and push your code:

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository details:**
   - **Name:** `genesis-v-babylon`
   - **Description:** `Genesis Parallel Civilisation: Genesis V Babylon - A complete civilizational ontology comparing Babylon's CRLs with Genesis' SRLs`
   - **Visibility:** Public (or Private if you prefer)
   - **Initialize:** ❌ Don't initialize with README, .gitignore, or license (we already have these)

### Step 2: Add Remote Repository

After creating the repository, GitHub will show you the repository URL. Run these commands:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/genesis-v-babylon.git

# Verify the remote was added
git remote -v
```

### Step 3: Push Code to GitHub

```bash
# Push the main branch to GitHub
git push -u origin main
```

### Step 4: Verify Upload

1. **Refresh your GitHub repository page**
2. **Check that all files are uploaded:**
   - `src/app/components/music/AdvancedMusicPlayer.tsx`
   - `src/app/components/music/AdvancedMusicPlayerProvider.tsx`
   - `public/audio/` (with all 11 MP3 files)
   - `public/images/` (with all images)
   - All other project files

## 📁 Repository Structure

Your repository should contain:

```
genesis-v-babylon/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── music/
│   │   │       ├── AdvancedMusicPlayer.tsx
│   │   │       ├── AdvancedMusicPlayerProvider.tsx
│   │   │       └── SongCard.tsx
│   │   ├── gallery/
│   │   ├── rmw-discography/
│   │   └── [other pages]
│   └── lib/
├── public/
│   ├── audio/ (11 MP3 files)
│   ├── images/
│   └── icons/
├── package.json
├── next.config.js
├── netlify.toml
└── README.md
```

## 🔧 Alternative: Using SSH (if you have SSH keys set up)

If you prefer SSH over HTTPS:

```bash
# Add SSH remote (replace YOUR_USERNAME)
git remote add origin git@github.com:YOUR_USERNAME/genesis-v-babylon.git

# Push to GitHub
git push -u origin main
```

## 🚀 Next Steps After Upload

1. **Enable GitHub Pages** (if you want to host on GitHub)
2. **Set up Netlify deployment** (recommended for Next.js)
3. **Configure environment variables** for Supabase
4. **Test the deployed site**

## 📝 Important Notes

- **Audio Files:** Make sure all 11 MP3 files in `public/audio/` are uploaded
- **Images:** Verify all images in `public/images/` are present
- **Build:** The project builds successfully with `npm run build`
- **PWA:** The site is configured as a Progressive Web App

## 🆘 Troubleshooting

If you encounter issues:

1. **Check file sizes:** Large audio files might need Git LFS
2. **Verify permissions:** Ensure you have write access to the repository
3. **Check network:** Ensure stable internet connection for large uploads
4. **Review .gitignore:** Make sure important files aren't being ignored

## 📞 Support

If you need help with any of these steps, let me know and I can provide more detailed guidance!


