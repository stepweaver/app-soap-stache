import { client } from './sanity';

export async function generateProductMetadata(slug) {
  try {
    const product = await client.fetch(
      `*[_type == "soap" && slug.current == $slug] | order(_updatedAt desc) [0] {
        title,
        description,
        blurb,
        price,
        photo,
        scent,
        weight,
        isNew,
        featured
      }`,
      { slug }
    );

    if (!product) {
      return {
        title: 'Product Not Found',
        description: 'Sorry, we couldn\'t find the product you\'re looking for.',
      };
    }

    const imageUrl = product.photo
      ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${product.photo.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`
      : '/images/site_preview.png';

    return {
      title: product.title,
      description: product.blurb || product.description || `Discover ${product.title} - Premium handcrafted artisan soap from Soap Stache. Made with natural ingredients and Michigan pride.`,
      keywords: [
        product.title.toLowerCase(),
        'artisan soap',
        'handcrafted soap',
        'natural soap',
        'Michigan soap',
        'premium soap',
        product.scent?.toLowerCase(),
        'luxury soap',
        'organic soap'
      ].filter(Boolean),
      openGraph: {
        title: `${product.title} - Soap Stache`,
        description: product.blurb || product.description || `Discover ${product.title} - Premium handcrafted artisan soap.`,
        type: 'product',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${product.title} - Soap Stache`,
          }
        ],
        siteName: 'Soap Stache',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.title} - Soap Stache`,
        description: product.blurb || product.description || `Discover ${product.title} - Premium handcrafted artisan soap.`,
        images: [imageUrl],
      },
      alternates: {
        canonical: `https://soapstache.com/products/${slug}`,
      },
      other: {
        'product:price:amount': product.price,
        'product:price:currency': 'USD',
        'product:availability': product.featured ? 'in stock' : 'out of stock',
        'product:condition': 'new',
      },
    };
  } catch (error) {
    console.error('Error generating product metadata:', error);
    return {
      title: 'Product - Soap Stache',
      description: 'Discover our premium handcrafted artisan soaps.',
    };
  }
}

export async function generateProductsMetadata() {
  return {
    title: 'All Products',
    description: 'Browse our complete collection of handcrafted artisan soaps. From natural ingredients to Michigan pride, find your perfect soap.',
    keywords: [
      'artisan soap collection',
      'handcrafted soap',
      'natural soap',
      'Michigan soap',
      'premium soap',
      'luxury soap',
      'organic soap',
      'handmade soap',
      'gourmet soap',
      'bath and body',
      'skincare',
      'natural skincare'
    ],
    openGraph: {
      title: 'All Products - Soap Stache',
      description: 'Browse our complete collection of handcrafted artisan soaps. From natural ingredients to Michigan pride, find your perfect soap.',
      type: 'website',
      images: [
        {
          url: '/images/michigan_summer.png',
          width: 1200,
          height: 630,
          alt: 'Soap Stache Product Collection',
        }
      ],
      siteName: 'Soap Stache',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'All Products - Soap Stache',
      description: 'Browse our complete collection of handcrafted artisan soaps.',
      images: ['/images/michigan_summer.png'],
    },
    alternates: {
      canonical: 'https://soapstache.com/products',
    },
  };
}

export async function generateAboutMetadata() {
  return {
    title: 'About Us',
    description: 'Learn about Soap Stache\'s story, our commitment to natural ingredients, and our Michigan pride. Discover how we create premium handcrafted artisan soaps.',
    keywords: [
      'about soap stache',
      'artisan soap maker',
      'Michigan soap company',
      'natural soap ingredients',
      'handcrafted soap story',
      'soap making process',
      'local business',
      'Michigan pride'
    ],
    openGraph: {
      title: 'About Us - Soap Stache',
      description: 'Learn about Soap Stache\'s story, our commitment to natural ingredients, and our Michigan pride.',
      type: 'website',
      images: [
        {
          url: '/images/brewed_awakening.jpg',
          width: 1200,
          height: 630,
          alt: 'About Soap Stache - Our Story',
        }
      ],
      siteName: 'Soap Stache',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us - Soap Stache',
      description: 'Learn about Soap Stache\'s story, our commitment to natural ingredients, and our Michigan pride.',
      images: ['/images/brewed_awakening.jpg'],
    },
    alternates: {
      canonical: 'https://soapstache.com/about',
    },
  };
}

export async function generateContactMetadata() {
  return {
    title: 'Contact Us',
    description: 'Get in touch with Soap Stache. We\'d love to hear from you about our handcrafted artisan soaps, custom orders, or any questions you may have.',
    keywords: [
      'contact soap stache',
      'customer service',
      'custom soap orders',
      'soap inquiries',
      'Michigan soap company contact',
      'artisan soap questions'
    ],
    openGraph: {
      title: 'Contact Us - Soap Stache',
      description: 'Get in touch with Soap Stache. We\'d love to hear from you about our handcrafted artisan soaps.',
      type: 'website',
      images: [
        {
          url: '/images/mustache.png',
          width: 1200,
          height: 630,
          alt: 'Contact Soap Stache',
        }
      ],
      siteName: 'Soap Stache',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us - Soap Stache',
      description: 'Get in touch with Soap Stache. We\'d love to hear from you about our handcrafted artisan soaps.',
      images: ['/images/mustache.png'],
    },
    alternates: {
      canonical: 'https://soapstache.com/contact',
    },
  };
} 