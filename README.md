# Soap Stache

A modern e-commerce demo for handcrafted soaps, built with Next.js, Sanity CMS, and Stripe payments. This project features a beautiful, responsive design with Michigan pride themes and comprehensive product management.

> **Demo Site Notice:** This is a demonstration project. All user-input forms—including contact, newsletter signup, and checkout—are for demonstration purposes only. No real orders are processed, no emails are sent, and no payments are charged. The site showcases web development skills and e-commerce architecture.

## Features

- **Modern E-commerce**: Complete shopping cart and checkout experience
- **Content Management**: Sanity CMS for easy product and content management
- **Payment Processing**: Secure Stripe integration for payments
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Product Management**: Advanced product catalog with categories, pricing, and inventory
- **Michigan Pride**: Local branding and themed content
- **Real-time Updates**: Live content updates through Sanity
- **SEO Optimized**: Next.js App Router with optimized performance

## Demo Forms & Interactive Elements

All forms on this site are non-functional and for demonstration only:

| Form | Location | Behavior |
|------|----------|----------|
| **Contact** | `/contact` | Simulates submission; displays success message; no email sent |
| **Newsletter signup** | Footer, home page | Logs to console; no subscription created |
| **Checkout** | Cart → Stripe | Demo mode; no real payments processed |
| **Subscription** | `/subscribe` | Plans displayed; "Coming Soon" button; no signup |

A persistent demo banner at the top of each page reminds visitors that no real orders are processed.

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library for UI elements

### Backend & CMS

- **Sanity CMS** - Headless content management system
- **Sanity Studio** - Content editing interface
- **Sanity Client** - JavaScript client for content queries
- **Sanity Image URL** - Image optimization and transformation

### Payment & E-commerce

- **Stripe** - Payment processing and checkout
- **Stripe.js** - Client-side payment integration

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## Project Structure & Architecture

### Dynamic Routes

Product pages use Next.js dynamic routing (`/products/[slug]`). Each product in Sanity has a unique slug; visiting `/products/your-product-slug` renders a detail page with full product information, images, and add-to-cart functionality. Content is fetched at build time or on demand via Sanity GROQ queries.

### Centralised Content

All product data, images, and content are managed in **Sanity CMS**. The `lib/sanity.js` client and GROQ queries fetch content from Sanity's dataset. Adding or editing products in Sanity Studio automatically updates the site—no component logic changes required. Schema types (`soapType.js`, `subscriberType.js`) define the content structure.

```
soap-stache/
├── app-soap-stache/          # Next.js frontend application
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── api/             # API routes (Stripe webhooks, checkout)
│   │   ├── cart/            # Shopping cart page
│   │   ├── contact/         # Contact page
│   │   ├── products/        # Product pages
│   │   └── success/         # Order success page
│   ├── components/          # React components
│   │   ├── layout/          # Layout components (Navbar, Footer, Hero)
│   │   ├── ui/              # Reusable UI components
│   │   └── [feature]/       # Feature-specific components
│   ├── contexts/            # React contexts (CartContext)
│   ├── lib/                 # Utility libraries
│   │   ├── sanity.js        # Sanity client configuration
│   │   ├── stripe.js        # Stripe client configuration
│   │   └── stripe-server.js # Server-side Stripe utilities
│   └── public/              # Static assets
└── studio-soap-stache/      # Sanity Studio (CMS)
    ├── schemaTypes/         # Content schemas
    │   ├── soapType.js      # Product schema
    │   └── subscriberType.js # Newsletter subscriber schema
    └── sanity.config.js     # Sanity configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Sanity account
- Stripe account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd soap-stache
   ```

2. **Install dependencies for both projects**

   ```bash
   # Install Next.js app dependencies
   cd app-soap-stache
   npm install

   # Install Sanity Studio dependencies
   cd ../studio-soap-stache
   npm install
   ```

3. **Environment Setup**

   Create `.env.local` in `app-soap-stache/`:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token

   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

4. **Configure Sanity Studio**

   Update `studio-soap-stache/sanity.config.js` with your project details:

   ```javascript
   export default defineConfig({
     name: 'default',
     title: 'Soap Stache',
     projectId: 'your_project_id',
     dataset: 'production',
     // ... rest of config
   });
   ```

### Development

