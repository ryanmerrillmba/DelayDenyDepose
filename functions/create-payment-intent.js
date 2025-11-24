import Stripe from 'stripe';

export async function onRequestPost(context) {
    try {
        const stripe = new Stripe(context.env.STRIPE_SECRET_KEY);

        // Parse the request body
        const { amount, currency = 'usd' } = await context.request.json();

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return new Response(
            JSON.stringify({
                clientSecret: paymentIntent.client_secret,
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ error: err.message }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
