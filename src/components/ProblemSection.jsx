import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
    const problems = [
        {
            title: "The $500 Tylenol",
            icon: "💊",
            text: "Why does a pill that costs pennies at the drugstore cost a fortune at the hospital? It's not an accident—it's a business model."
        },
        {
            title: "The Middlemen",
            icon: "📉",
            text: "Your premiums aren't just paying for doctors. They're paying for layers of administrators, brokers, and lobbyists who profit from the complexity."
        },
        {
            title: "The Policy Trap",
            icon: "🏛️",
            text: "Laws like the HMO Act of 1973 weren't written to protect patients. They were written to protect profits. Understand the history, and the chaos makes sense."
        }
    ];

    return (
        <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '4rem' }}>The Math Doesn't Add Up.</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2.5rem',
                                backgroundColor: 'var(--color-bg-primary)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{prob.icon}</div>
                            <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '1rem' }}>{prob.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>{prob.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
