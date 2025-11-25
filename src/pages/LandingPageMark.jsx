import React from 'react';
import HeroSection from '../components/HeroSection';
import EmbeddedCheckoutForm from '../components/EmbeddedCheckoutForm';
import bookCover from '../assets/book-cover.jpg';
import { motion } from 'framer-motion';

const LandingPageMark = () => {
    return (
        <div className="landing-page mark-theme" style={{ backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>

            {/* Headline Section (Newsjacking Hook) */}
            <section style={{
                backgroundColor: '#000000',
                padding: '3rem 0 1rem 0',
                textAlign: 'center',
                borderBottom: '1px solid #333'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '3rem',
                            color: '#ffffff',
                            marginBottom: '1rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        THE BEAUTIFUL CRIME.
                    </motion.h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#cccccc',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic'
                    }}>
                        "They didn't just break the system. They designed it this way."
                    </p>
                </div>
            </section>

            <HeroSection
                bookCover={bookCover}
                showCheckoutForm={true}
                CheckoutFormComponent={EmbeddedCheckoutForm}
                darkMode={true}
                headline="The Untold History of Healthcare Corruption"
                subheadline="From the 1973 HMO Act to the Private Equity takeover. Discover why the CEO was a target, and why the system is rigged against you."
            />

            {/* The Investigation Content */}
            <section style={{ padding: '6rem 0', backgroundColor: '#111' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'white', textAlign: 'center' }}>It Wasn't An Accident.</h2>

                    <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            When the CEO of UnitedHealthcare was assassinated, the world was shocked. But for those of us paying attention, the anger wasn't a surprise.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For 50 years, a "Beautiful Crime" has been taking place in plain sight. It started with a secret tape recording in the Nixon White House and the <strong>HMO Act of 1973</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            They promised "managed care." What they delivered was <strong>managed profit</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In <em>Delay, Deny, Depose</em>, we peel back the layers of corruption. We show you the internal documents, the lobbying records, and the Private Equity playbooks that turned your health into their wealth.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '3rem 0' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'red', fontSize: '1.5rem' }}>✖</span> The "Prior Authorization" trap designed to kill claims.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'red', fontSize: '1.5rem' }}>✖</span> How "The Algorithm" denies 90% of claims in 1.2 seconds.
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'red', fontSize: '1.5rem' }}>✖</span> The "Two Doors" of American healthcare: One for the rich, one for the rest.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #333', marginTop: '0', backgroundColor: '#000' }}>
                <p style={{ color: '#666' }}>Cambia Products LLC - &copy; 2025 All Rights Reserved | 1860 Logan Ave Salt Lake City, UT 84108</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Contact Us: support@delaydenydeposebook.com</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="/blog" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Read our Blog</a>
                    <a href="/privacy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
                    <a href="/terms" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageMark;
