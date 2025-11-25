import { Resend } from 'resend';
import Stripe from 'stripe';

export async function onRequestPost(context) {
    try {
        const stripe = new Stripe(context.env.STRIPE_SECRET_KEY);
        const resend = new Resend(context.env.RESEND_API_KEY);

        const { paymentIntentId, customerDetails } = await context.request.json();

        // 1. Verify the payment actually succeeded
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status !== 'succeeded') {
            throw new Error('Payment not confirmed');
        }

        // 2. Format the email content for YOU (Admin)
        const emailHtml = `
      <h1>New Order Received!</h1>
      <p><strong>Customer:</strong> ${customerDetails.fullName}</p>
      <p><strong>Email:</strong> ${customerDetails.email}</p>
      <p><strong>Amount:</strong> $${(paymentIntent.amount / 100).toFixed(2)}</p>
      
      <h2>Shipping Address:</h2>
      <p>
        ${customerDetails.address}<br>
        ${customerDetails.city}, ${customerDetails.state} ${customerDetails.zip}
      </p>

      <h2>Order Details:</h2>
      <ul>
        <li>Delay Deny Depose (Paperback)</li>
        ${paymentIntent.amount > 995 ? '<li>+ Medical Bill Crusher Kit (Bump Offer)</li>' : ''}
      </ul>
    `;

        // 3. Send email to YOU (the owner)
        await resend.emails.send({
            from: 'Delay Deny Depose <orders@delaydenydeposebook.com>',
            to: 'support@delaydenydeposebook.com',
            subject: `New Order from ${customerDetails.fullName}`,
            html: emailHtml,
        });

        // 4. Send confirmation email to CUSTOMER
        const isBumpIncluded = paymentIntent.amount > 995;
        const customerEmailHtml = `
      <h1>Thank you for your order!</h1>
      <p>Hi ${customerDetails.fullName.split(' ')[0]},</p>
      <p>We have received your order for <strong>Delay - Deny - Depose</strong>.</p>
      <p>Your book will be shipped to:</p>
      <p>
        ${customerDetails.address}<br>
        ${customerDetails.city}, ${customerDetails.state} ${customerDetails.zip}
      </p>
      <p>You will receive another email when your order ships.</p>

      ${isBumpIncluded ? `
        <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #bbf7d0;">
          <h2 style="color: #166534; margin-top: 0;">BONUS: Your Medical Bill Crusher Kit</h2>
          <p>As promised, here is your digital download. Click the link below to access your cheat sheets and scripts:</p>
          <p>
            <a href="https://delaydenydeposebook.com/assets/medical-bill-crusher.pdf" style="background-color: #166534; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Now</a>
          </p>
        </div>
      ` : ''}

      <p>If you have any questions, simply reply to this email.</p>
      <p>Best,<br>The Delay Deny Depose Team</p>
    `;

        await resend.emails.send({
            from: 'Delay Deny Depose <orders@delaydenydeposebook.com>',
            to: customerDetails.email,
            subject: 'Order Confirmation: Delay Deny Depose',
            html: customerEmailHtml,
        });

        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (err) {
        return new Response(
            JSON.stringify({ error: err.message }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
