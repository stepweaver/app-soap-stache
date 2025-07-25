import { stripe } from '@/lib/stripe-server';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Demo mode protection
const isDemoMode = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export async function POST(request) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    // Demo mode protection - log but don't process real payments
    if (isDemoMode) {
      console.log('🚫 DEMO MODE: Ignoring webhook event:', event.type);
      console.log('Event data:', JSON.stringify(event.data.object, null, 2));
      return NextResponse.json({ received: true, demoMode: true });
    }

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;

        // Handle successful payment
        console.log('Payment successful:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amount: session.amount_total,
          metadata: session.metadata,
        });

        // Here you would typically:
        // 1. Save order to your database
        // 2. Send confirmation email
        // 3. Update inventory
        // 4. Send order to fulfillment system

        break;

      case 'payment_intent.succeeded':
        console.log('Payment intent succeeded:', event.data.object.id);
        break;

      case 'payment_intent.payment_failed':
        console.log('Payment failed:', event.data.object.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
} 