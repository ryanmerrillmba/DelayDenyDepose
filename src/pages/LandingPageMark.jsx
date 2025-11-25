import React from 'react';
import HeroSection from '../components/HeroSection';
import EmbeddedCheckoutForm from '../components/EmbeddedCheckoutForm';
import bookCover from '../assets/book-cover.jpg';
import { motion } from 'framer-motion';

const LandingPageMark = () => {
    return (
        <div className="landing-page mark-theme" style={{ backgroundColor: '#0a0a0a', color: '#e5e5e5', minHeight: '100vh', fontFamily: 'Georgia, serif' }}>

            {/* Headline Section */}
            <section style={{
                backgroundColor: '#000000',
                padding: '4rem 0 2rem 0',
                textAlign: 'center',
                borderBottom: '1px solid #222'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            color: '#ffffff',
                            marginBottom: '1.5rem',
                            fontWeight: 'bold',
                            lineHeight: '1.1',
                            fontFamily: 'Oswald, sans-serif',
                            textTransform: 'uppercase'
                        }}
                    >
                        DELAY - DENY - DEPOSE
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                            color: '#a3a3a3',
                            fontWeight: 'normal',
                            lineHeight: '1.4',
                            maxWidth: '800px',
                            margin: '0 auto'
                        }}
                    >
                        How a secret 1973 White House conversation, a loophole called "ERISA", and a Private Equity gold rush turned your doctor into a clerk and your health into their wealth.
                    </motion.h2>
                </div>
            </section>

            <HeroSection
                bookCover={bookCover}
                showCheckoutForm={true}
                CheckoutFormComponent={EmbeddedCheckoutForm}
                darkMode={true}
                headline="The System Isn't Broken. It Was Built This Way."
                subheadline="Get the book that uncovers the 80-year history of policy accidents and corporate capture that broke American healthcare."
            />

            {/* The Investigation Content */}
            <section style={{ padding: '4rem 0', backgroundColor: '#111' }}>
                <div className="container" style={{ maxWidth: '700px', fontSize: '1.25rem', lineHeight: '1.8', color: '#d4d4d4' }}>

                    <p style={{ marginBottom: '2rem' }}>
                        <span style={{ color: '#D90429', fontWeight: 'bold', fontSize: '1.5rem', float: 'left', marginRight: '0.5rem', lineHeight: '1' }}>A</span>merican healthcare isn't just broken; it is a <strong>"Beautiful Crime"</strong>—a system deliberately designed through 80 years of policy accidents and corporate capture to prioritize extraction over healing. <em>Delay, Deny, Depose</em> is the comprehensive investigation into how we got here, arguing that our current crisis is not an aberration, but the predictable result of the system that was built.
                    </p>

                    <div style={{ margin: '4rem 0', padding: '2rem', borderLeft: '4px solid #D90429', backgroundColor: '#1a1a1a' }}>
                        <h3 style={{ color: 'white', fontFamily: 'Oswald, sans-serif', marginTop: 0, fontSize: '1.8rem' }}>What You Will Discover Inside:</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: '#D90429', fontWeight: 'bold' }}>01.</span>
                                <span><strong>The Genesis:</strong> How a WWII wage freeze accidentally tied your healthcare to your employment, creating a trap we still can't escape.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: '#D90429', fontWeight: 'bold' }}>02.</span>
                                <span><strong>The "Faustian Bargain":</strong> The 1965 mistake in Medicare that unleashed a "fee-for-service" incentive engine, guaranteeing runaway costs for decades.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: '#D90429', fontWeight: 'bold' }}>03.</span>
                                <span><strong>The ERISA Loophole:</strong> A 1974 pension law that created an accidental loophole, allowing corporations to legally deny state oversight and patient protections.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: '#D90429', fontWeight: 'bold' }}>04.</span>
                                <span><strong>Medical Dictators:</strong> How the HMO Act turned insurers into decision-makers who overrule doctors, creating the prior authorization nightmare.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
                                <span style={{ color: '#D90429', fontWeight: 'bold' }}>05.</span>
                                <span><strong>Wall Street's Healthcare Gold Rush:</strong> Wall Street's $1 trillion "gold rush" that treats community hospitals as assets to be plundered, leaving devastation in its wake.</span>
                            </li>
                        </ul>
                    </div>

                    <p style={{ marginBottom: '2rem' }}>
                        As the nation faces a demographic time bomb and political paralysis, the reckoning is here. This is the comprehensive explanation of the forces that have turned healing into a multi-trillion dollar heist.
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <a href="#checkout-form"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn btn-primary"
                            style={{ fontSize: '1.5rem', padding: '1.2rem 3rem', display: 'inline-block' }}>
                            Get The Book Now
                        </a>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
                            Free + Shipping (Just $9.95 S&H)
                        </p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #222', backgroundColor: '#000' }}>
                <div className="container">
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Cambia Products LLC - &copy; 2025 All Rights Reserved | 1860 Logan Ave Salt Lake City, UT 84108</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Contact Us: support@delaydenydeposebook.com</p>
                    <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="/blog" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Read our Blog</a>
                        <a href="/privacy" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
                        <a href="/terms" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageMark;
