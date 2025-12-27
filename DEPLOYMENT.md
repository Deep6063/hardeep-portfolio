# Deployment Guide

Your portfolio is ready to be deployed! Here are the easiest ways to make it live:

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Method A: Using Vercel Website (No CLI needed)

1. **Push your changes to GitHub:**
   ```bash
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "Add New Project"
   - Import your repository: `Deep6063/hardeep-portfolio`
   - Click "Deploy" (Vercel will auto-detect it's a static site)
   - Your site will be live in seconds! 🎉

3. **Your site will be available at:**
   - `https://hardeep-portfolio.vercel.app` (or a custom domain if you set one up)

### Method B: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live immediately!

3. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Option 2: Deploy to Netlify

1. **Push your changes to GitHub:**
   ```bash
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

## Option 3: GitHub Pages (Already configured in README)

Your README mentions GitHub Pages. To use it:

1. **Push your changes:**
   ```bash
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Select source: "Deploy from a branch"
   - Choose branch: `main`
   - Select folder: `/ (root)`
   - Your site will be at: `https://deep6063.github.io/hardeep-portfolio/`

## Quick Deploy Commands

After pushing to GitHub, you can deploy with:

```bash
# Commit and push
git commit -m "Ready for deployment"
git push origin main

# Then use Vercel (easiest)
npx vercel --prod
```

## Updating Your Live Site

Whenever you make changes:
1. Make your edits
2. Commit: `git commit -m "Update portfolio"`
3. Push: `git push origin main`
4. Vercel/Netlify will automatically redeploy!

---

**Recommended:** Use Vercel (Option 1) - it's the fastest and easiest!

