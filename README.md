# Delay - Deny - Depose

## Overview
"Delay, Deny, Depose" is a book and movement exposing the tactics used by insurance companies to avoid paying claims. This repository contains the source code for the landing page and checkout funnel for the book.

## Features
- **Landing Page**: High-converting sales page with educational content.
- **Checkout Funnel**: Integrated Stripe checkout with a two-step order form and bump offer.
- **Blog**: Educational blog posts with SEO optimization (dynamic meta tags, structured data).
- **Responsive Design**: Optimized for mobile and desktop.

## Tech Stack
- **Frontend**: React, Vite
- **Styling**: CSS (Vanilla)
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Payments**: Stripe Elements

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ryanmerrillmba/DelayDenyDepose.git
   cd DelayDenyDepose
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Configuration
- **Stripe**: Update the Stripe Public Key in `src/components/OrderForm.jsx` before deploying to production.

## Deployment
This project is ready to be deployed to platforms like Cloudflare Pages, Vercel, or Netlify.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## License
All rights reserved.