1. **Start Sanity Studio** (CMS)

   ```bash
   cd studio-soap-stache
   npm run dev
   ```

   Open [http://localhost:3333](http://localhost:3333) to access the content management interface.

2. **Start Next.js App**
   ```bash
   cd app-soap-stache
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website.

## Content Management with Sanity

### Product Schema

The project includes a comprehensive product schema with the following fields:

- **Basic Info**: Title, slug, description, blurb
- **Pricing**: Price with validation
- **Media**: Product photos with hotspot functionality
- **Status**: New product badges, availability toggle
- **Display**: Featured/Hero product designation
- **Details**: Grit level (0-5), scent profile
- **Metadata**: Launch date, ordering

### Content Types

1. **Soap Products** (`soapType.js`)

   - Complete product catalog management
   - Image optimization and transformation
   - Inventory and availability tracking
   - Special display status (Featured/Hero)

2. **Newsletter Subscribers** (`subscriberType.js`)
   - Email subscription management
   - Marketing list integration

### Sanity Studio Features

- **Real-time Collaboration**: Multiple editors can work simultaneously
- **Custom Validation**: Business rules for product management
- **Image Management**: Hotspot cropping and optimization
- **Content Preview**: See how content will appear on the website
- **Version Control**: Track content changes over time

## E-commerce Features (Demo)

### Shopping Cart

- Persistent cart state with React Context
- Add/remove items
- Quantity management
- Cart total calculation

### Checkout Process (Demo)

- Stripe Checkout integration for demonstration
- Simulated payment flow; no real charges in demo mode
- Order confirmation and success page
- Webhook handling structure in place (no live processing)

### Product Management

- Dynamic product pages with Next.js dynamic routes
- Product filtering and search
- Inventory tracking
- Featured product sections

## Design System

### Components

- **Layout**: Navbar, Footer, Hero sections
- **Product**: ProductCard, ProductGrid, FeaturedProducts
- **E-commerce**: Cart, checkout components
- **Marketing**: ReviewsSection, MichiganPrideSection, EmailSubscribe

### Styling

- **Tailwind CSS 4**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI elements
- **Michigan Theme**: Local branding and colors

## API Routes

### Stripe Integration

- `/api/checkout` - Create Stripe checkout sessions
- `/api/webhooks/stripe` - Handle Stripe webhooks

### Content Queries

- Sanity GROQ queries for product data
- Real-time content updates
- Image optimization and transformation

## Deployment

### Development Scripts

| Command | Location | Purpose |
|---------|----------|---------|
| `npm run dev` | app-soap-stache | Start Next.js dev server (port 3000) |
| `npm run dev` | studio-soap-stache | Start Sanity Studio (port 3333) |
| `npm run build` | app-soap-stache | Production build for deployment |
| `npm start` | app-soap-stache | Run production build locally |

### Frontend (Next.js)

```bash
cd app-soap-stache
npm run build
npm start
```

Deploy the `app-soap-stache` directory to Vercel, Netlify, or similar. The build outputs a static-optimised bundle; ensure the platform supports Next.js App Router.

### Sanity Studio

```bash
cd studio-soap-stache
npm run build
npm run deploy
```

Sanity Studio can be deployed to sanity.io hosting or self-hosted. Content editors use the Studio to manage products and subscribers.

### Environment Variables

Ensure all environment variables are set in your deployment platform:

- Vercel (recommended for Next.js)
- Netlify
- AWS, Google Cloud, or other platforms

## Performance

- **Next.js App Router**: Optimized routing and rendering
- **Image Optimization**: Sanity image transformation
- **Code Splitting**: Automatic bundle optimization
- **CDN**: Content delivery network for static assets
- **Turbopack**: Fast development builds

## Security

- **Environment Variables**: Secure API key management
- **Stripe Security**: PCI-compliant payment processing
- **Sanity Security**: Role-based access control
- **Input Validation**: Client and server-side validation

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: Check the respective documentation for each tool
- **Sanity**: [Sanity Documentation](https://www.sanity.io/docs)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Stripe**: [Stripe Documentation](https://stripe.com/docs)

## Acknowledgments

- Sanity for the excellent headless CMS
- Vercel for Next.js and deployment platform
- Stripe for secure payment processing
- Tailwind CSS for the utility-first styling approach
