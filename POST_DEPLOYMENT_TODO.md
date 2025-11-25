# Post-Deployment Checklist

## 1. Cloudflare Pages Configuration
- [ ] **Connect Repository**: Link your GitHub repo (`ryanmerrillmba/DelayDenyDepose`) to Cloudflare Pages.
- [ ] **Build Settings**:
    - Framework Preset: `Vite`
    - Build Command: `npm run build`
    - Output Directory: `dist`
- [ ] **Environment Variables** (Settings -> Environment Variables):
    - `STRIPE_SECRET_KEY`: Add your Stripe Secret Key (starts with `sk_live_...`).
    - `RESEND_API_KEY`: Add your Resend API Key (get from resend.com).

## 2. Stripe Setup
- [ ] **Activate Account**: Ensure your Stripe account is fully activated and verified.
- [ ] **Get Live Keys**: Copy your `pk_live_...` and `sk_live_...` keys.
- [ ] **Update Frontend Key**: In `src/components/OrderForm.jsx`, replace the `pk_test_...` key with your `pk_live_...` key and redeploy. (Or better yet, use an environment variable `VITE_STRIPE_PUBLIC_KEY`).

## 3. Resend (Email) Setup
- [ ] **Create Account**: Sign up at [resend.com](https://resend.com).
- [ ] **Verify Domain**: Add DNS records to verify `delaydenydeposebook.com` so you can send emails from it.
- [ ] **Get API Key**: Generate an API Key and add it to Cloudflare.

## 4. Final Testing (Live)
- [ ] **Real Purchase**: Buy a copy of the book yourself using a real credit card.
    - Verify the charge appears in Stripe.
    - Verify you receive the "New Order" email from Resend.
    - Verify the "Thank You" page loads correctly.
- [ ] **Mobile Check**: Open the live site on your phone and verify the layout looks good.

## 5. Digital Product Setup
- [ ] **Create PDF**: Create the "Medical Bill Crusher Kit" PDF.
- [ ] **Upload PDF**: Upload it to your Cloudflare Pages project (put it in `public/assets/medical-bill-crusher.pdf`) OR host it on Google Drive/Dropbox and update the link in `functions/notify-order.js`.

## 6. Analytics & Tracking (Optional but Recommended)
- [ ] **Google Analytics**: Create a GA4 property and add the tracking ID to `index.html` or via a tag manager.
- [ ] **Meta Pixel**: Add your Facebook Pixel ID if you plan to run ads.
