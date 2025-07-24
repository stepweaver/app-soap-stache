export default function StructuredData({ type, data }) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Soap Stache',
          url: 'https://soapstache.com',
          logo: 'https://soapstache.com/images/mustache.png',
          description:
            'Handcrafted artisan soaps made with natural ingredients and Michigan pride',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressRegion: 'MI',
            addressLocality: 'Grand Rapids',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'hello@soapstache.com',
            telephone: '+1-123-456-7890',
            availableLanguage: 'English',
          },
          sameAs: [
            'https://www.facebook.com/soapstache',
            'https://www.instagram.com/soapstache',
            'https://www.tiktok.com/@soapstache',
          ],
          foundingDate: '2020',
          areaServed: 'United States',
          serviceType: 'Artisan Soap Making',
        };

      case 'product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.title,
          description: data.description || data.blurb,
          image: data.photo
            ? `https://cdn.sanity.io/images/${
                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
              }/${
                process.env.NEXT_PUBLIC_SANITY_DATASET
              }/${data.photo.asset._ref
                .replace('image-', '')
                .replace('-jpg', '.jpg')
                .replace('-png', '.png')}`
            : 'https://soapstache.com/images/site_preview.png',
          brand: {
            '@type': 'Brand',
            name: 'Soap Stache',
          },
          offers: {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: 'USD',
            availability:
              data.available !== false
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            url: `https://soapstache.com/products/${data.slug?.current}`,
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0],
          },
          category: 'Artisan Soap',
          material: 'Natural Ingredients',
          weight: {
            '@type': 'QuantitativeValue',
            value: data.weight || 5,
            unitText: 'oz',
          },
          additionalProperty: [
            {
              '@type': 'PropertyValue',
              name: 'Scent',
              value: data.scent,
            },
            {
              '@type': 'PropertyValue',
              name: 'Grit Level',
              value: `${data.grit}/5`,
            },
            {
              '@type': 'PropertyValue',
              name: 'Made in',
              value: 'Michigan, USA',
            },
          ],
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Soap Stache',
          url: 'https://soapstache.com',
          description:
            'Handcrafted artisan soaps made with natural ingredients and Michigan pride',
          publisher: {
            '@type': 'Organization',
            name: 'Soap Stache',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target:
              'https://soapstache.com/products?search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        };

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Soap Stache',
          description:
            'Handcrafted artisan soaps made with natural ingredients and Michigan pride',
          url: 'https://soapstache.com',
          telephone: '+1-123-456-7890',
          email: 'hello@soapstache.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Grand Rapids',
            addressRegion: 'MI',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 42.9634,
            longitude: -85.6681,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
              opens: '09:00',
              closes: '17:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '10:00',
              closes: '15:00',
            },
          ],
          priceRange: '$$',
          currenciesAccepted: 'USD',
          paymentAccepted: 'Cash, Credit Card, PayPal',
          areaServed: 'United States',
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
