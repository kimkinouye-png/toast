# Deploy Portfolio Presentation to Vercel

This guide provides instructions for deploying the Kim Inouye Portfolio Presentation to Vercel.

## Project Overview

This is a React + TypeScript presentation built with:
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Vite** as the build tool
- Custom slide templates and components
- Speaker notes system
- 34 slides across 3 case studies

## Project Structure

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main app with slide navigation & speaker notes
│   │   ├── slides-data.tsx            # All 34 slides defined as React components
│   │   └── components/                # Slide templates and custom components
│   ├── styles/
│   │   ├── fonts.css                  # Font imports (Playfair Display, DM Sans)
│   │   └── theme.css                  # Tailwind v4 theme tokens
│   └── imports/                       # Images and assets
├── package.json
├── vite.config.ts
└── slides-content.md                  # Editable content reference file
```

## Key Files

1. **src/app/App.tsx** - Main application with:
   - Slide navigation (arrow keys, click)
   - Speaker notes panel (press 'S' to toggle)
   - All speaker notes array (34 entries)

2. **src/app/slides-data.tsx** - All slide definitions using templates:
   - MainTitle, ChapterIntro, Statement
   - HeadlineVisual, HeadlineFullWidth, HeadlineStats
   - FullVisual, Quote, FromTo

3. **slides-content.md** - Markdown reference file with all headlines and speaker notes for easy bulk editing

## Deployment Steps

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project directory
cd /workspaces/default/code

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [your account]
# - Link to existing project? N
# - Project name? kim-inouye-portfolio (or your choice)
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Portfolio presentation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Root Directory**: ./
     - **Build Command**: `pnpm build`
     - **Output Directory**: `dist`
     - **Install Command**: `pnpm install`
   - Click "Deploy"

### Option 3: Deploy from Local Directory

```bash
# Build the project locally
pnpm install
pnpm build

# Deploy the dist folder
vercel --prod dist/
```

## Build Configuration

The project uses Vite with these settings (already configured in `vite.config.ts`):

```typescript
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

## Environment & Dependencies

**Node Version**: 18.x or higher recommended

**Key Dependencies**:
- react: ^18.3.1
- react-dom: ^18.3.1
- lucide-react: ^0.469.0
- recharts: ^2.15.0

**Build Tools**:
- vite: ^6.0.7
- typescript: ~5.6.2
- tailwindcss: ^4.0.0

## Design System

- **Background**: #faf9f7
- **Primary Purple**: #6b6ce0
- **Teal**: #2ebdb4
- **Red**: #d43f3e
- **Orange**: #f5a623
- **Fonts**: 
  - Headlines: Playfair Display (serif)
  - Body: DM Sans (sans-serif)

## Presentation Features

- **Keyboard Navigation**: 
  - Arrow keys or click to navigate
  - 'S' key to toggle speaker notes
  - 'T' for template preview
  - 'B' for background preview

- **Speaker Notes**: 
  - Press 'S' to open/close
  - Appears top center of slide
  - Contains detailed notes for each of 34 slides

## Customization After Deployment

To make content edits:
1. Edit `slides-content.md` for reference
2. Update `src/app/slides-data.tsx` for slide content
3. Update `src/app/App.tsx` for speaker notes
4. Rebuild and redeploy

## Troubleshooting

**Build fails with module errors**:
- Ensure all imports in `slides-data.tsx` point to existing files
- Check that all component files exist in `src/app/components/`

**Images not loading**:
- Verify image paths in `src/imports/`
- Check that image imports use correct paths

**Fonts not rendering**:
- Confirm `src/styles/fonts.css` is being imported
- Check that Google Fonts URLs are accessible

**Deployment succeeds but site is blank**:
- Check browser console for errors
- Verify `base: './'` in vite.config.ts
- Ensure build output includes all assets

## Post-Deployment

Once deployed, you'll receive a URL like:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

You can configure a custom domain in Vercel's project settings.

## Support

For Vercel-specific deployment issues, see:
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/vite

For project-specific questions, review the three synchronized files:
- `src/app/slides-data.tsx` (slide definitions)
- `src/app/App.tsx` (speaker notes)
- `slides-content.md` (content reference)
