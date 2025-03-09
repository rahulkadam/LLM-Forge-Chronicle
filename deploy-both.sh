#!/bin/bash
set -e

# Step 1: Deploy to main repo with custom domain
echo "Building and deploying to main repository (chronoprompt.com)..."
npm run deploy

# Step 2: Create a temporary build for the backup repository
echo "Building for backup repository..."
# Temporarily modify package.json for GitHub Pages URL
sed -i.bak 's|"homepage": "https://chronoprompt.com"|"homepage": "https://rahulkadam.github.io/LLM-Forge-Chronicle-Backup"|g' package.json

# Temporarily replace BrowserRouter with HashRouter
if grep -q "BrowserRouter as Router" src/App.tsx; then
  sed -i.bak 's|BrowserRouter as Router|HashRouter as Router|g' src/App.tsx
  # Make sure HashRouter is imported
  if ! grep -q "HashRouter" src/App.tsx; then
    sed -i.bak 's|import { BrowserRouter as Router|import { HashRouter as Router, BrowserRouter|g' src/App.tsx
  fi
fi

# Build but don't include CNAME in this build
rm -f public/CNAME.bak
mv -f public/CNAME public/CNAME.bak || true
npm run build

# Restore original CNAME file
mv -f public/CNAME.bak public/CNAME || true

# Step 3: Deploy to backup repository
echo "Deploying to backup repository..."
# Use direct gh-pages command with repo option
npx gh-pages -d build -b gh-pages -r https://github.com/rahulkadam/LLM-Forge-Chronicle-Backup.git

# Step 4: Restore original package.json and App.tsx
echo "Restoring original configuration..."
mv -f package.json.bak package.json
mv -f src/App.tsx.bak src/App.tsx

echo "Deployment completed to both repositories!"
echo "Main site: https://chronoprompt.com"
echo "Backup site: https://rahulkadam.github.io/LLM-Forge-Chronicle-Backup"