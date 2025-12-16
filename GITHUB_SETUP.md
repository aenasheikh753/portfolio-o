# GitHub Setup Instructions

## Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `Portfolio` (or your preferred name)
3. Description: "Modern Next.js Portfolio with dark theme and animations"
4. Choose Public or Private
5. **DO NOT** check "Initialize this repository with a README" (we already have one)
6. **DO NOT** check "Add .gitignore" (we already have one)
7. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

## After Pushing

Your portfolio will be available at:
`https://github.com/YOUR_USERNAME/Portfolio`

You can also deploy it to Vercel:
1. Go to https://vercel.com
2. Import your GitHub repository
3. Vercel will automatically deploy it!

