import React from 'react';
import OrderForm from '../components/OrderForm';
import bookCover from '../assets/book-cover.jpg';

const CheckoutPage = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 900);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="checkout-page" style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ color: '#0a0a0a', marginBottom: '0.5rem' }}>Secure Checkout</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Complete your order below to get your copy of <strong>"Delay - Deny - Depose"</strong></p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Product Summary */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', order: isMobile ? 2 : 1 }}>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Order Summary</h3>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <img src={bookCover} alt="Book Cover" style={{ width: '100px', borderRadius: '4px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Delay - Deny - Depose</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Paperback Edition</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>FREE <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>(+ $9.95 S&H)</span></p>
                                </div>
                            </div>
                            <ul style={{ marginTop: '1.5rem', listStyle: 'none', padding: 0 }}>
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
                    <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', order: isMobile ? 1 : 2 }}>
                        <OrderForm />
                    </div>
                </div>

                {/* Footer */}
                <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                    <p>Cambia Products LLC - &copy; 2025 All Rights Reserved | 1860 Logan Ave Salt Lake City, UT 84108</p>
                    <p style={{ marginTop: '0.5rem' }}>Contact Us: support@delaydenydeposebook.com</p>
                    <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <a href="/privacy" style={{ color: '#666', textDecoration: 'none' }}>Privacy Policy</a>
                        <a href="/terms" style={{ color: '#666', textDecoration: 'none' }}>Terms of Service</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CheckoutPage;
