# Icon Generation Guide

## Missing Icons

The following icon files are missing and need to be generated:

### 1. Apple Touch Icon (`/public/apple-touch-icon.png`)
- **Size**: 180x180 pixels
- **Format**: PNG
- **Purpose**: iOS home screen icon
- **Source**: Use the existing `/public/images/mustache.png` and resize it to 180x180

### 2. PWA Icons (`/public/icon-192.png` and `/public/icon-512.png`)
- **Sizes**: 192x192 and 512x512 pixels
- **Format**: PNG
- **Purpose**: Progressive Web App icons
- **Source**: Use the existing `/public/images/mustache.png` and resize it

## Quick Fix Instructions

1. **Copy the mustache image**:
   ```bash
   cp public/images/mustache.png public/apple-touch-icon.png
   cp public/images/mustache.png public/icon-192.png
   cp public/images/mustache.png public/icon-512.png
   ```

2. **Resize the images** using any image editor or online tool:
   - `apple-touch-icon.png`: 180x180 pixels
   - `icon-192.png`: 192x192 pixels
   - `icon-512.png`: 512x512 pixels

3. **Alternative**: Use an online icon generator like:
   - https://realfavicongenerator.net/
   - https://favicon.io/

## Current Status

- ✅ `favicon.ico` - exists
- ✅ `favicon.svg` - created
- ❌ `apple-touch-icon.png` - needs to be generated
- ❌ `icon-192.png` - needs to be generated  
- ❌ `icon-512.png` - needs to be generated

Once these icons are generated, the 404 errors for favicon and apple-touch-icon will be resolved. 