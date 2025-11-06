# Quick Deployment Guide

## Prerequisites
- GitHub account: https://github.com/signup (if you don't have one)
- Vercel account: https://vercel.com/signup (can sign up with GitHub)

---

## Step 1: Create GitHub Repository (2 minutes)

1. Go to: https://github.com/new
2. Fill in:
   - **Repository name:** `classic-civics-course`
   - **Description:** "U.S. Civics Education - Comprehensive Guide to American Government"
   - **Visibility:** Public or Private (your choice)
   - **DO NOT check:** "Initialize with README" (we already have one)
3. Click **"Create repository"**
4. Keep this page open - you'll need the commands shown

---

## Step 2: Push to GitHub (1 minute)

GitHub will show you commands. They look like this:

```bash
git remote add origin https://github.com/YOUR-USERNAME/classic-civics-course.git
git branch -M main
git push -u origin main
```

**To run these commands:**

1. Open your terminal/command prompt
2. Navigate to the project:
   ```bash
   cd "C:\Users\cjbra\ClassicCivicsCourse\Comprehensive Lessons on U"
   ```
3. Copy and paste the commands from GitHub (with YOUR username)
4. You may be asked to login to GitHub - follow the prompts

---

## Step 3: Deploy to Vercel (2 minutes)

### Option A: Direct Link (Fastest)
After pushing to GitHub, click this link (replace YOUR-USERNAME):
```
https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/classic-civics-course
```

### Option B: Manual Import
1. Go to: https://vercel.com
2. Click **"Sign Up"** or **"Login"** (use GitHub for easiest setup)
3. Click **"Add New..."** → **"Project"**
4. Click **"Import Git Repository"**
5. Find **"classic-civics-course"** in the list
6. Click **"Import"**
7. Vercel will auto-detect settings:
   - Framework: **Vite** ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓
8. Click **"Deploy"**
9. Wait 1-2 minutes
10. Done! Copy your live URL

---

## Your Live Site Will Include:

✅ Liberty's Principles Media brand colors
✅ Custom patriotic button variants
✅ 7 chapters with 65 comprehensive lessons
✅ Full-text search
✅ Dark mode
✅ Mobile responsive

---

## Troubleshooting

**"Git push requires authentication"**
- GitHub may prompt you to login
- Follow the browser popup or enter credentials when asked

**"Vercel build failed"**
- Check that you pushed all files to GitHub
- Verify the build command is `npm run build`
- Verify output directory is `dist`

**Need help?**
- Let me know what error message you see
- I can help troubleshoot any issues

---

## After Deployment

Your site will be live at a URL like:
- `classic-civics-course.vercel.app`
- Or a custom domain if you configure one

Every time you push to GitHub, Vercel will automatically redeploy!
