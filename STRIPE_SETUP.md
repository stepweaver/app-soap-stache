# Stripe Setup Instructions

## 1. Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete your business verification
3. Get your API keys from the Stripe Dashboard

## 2. Environment Variables

Create a `.env.local` file in the `app-soap-stache` directory with your actual values:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# App Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 3. Set Up Stripe Webhooks

### For Development (Local Testing):

**Option A: Stripe CLI (Recommended)**

1. **Install Stripe CLI**:

   ```bash
   # Windows (using chocolatey)
   choco install stripe-cli

   # Or download from: https://github.com/stripe/stripe-cli/releases
   ```

2. **Login to Stripe CLI**:

   ```bash
   stripe login
   ```

3. **Forward webhooks to your local server**:

   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. **Copy the webhook signing secret** that the CLI provides and add it to your `.env.local` file

**Option B: ngrok (Alternative)**

1. **Install ngrok**:

   ```bash
   # Download from: https://ngrok.com/download
   ```

2. **Expose your local server**:

   ```bash
   ngrok http 3000
   ```

3. **Use the ngrok URL** in your Stripe webhook endpoint (e.g., `https://abc123.ngrok.io/api/webhooks/stripe`)

4. **Set up the webhook** in Stripe Dashboard using the ngrok URL

### For Production:

1. In your Stripe Dashboard, go to **Developers > Webhooks**
2. Click **Add endpoint**
3. Set the endpoint URL to: `https://your-domain.com/api/webhooks/stripe`
4. Select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the webhook signing secret to your `.env.local` file

## 4. Test the Integration

1. Start your development server: `npm run dev`
2. Add items to cart and test the checkout flow
3. Use Stripe's test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

## 5. Production Deployment

1. Update your environment variables with production Stripe keys
2. Update `NEXT_PUBLIC_SITE_URL` to your production domain
3. Update the webhook endpoint URL in Stripe Dashboard
4. Test the complete flow in production

## 6. Next Steps

- Set up order management system
- Implement inventory tracking
- Add email notifications
- Set up fulfillment integration
- Add customer accounts
- Implement order history

## Troubleshooting

- Check browser console for JavaScript errors
- Verify all environment variables are set correctly
- Ensure webhook endpoint is accessible
- Test with Stripe's test mode first
