import React from 'react';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
    return (
        <div className="thank-you-page" style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ backgroundColor: 'white', padding: '4rem 2rem', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                >
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
                    <h1 style={{ color: 'var(--color-action)', marginBottom: '1rem' }}>Order Confirmed!</h1>
                    <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '2rem' }}>
                        Thank you for your purchase. Your order has been received and is being processed.
                    </p>

                    <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'left' }}>
                        <h3 style={{ marginBottom: '1rem' }}>What Happens Next?</h3>
                        <ol style={{ paddingLeft: '1.5rem', lineHeight: '2' }}>
                            <li><strong>Order Confirmation:</strong> Check your email for your receipt and order details.</li>
                            <li><strong>Shipping:</strong> Your book will ship within 3-5 business days via USPS.</li>
                            <li><strong>Digital Access:</strong> If you added the "Medical Bill Crusher" kit, you'll receive download instructions via email within 24 hours.</li>
                        </ol>
                    </div>

                    <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', marginTop: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Questions?</h3>
                        <p style={{ color: '#666' }}>
                            Email us at <a href="mailto:support@delaydenydepose.com" style={{ color: 'var(--color-action)' }}>support@delaydenydepose.com</a>
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <a href="/" className="btn btn-primary">Return to Home</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ThankYouPage;
