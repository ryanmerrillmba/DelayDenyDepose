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

        // 2. Format the email content
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
            from: 'Delay Deny Depose <orders@delaydenydeposebook.com>', // You'll need to verify this domain in Resend
            to: 'support@delaydenydeposebook.com',
            subject: `New Order from ${customerDetails.fullName}`,
            html: emailHtml,
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
