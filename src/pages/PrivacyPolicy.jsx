import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            <Helmet>
                <title>Privacy Policy | Delay Deny Depose</title>
                <meta name="description" content="Privacy Policy for Delay Deny Depose." />
            </Helmet>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Privacy Policy</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Last Updated: November 24, 2025</p>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Introduction</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    Welcome to Delay Deny Depose ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our book.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. Information We Collect</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li><strong>Personal Data:</strong> Name, shipping address, email address, and telephone number.</li>
                    <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    We use personal information collected via our website for a variety of business purposes described below:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li>To fulfill and manage your orders.</li>
                    <li>To send you administrative information.</li>
                    <li>To protect our Services.</li>
                    <li>To enforce our terms, conditions, and policies.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>4. Sharing Your Information</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    <li><strong>Vendors, Consultants and Other Third-Party Service Providers:</strong> We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work (e.g., Stripe for payments, shipping partners).</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>5. Contact Us</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                    If you have questions or comments about this policy, you may email us at support@delaydenydeposebook.com.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
