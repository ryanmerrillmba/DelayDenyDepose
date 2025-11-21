import React from 'react';
import { Link } from 'react-router-dom';

const SolutionSection = () => {
    return (
        <section style={{ padding: '6rem 0', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', textAlign: 'center' }}>
                    <h2 className="text-red" style={{ fontSize: '2.5rem' }}>See The System Clearly.</h2>
                    <p style={{ maxWidth: '700px', fontSize: '1.35rem', lineHeight: '1.8' }}>
                        <strong>"Delay - Deny - Depose"</strong> is an investigative deep-dive into the 80-year history of American healthcare.
                        <br /><br />
                        To fix a problem, you first have to understand it. This book peels back the layers of bureaucracy to reveal the "Beautiful Crime" hiding in plain sight—and why it continues to cost you more every year.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        width: '100%',
                        maxWidth: '1000px',
                        margin: '2rem 0'
                    }}>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>The History</h3>
                            <p style={{ fontSize: '1rem' }}>From the WWII wage freeze to the Affordable Care Act, trace the decisions that built the maze.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>The Profit</h3>
                            <p style={{ fontSize: '1rem' }}>Follow the money. See how insurance companies, hospitals, and pharma giants work together.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>The Future</h3>
                            <p style={{ fontSize: '1rem' }}>What happens next? And what can we actually do about it? The answers start with the truth.</p>
                        </div>
                    </div>

                    <Link to="/checkout" className="btn btn-primary" style={{ fontSize: '1.5rem', padding: '1.5rem 4rem' }}>Order the Book</Link>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Secure Checkout • Paperback Edition</p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
