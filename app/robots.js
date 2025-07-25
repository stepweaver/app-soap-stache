export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/_next/', '/studio/'],
    },
    sitemap: 'https://app-soap-stache.vercel.app/sitemap.xml',
  };
} 