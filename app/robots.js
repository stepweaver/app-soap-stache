export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/_next/', '/studio/'],
    },
    sitemap: 'https://soapstache.com/sitemap.xml',
  };
} 