# Production Deployment Checklist

## ✅ Fixed Issues

1. **Demo Mode Detection** - Fixed environment variable references
2. **Missing Favicon** - Created favicon.svg
3. **URL References** - Updated all URLs to use correct domain
4. **Demo Banner** - Added prominent demo mode banner
5. **Error Handling** - Improved checkout API error handling

## 🔧 Environment Variables Required

Make sure these are set in your Vercel environment:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=c6kgibqm
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_51RoSPZF61Hjru97ttLBsDmUvymVA8AMc20DRwWVVgzSjK4eyJoHIVNEeMhMM89JoYVOWDusvhnbHUcxJBVQ5z3Yg00xF3Yu1ju
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51RoSPZF61Hjru97tzkIkGfTj4o1K1LVHeTJ0cvYpTmJjI1coztW4PXSIIwMn8bSaFhzFR94NIZKvAdfa1r1A2pBw00
STRIPE_WEBHOOK_SECRET=

# App Configuration
NEXT_PUBLIC_SITE_URL=https://app-soap-stache.vercel.app

# Enable demo mode
NEXT_PUBLIC_DEMO_MODE=true
```

## 🎯 Testing Steps

1. **Deploy to Vercel**
   ```bash
   git add .
   git commit -m "Fix production issues: demo mode, favicon, checkout"
   git push
   ```

2. **Test Environment Variables**
   - Visit: `https://app-soap-stache.vercel.app/api/test-env`
   - Should show all environment variables are set

3. **Test Demo Banner**
   - Should see yellow demo banner at top of page
   - Should see demo notice in cart

4. **Test Checkout**
   - Add item to cart
   - Click "PROCEED TO CHECKOUT"
   - Should redirect to Stripe (even in demo mode)

5. **Check Console Errors**
   - Favicon errors should be resolved
   - Only missing apple-touch-icon.png (non-critical)

## 🚨 Still Need to Fix

1. **Generate Icon Files** (see `generate-icons.md`)
   - `apple-touch-icon.png` (180x180)
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

2. **Optional: Set up Stripe Webhook**
   - For real order processing (not needed for demo)

## 🔍 Debugging

If checkout still fails:

1. Check Vercel logs for detailed error messages
2. Visit `/api/test-env` to verify environment variables
3. Check browser console for client-side errors
4. Verify Stripe keys are correct and active

## 📱 PWA Support

Once icons are generated, the site will be fully PWA-compatible with:
- ✅ Manifest file
- ✅ Service worker ready
- ✅ App icons (after generation)
- ✅ Responsive design 