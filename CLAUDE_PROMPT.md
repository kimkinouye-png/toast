# Prompt for Claude: Deploy Portfolio Presentation to Vercel

Copy and paste this prompt to Claude to get started with deployment:

---

I have a React + TypeScript portfolio presentation that I need to deploy to Vercel. The project is currently in `/workspaces/default/code/` and contains:

- **React 18** with TypeScript
- **Vite** as the build tool
- **Tailwind CSS v4** for styling
- 34 slides across 3 case studies
- Custom slide components and templates
- Speaker notes system

## Project Structure

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # Main app with navigation & speaker notes
│   │   ├── slides-data.tsx            # All 34 slides defined
│   │   └── components/                # Slide templates & custom components
│   ├── styles/
│   │   ├── fonts.css                  # Font imports
│   │   └── theme.css                  # Tailwind v4 theme
│   └── imports/                       # Images and assets
├── package.json
├── vite.config.ts
├── DEPLOY.md                          # Detailed deployment guide
└── slides-content.md                  # Content reference
```

## What I need you to do:

1. **Review the project structure** - Read the DEPLOY.md file to understand the project
2. **Prepare for deployment** - Check that all necessary files are in place (package.json, vite.config.ts, etc.)
3. **Create deployment configuration** - Set up any necessary Vercel configuration files (vercel.json if needed)
4. **Build the project** - Run `pnpm install` and `pnpm build` to ensure it builds successfully
5. **Deploy to Vercel** - Guide me through deploying this to Vercel production

## Important notes:

- The project uses **pnpm** as the package manager
- Build command: `pnpm build`
- Output directory: `dist`
- Framework: Vite
- Node version: 18.x or higher

## Questions to answer:

- Are there any build issues I should fix before deploying?
- Do I need any additional configuration files for Vercel?
- What's the recommended deployment method (CLI, GitHub, or drag-and-drop)?
- Are there any optimizations I should make for production?

Please walk me through the deployment process step by step. Start by reviewing the DEPLOY.md file and then guide me through each step.
