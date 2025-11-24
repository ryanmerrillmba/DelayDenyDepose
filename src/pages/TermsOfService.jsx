import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            <Helmet>
                <title>Terms of Service | Delay Deny Depose</title>
                <meta name="description" content="Terms of Service for Delay Deny Depose." />
            </Helmet>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Terms of Service</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Last Updated: November 24, 2025</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Delay Deny Depose ("we," "us" or "our"), concerning your access to and use of the delaydenydepose.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. Intellectual Property Rights</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    Unless otherwise indicated, the Site and the book "Delay Deny Depose" are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. User Representations</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>4. Purchases and Payment</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    We accept the following forms of payment: Visa, Mastercard, American Express, Discover. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>5. Return Policy</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    This is a special discounted offer from the retail price. All sales are final. No returns are accepted.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>6. Governing Law</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    These Terms shall be governed by and defined following the laws of the State of Utah. Cambia Products LLC and yourself irrevocably consent that the courts of Utah shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>7. Contact Us</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: support@delaydenydeposebook.com.
                </p>
            </section>
        </div>
    );
};

export default TermsOfService;
