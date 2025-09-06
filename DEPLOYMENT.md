# Vercel Deployment Guide

## Fixed Issues

The following issues have been resolved to ensure successful Vercel deployment:

### 1. Node.js Version Compatibility
- Updated `package.json` to specify Node.js 18.x (Vercel's recommended version)
- Added proper engine specification for consistent builds

### 2. Vercel Configuration
- Enhanced `vercel.json` with proper SPA routing
- Added security headers
- Configured asset caching for better performance
- Added proper function runtime specification

### 3. Build Configuration
- Updated `vite.config.ts` with proper build targets
- Added global definitions for better compatibility
- Specified output directory and assets directory
- Enhanced TypeScript configuration with proper module resolution

### 4. File Organization
- Created `.vercelignore` to exclude unnecessary files
- Added `vercel-build` script for Vercel's build process

## Deployment Steps

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite framework
4. The build settings are already configured in `vercel.json`

### Option 3: Use the deploy script
```bash
npm run deploy
```

## Build Configuration

The project is configured with:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x
- **Install Command**: `npm install`

## Important Notes

1. **SPA Routing**: The `vercel.json` includes proper rewrites to handle client-side routing
2. **Asset Optimization**: Static assets are cached for 1 year with immutable headers
3. **Security Headers**: Added security headers for better protection
4. **Case Sensitivity**: All imports use consistent casing to avoid Linux deployment issues

## Troubleshooting

If deployment still fails:

1. **Check Build Logs**: Review the build logs in Vercel dashboard
2. **Clear Cache**: Use "Redeploy" without build cache
3. **Environment Variables**: Ensure any required environment variables are set
4. **Memory Issues**: The build is optimized to stay within Vercel's memory limits

## File Structure

```
├── vercel.json          # Vercel configuration
├── .vercelignore        # Files to ignore during deployment
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite build configuration
├── tsconfig.app.json    # TypeScript configuration
└── dist/                # Build output (generated)
```

## Performance Optimizations

- Manual chunk splitting for better caching
- Asset optimization with proper headers
- Source maps disabled for production
- ESBuild minification for faster builds

Your portfolio should now deploy successfully on Vercel!
