import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = ({ headline, subheadline, ctaText, ctaLink, bookCover, showCheckoutForm, CheckoutFormComponent }) => {
    return (
        <section className="hero-section" style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#ffffff', /* White Background */
            padding: '4rem 0'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>

                {/* Left: Book Cover */}
                {bookCover && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src={bookCover}
                            alt="Delay - Deny - Depose Book Cover"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '600px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.2)', /* Softer shadow for light bg */
                                borderRadius: '4px',
                                transform: 'perspective(1000px) rotateY(-15deg)'
                            }}
                        />
                    </motion.div>
                )}

                {/* Right: Checkout Form OR Text */}
                <div style={{ flex: '1 1 500px' }}>
                    {showCheckoutForm && CheckoutFormComponent ? (
                        <CheckoutFormComponent />
                    ) : (
                        <>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ marginBottom: '1.5rem', color: '#0a0a0a' /* Black Text */ }}
                            >
                                {headline}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#4a4a4a' /* Dark Grey Text */ }}
                            >
                                {subheadline}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link to={ctaLink} className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
                                    {ctaText}
                                </Link>
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
