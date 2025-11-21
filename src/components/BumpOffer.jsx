import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BumpOffer = ({ onToggle }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        onToggle(newState);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                border: '2px dashed var(--color-action)',
                backgroundColor: '#fff5f5',
                padding: '1.5rem',
                borderRadius: 'var(--radius-sm)',
                marginTop: '2rem',
                marginBottom: '2rem'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <input
                    type="checkbox"
                    id="bump-offer"
                    checked={isChecked}
                    onChange={handleToggle}
                    style={{ marginTop: '0.4rem', transform: 'scale(1.5)', accentColor: 'var(--color-action)' }}
                />
                <div>
                    <label htmlFor="bump-offer" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--color-action)', cursor: 'pointer' }}>
                        Yes! Add the "Medical Bill Crusher" Kit for just $17
                    </label>
                    <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', color: '#333' }}>
                        Don't just read about the problem—fight back. Get the exact scripts and legal codes to cite when negotiating a bill, formatted as a beautiful, easy-reference poster.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default BumpOffer;
