import React from 'react';
import OrderForm from '../components/OrderForm';
import bookCover from '../assets/book-cover.jpg';

const CheckoutPage = () => {
    return (
        <div className="checkout-page" style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ color: '#0a0a0a', marginBottom: '0.5rem' }}>Secure Checkout</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Complete your order below to get your copy of <strong>"Delay - Deny - Depose"</strong></p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                    {/* Left Column: Product Summary (Desktop Only) */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Order Summary</h3>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <img src={bookCover} alt="Book Cover" style={{ width: '100px', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Delay - Deny - Depose</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Paperback Edition</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$20.00</p>
                                </div>
                            </div>
                            <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-action)' }}>✓</span> 30-Day Money Back Guarantee
                                </li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-action)' }}>✓</span> Secure SSL Encryption
                                </li>
                                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-action)' }}>✓</span> Fast Shipping
                                </li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3>What Readers Are Saying</h3>
                            <blockquote style={{ fontStyle: 'italic', color: '#555', marginTop: '1rem', borderLeft: '4px solid var(--color-action)', paddingLeft: '1rem' }}>
                                "This book changed how I view the entire system. I finally understand why my bills are so high."
                                <br />
                                <strong style={{ display: 'block', marginTop: '0.5rem', color: '#333', fontStyle: 'normal' }}>- Sarah J., Charlotte NC</strong>
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Column: Order Form */}
                    <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
                        <OrderForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
