import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import EmbeddedCheckoutForm from '../components/EmbeddedCheckoutForm';
import bookCover from '../assets/book-cover.jpg';

const LandingPageSarah = () => {
    return (
        <div className="landing-page sarah-theme">
            {/* Headline Section */}
            <section style={{
                backgroundColor: '#ffffff',
                padding: '3rem 0 1rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '3rem',
                        color: '#0a0a0a',
                        marginBottom: '1rem',
                        fontWeight: 'bold'
                    }}>
                        WHY DOES IT COST SO MUCH?
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#4a4a4a',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        You do everything right. You pay your premiums. Yet the bills keep piling up. Read the investigative story that explains exactly where your money is going.
                    </p>
                </div>
            </section>

            <HeroSection
                bookCover={bookCover}
                showCheckoutForm={true}
                CheckoutFormComponent={EmbeddedCheckoutForm}
            />
            <ProblemSection />
            <SolutionSection />

            {/* Footer Placeholder */}
            <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', marginTop: '2rem' }}>
                <p>Cambia Products LLC - &copy; 2025 All Rights Reserved | 1860 Logan Ave Salt Lake City, UT 84108</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Contact Us: support@delaydenydeposebook.com</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="/blog" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Read our Blog</a>
                    <a href="/privacy" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
                    <a href="/terms" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageSarah;
