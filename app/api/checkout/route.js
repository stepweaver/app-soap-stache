import { stripe } from '@/lib/stripe-server';
import { NextResponse } from 'next/server';
import { urlFor } from '@/lib/sanity';

// Demo mode protection
const isDemoMode = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export async function POST(request) {
  try {
    console.log('Checkout API called');
    console.log('Environment variables check:');
    console.log('- STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('- NEXT_PUBLIC_DEMO_MODE:', process.env.NEXT_PUBLIC_DEMO_MODE);
    console.log('- NODE_ENV:', process.env.NODE_ENV);

    const { items, customerEmail } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      );
    }

    // Demo mode notice - allow checkout but mark as demo
    if (isDemoMode) {
      console.log('🚫 DEMO MODE: Creating Stripe session for demonstration');
    }

    // Create line items for Stripe
    const lineItems = items.map((item) => {
      // Convert Sanity image to URL if it exists
      let imageUrl = null;
      if (item.photo && item.photo._type === 'image') {
        imageUrl = urlFor(item.photo).url();
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: imageUrl ? [imageUrl] : [],
            description: `Grit Level: ${item.grit}/5`,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Calculate shipping
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = subtotal >= 54 ? 0 : 599; // $5.99 in cents

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
            description: 'Standard shipping',
          },
          unit_amount: shippingCost,
        },
        quantity: 1,
      });
    }

    // Create Stripe checkout session
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      metadata: {
        items: JSON.stringify(items.map(item => ({
          id: item.productId,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        }))),
        subtotal: subtotal.toFixed(2),
        shipping: (shippingCost / 100).toFixed(2),
        total: ((subtotal + shippingCost / 100)).toFixed(2),
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: shippingCost,
              currency: 'usd',
            },
            display_name: subtotal >= 54 ? 'Free Shipping' : 'Standard Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
      ],
    };

    // Only add customer_email if it's provided and valid
    if (customerEmail && customerEmail.trim() !== '') {
      sessionConfig.customer_email = customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error.message);
    console.error('Full error:', error);

    // Check if it's a Stripe configuration error
    if (error.message.includes('No such api_key')) {
      return NextResponse.json(
        { error: 'Stripe configuration error - check API keys' },
        { status: 500 }
      );
    }

    // Check if it's a missing environment variable
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session', details: error.message },
      { status: 500 }
    );
  }
} 