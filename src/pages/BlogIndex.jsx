import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock Data for Blog Posts
const blogPosts = [
    {
        id: 1,
        title: "The $500 Tylenol: Anatomy of a Medical Bill",
        excerpt: "Why does a single pill cost more than a bottle? We break down the hidden codes and markups that hospitals use to inflate your bill.",
        date: "October 15, 2025",
        slug: "500-dollar-tylenol"
    },
    {
        id: 2,
        title: "3 Magic Words to Say to Insurance Adjusters",
        excerpt: "Stop getting the runaround. Use these specific phrases to trigger an internal review and get your claim approved faster.",
        date: "October 22, 2025",
        slug: "3-magic-words-insurance"
    },
    {
        id: 3,
        title: "The 'Out-of-Network' Trap Explained",
        excerpt: "You went to an in-network hospital, but the anesthesiologist wasn't. Here's how to fight the surprise bill that follows.",
        date: "November 1, 2025",
        slug: "out-of-network-trap"
    },
    {
        id: 4,
        title: "How to Appeal a Denial: A Step-by-Step Guide",
        excerpt: "Don't take 'no' for an answer. Learn the exact process to challenge a claim denial and force your insurer to pay what they owe.",
        date: "November 5, 2025",
        slug: "how-to-appeal-denial"
    },
    {
        id: 5,
        title: "What is a CPT Code? The Secret Language of Your Bill",
        excerpt: "Those 5-digit codes on your bill aren't random. They determine exactly how much you pay. Here is how to decode them.",
        date: "November 12, 2025",
        slug: "what-is-cpt-code"
    },
    {
        id: 6,
        title: "The 5-Minute Medical Bill Audit",
        excerpt: "You don't need to be an accountant to spot errors. Use this simple checklist to find the most common billing mistakes in under 5 minutes.",
        date: "November 19, 2025",
        slug: "5-minute-bill-audit"
    },
    {
        id: 7,
        title: "The 1974 Law That Took Away Your Rights",
        excerpt: "ERISA was meant to protect pensions. Instead, it gave insurance companies a shield against lawsuits. Here is the history they don't want you to know.",
        date: "November 26, 2025",
        slug: "1974-law-erisa"
    }
];

const BlogIndex = () => {
    return (
        <div className="blog-index" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{ backgroundColor: '#0a0a0a', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '3rem', marginBottom: '0.5rem' }}>The Patient's Playbook</h1>
                    <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Insights, strategies, and stories from the front lines of the healthcare war.</p>
                </div>
            </header>

            {/* Blog List */}
            <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '8px',
                            marginBottom: '2rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            borderLeft: '4px solid var(--color-action)'
                        }}
                    >
                        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {post.date}
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'Oswald, sans-serif' }}>
                            <Link to={`/blog/${post.slug}`} style={{ color: '#0a0a0a', textDecoration: 'none' }}>
                                {post.title}
                            </Link>
                        </h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444', marginBottom: '1.5rem' }}>
                            {post.excerpt}
                        </p>
                        <Link
                            to={`/blog/${post.slug}`}
                            style={{
                                color: 'var(--color-action)',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            Read Full Article &raquo;
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <footer style={{ backgroundColor: '#0a0a0a', color: 'white', padding: '3rem 0', textAlign: 'center', marginTop: 'auto' }}>
                <div className="container">
                    <p>&copy; 2025 Delay - Deny - Depose. All rights reserved.</p>
                    <div style={{ marginTop: '1rem' }}>
                        <Link to="/" style={{ color: '#ccc', margin: '0 1rem' }}>Home</Link>
                        <Link to="/checkout" style={{ color: '#ccc', margin: '0 1rem' }}>Get the Book</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BlogIndex;
