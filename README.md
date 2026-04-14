# Kim Inouye - Portfolio Presentation

A React + TypeScript presentation showcasing operational systems and design leadership work at PayPal.

## 📊 Presentation Overview

- **34 slides** across 3 case studies
- **Interactive navigation** with keyboard controls
- **Speaker notes** system (press 'S')
- **Beautiful design** with Playfair Display + DM Sans typography

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Create a new repository on GitHub (https://github.com/new)
# Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect the settings - just click **Deploy**!

That's it! Vercel will build and deploy your presentation.

## 🎨 Features

- **Keyboard Navigation**: Arrow keys or click to navigate slides
- **Speaker Notes**: Press 'S' to toggle speaker notes panel (appears top center)
- **Template Preview**: Press 'T' to preview all slide templates
- **Background Preview**: Press 'B' to preview background options

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start

# Build for production
pnpm build
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main app with navigation
│   │   ├── slides-data.tsx         # All 34 slides
│   │   └── components/             # Slide templates & components
│   ├── styles/
│   │   ├── fonts.css              # Font imports
│   │   └── theme.css              # Design system tokens
│   └── imports/                   # Images and assets
├── slides-content.md              # Editable content reference
└── vercel.json                    # Vercel configuration
```

## 🎯 Case Studies

1. **Ways of Working** - Operational systems at PayPal
2. **AI Pilots** - AI adoption framework and pilot program
3. **Personal Tools** - Capacity Planner, Rose, Daily Digest

## 🎨 Design System

- **Background**: #faf9f7
- **Purple**: #6b6ce0
- **Teal**: #2ebdb4
- **Red**: #d43f3e
- **Orange**: #f5a623

## 📝 Making Content Updates

Edit these files to update content:
- `slides-content.md` - Reference file with all content
- `src/app/slides-data.tsx` - Slide definitions
- `src/app/App.tsx` - Speaker notes array

## 📄 License

All rights reserved © Kim Inouye
