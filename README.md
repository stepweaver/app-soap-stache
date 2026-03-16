# Soap Stache

A modern e-commerce demo for handcrafted soaps, built with Next.js, Sanity CMS, and Stripe-powered demo checkout. This project features a beautiful, responsive design with Michigan pride themes and comprehensive product management.

> **Demo Site Notice:** This is a demonstration project. All user-input forms—including contact, newsletter signup, and checkout—are for demonstration purposes only. **No real orders are processed, no emails are sent, and no payments are charged.** The site showcases web development skills and e-commerce architecture.

## Architecture Note

Soap Stache uses a decoupled frontend/CMS architecture:

- **This repository (`app-soap-stache`)**: Customer-facing storefront built with Next.js (App Router). It handles pages, product browsing, cart experience, demo checkout flow, policy/support pages, and SEO/structured data.
- **Companion repository (`studio-soap-stache`)**: Sanity Studio project used to manage products, content, and schema definitions.

The frontend consumes content from Sanity via GROQ queries and a configured Sanity project. You can browse and run this repo as a standalone frontend demo; full dynamic content and authoring capabilities come from the `studio-soap-stache` CMS project.

Companion CMS repo: `https://github.com/stepweaver/studio-soap-stache.git`

## What This Repository Contains

This repository focuses on the **Next.js storefront**:

- Storefront pages (home, about, products, cart, contact, FAQ, subscribe, success, and policy pages)
- Product browsing and detail pages backed by Sanity content
- Cart and checkout **demo** experience using Stripe Checkout
- Policy and support pages for a realistic storefront feel
- SEO metadata, sitemap, robots configuration, and structured data
- Integration points to Sanity (CMS) and Stripe (demo-only payments)

All CMS schema and Studio configuration live in the separate `studio-soap-stache` repo.

## Highlights

- **Demo-mode e-commerce UX**: Full cart and checkout flow wired to Stripe Checkout, explicitly configured as a demo so no real charges are created.
- **CMS-driven content**: Product catalog, copy, and media come from Sanity, enabling content changes without code changes.
- **SEO-ready architecture**: App Router metadata, sitemap, `robots.txt`, and schema.org structured data to model a production-friendly setup.
- **Persistent demo banner**: A global notice keeps visitors aware that the site is non-transactional.
- **Realistic storefront pages**: Includes policy and support pages (privacy, returns, shipping, terms, etc.) for a portfolio-quality demo.

## Features

- **Modern E-commerce**: Complete shopping cart and checkout experience (demo mode)
- **Content Management**: Sanity CMS for easy product and content management
- **Payment Flow**: Stripe-powered checkout flow, configured here for demonstration only
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Product Management**: Advanced product catalog with categories, pricing, and inventory concepts
- **Michigan Pride**: Local branding and themed content
- **Real-time Updates**: Live content updates through Sanity
- **SEO Optimized**: Next.js App Router with optimized performance and metadata

## Demo Forms & Interactive Elements

All forms on this site are non-functional and for demonstration only:

| Form | Location | Behavior |
|------|----------|----------|
| **Contact** | `/contact` | Simulates submission; displays success message; no email sent |
| **Newsletter signup** | Footer, home page | Logs to console; no subscription created |
| **Checkout** | Cart → Stripe | Demo mode; Stripe Checkout session is created but no real payments are processed |
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
- **Sanity Studio** - Content editing interface (separate repo: `studio-soap-stache`)
- **Sanity Client** - JavaScript client for content queries
- **Sanity Image URL** - Image optimization and transformation

### Payment & E-commerce

- **Stripe** - Payment processing and checkout APIs
- **Stripe.js** - Client-side payment integration
- **Demo checkout flow** - Wired like a real store but configured to avoid real charges

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

## Project Structure

This repository is the Next.js frontend application:

```text
app-soap-stache/
├── app/                  # Next.js App Router routes and layout
│   ├── about/            # About page
│   ├── api/              # API routes (e.g., Stripe checkout/webhooks)
│   ├── cart/             # Shopping cart page
│   ├── contact/          # Contact page
│   ├── faq/              # FAQ page
│   ├── products/         # Product listing and detail routes
│   ├── subscribe/        # Subscription plans (demo)
│   ├── success/          # Checkout success page
│   ├── (policy routes)   # Privacy, returns, shipping, terms, etc.
│   ├── sitemap.xml/      # Sitemap
│   └── robots.txt/       # Robots configuration
├── components/           # React components
│   ├── layout/           # Layout (Navbar, Footer, etc.)
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Homepage and marketing sections
│   └── demo/             # Demo banner, structured data helpers, etc.
├── contexts/             # React contexts (e.g., CartContext)
├── lib/                  # Utility libraries
│   ├── sanity/           # Sanity client and queries
│   ├── stripe/           # Stripe client and server utilities
│   └── metadata/         # Shared metadata/SEO helpers
├── public/               # Static assets
└── README.md
```

Sanity Studio lives in a **separate** repository:

```text
studio-soap-stache/       # Sanity Studio project (separate repo)
├── schemaTypes/          # Content schemas (soapType, subscriberType, etc.)
└── sanity.config.ts      # Studio configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Sanity account and project
- Stripe account (for test keys)

### Installation (Frontend)

1. **Clone the repository**

   ```bash
   git clone https://github.com/stepweaver/app-soap-stache.git
   cd app-soap-stache
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Environment Setup**

   Create `.env.local` in the project root:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token

   # Stripe Configuration (test keys)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

   These values should correspond to your Sanity project and Stripe test account. In demo mode, the checkout flow is wired through Stripe but does not process real payments.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Then open `http://localhost:3000` in your browser.

### Sanity Studio (Optional, Separate Repo)

To manage content with Sanity Studio, clone and configure the companion repo:

```bash
git clone https://github.com/stepweaver/studio-soap-stache.git
cd studio-soap-stache
npm install
npm run dev
```

Update its `sanity.config` with your `projectId` and `dataset`, and open `http://localhost:3333` to access the Studio. This is optional if you only want to explore the frontend, but required if you want to author/edit content through the CMS.

## Content Management with Sanity

All product data, images, and key content are managed in **Sanity CMS**. This frontend uses a Sanity client and GROQ queries from `lib/sanity` to fetch content from your configured dataset.

The detailed schema definitions (such as `soapType` for products and `subscriberType` for newsletter subscribers) live in the **`studio-soap-stache`** repository. Editing or adding products in Sanity Studio automatically updates the storefront without changing React components.

Typical content modeling includes:

- **Basic Info**: Title, slug, description, blurb
- **Pricing**: Price with validation
- **Media**: Product photos with hotspot functionality
- **Status**: New product badges, availability toggle
- **Display**: Featured/Hero product designation
- **Details**: Grit level (0–5), scent profile
- **Metadata**: Launch date, ordering

Sanity Studio provides:

- Real-time collaboration and version history
- Custom validation for business rules
- Image management with hotspot cropping and optimization
- Previews of how content appears on the site

## E-commerce Features (Demo)

### Shopping Cart

- Cart state managed with React Context
- Add/remove items
- Quantity management
- Cart total calculation

### Checkout Process (Demo)

- Stripe Checkout integration following real-world patterns
- Simulated payment flow; **no real charges in demo mode**
- Order confirmation and success page
- Webhook handling structure in place (suitable for extension to live processing)

### Product Management

- Dynamic product pages with Next.js dynamic routes (`/products/[slug]`)
- Product filtering and search potential
- Inventory-style fields in the schema
- Featured product sections on the homepage

## Design System

### Components

- **Layout**: Navbar, Footer, Hero sections
- **Product**: ProductCard, ProductGrid, FeaturedProducts
- **E-commerce**: Cart and checkout components
- **Marketing**: ReviewsSection, MichiganPrideSection, EmailSubscribe
- **Demo/SEO**: Demo notice banner, structured data component

### Styling

- **Tailwind CSS 4**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI elements
- **Michigan Theme**: Local branding and colors

## API Routes

### Stripe Integration

- `/api/checkout` - Create Stripe Checkout sessions (demo mode)
- `/api/webhooks/stripe` - Handle Stripe webhooks (structure in place for real integration)

### Content Queries

- Sanity GROQ queries for product data
- Real-time content updates when connected to Sanity
- Image optimization and transformation using Sanity image URLs

## Deployment

### Development Scripts

| Command | Location        | Purpose                                      |
|---------|-----------------|----------------------------------------------|
| `npm run dev`  | app-soap-stache | Start Next.js dev server (port 3000)        |
| `npm run build`| app-soap-stache | Production build for deployment             |
| `npm start`    | app-soap-stache | Run production build locally                |

### Frontend (Next.js)

```bash
npm run build
npm start
```

Deploy this repository to a platform that supports Next.js App Router (for example, Vercel). Ensure all environment variables are configured in your deployment environment.

### Sanity Studio

Sanity Studio (in the separate `studio-soap-stache` repo) can be deployed to Sanity’s hosting or self-hosted, and is used by content editors to manage products and subscribers.

## Performance

- **Next.js App Router**: Optimized routing and rendering
- **Image Optimization**: Sanity image transformation
- **Code Splitting**: Automatic bundle optimization
- **CDN**: Content delivery network for static assets
- **Turbopack**: Fast development builds

## Security

- **Environment Variables**: Secure API key management
- **Stripe Security**: PCI-compliant payment processing when used with live keys
- **Sanity Security**: Role-based access control in Studio
- **Input Validation**: Client and server-side validation patterns

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: Refer to the official docs for each tool
- **Sanity**: [Sanity Documentation](https://www.sanity.io/docs)
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs)
- **Stripe**: [Stripe Documentation](https://stripe.com/docs)

## Acknowledgments

- Sanity for the excellent headless CMS
- Vercel for Next.js and deployment platform
- Stripe for powering the checkout flow
- Tailwind CSS for the utility-first styling approach
