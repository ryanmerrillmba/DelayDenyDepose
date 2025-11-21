import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmbeddedCheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to checkout page with pre-filled data
        window.location.href = '/checkout';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                backgroundColor: 'white',
                borderRadius: '6px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                transform: 'scale(0.75)',
                transformOrigin: 'top left',
                marginLeft: '3rem'
            }}
        >
            {/* Header */}
            <div style={{
                backgroundColor: 'var(--color-action)',
                color: 'white',
                padding: '1.1rem',
                textAlign: 'center'
            }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
                    GET YOUR COPY OF <span style={{ textDecoration: 'underline' }}>DELAY - DENY - DEPOSE</span>
                </h3>
                <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.85rem' }}>Shipped In Less Than 7 Days!</p>
            </div>

            {/* Step Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1.1rem', backgroundColor: '#f9f9f9' }}>
                <div style={{
                    backgroundColor: 'var(--color-action)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    minWidth: '150px'
                }}>
                    <span style={{
                        backgroundColor: 'white',
                        color: 'var(--color-action)',
                        borderRadius: '50%',
                        width: '22px',
                        height: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                    }}>1</span>
                    <div>
                        <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>Shipping</div>
                        <div style={{ fontSize: '0.65rem' }}>Where to Ship</div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '1.5rem' }}>
                    <span style={{
                        backgroundColor: '#333',
                        color: 'white',
                        borderRadius: '50%',
                        width: '22px',
                        height: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.85rem'
                    }}>2</span>
                    <div>
                        <div style={{ fontWeight: 'bold', color: '#333', fontSize: '0.85rem' }}>Your Info</div>
                        <div style={{ fontSize: '0.65rem', color: '#666' }}>Billing Information</div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
                {/* Name Fields */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        style={{
                            padding: '0.65rem',
                            border: '1px solid #ddd',
                            borderRadius: '3px',
                            fontSize: '0.85rem'
                        }}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        style={{
                            padding: '0.65rem',
                            border: '1px solid #ddd',
                            borderRadius: '3px',
                            fontSize: '0.85rem'
                        }}
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                        width: '100%',
                        padding: '0.65rem',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                    }}
                />

                {/* Phone */}
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                        width: '100%',
                        padding: '0.65rem',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        fontSize: '0.85rem',
                        marginBottom: '1.1rem'
                    }}
                />

                {/* Shipping Information Header */}
                <h4 style={{
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    SHIPPING INFORMATION
                </h4>

                {/* Address */}
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    style={{
                        width: '100%',
                        padding: '0.65rem',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                    }}
                />

                {/* Apartment */}
                <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, building, floor (optional)"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    style={{
                        width: '100%',
                        padding: '0.65rem',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem'
                    }}
                />

                {/* State */}
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    style={{
                        width: '100%',
                        padding: '0.65rem',
                        border: '1px solid #ddd',
                        borderRadius: '3px',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem',
                        backgroundColor: 'white'
                    }}
                >
                    <option value="">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    {/* Add remaining states as needed */}
                </select>

                {/* City and Zip */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.1rem' }}>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        style={{
                            padding: '0.65rem',
                            border: '1px solid #ddd',
                            borderRadius: '3px',
                            fontSize: '0.85rem'
                        }}
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="Postal Code"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        style={{
                            padding: '0.65rem',
                            border: '1px solid #ddd',
                            borderRadius: '3px',
                            fontSize: '0.85rem'
                        }}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        backgroundColor: 'var(--color-action)',
                        color: 'white',
                        padding: '0.9rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        textTransform: 'uppercase'
                    }}
                >
                    CLAIM SPECIAL OFFER NOW!
                    <div style={{ fontSize: '0.7rem', fontWeight: 'normal', marginTop: '0.2rem' }}>
                        YES! I WANT THIS BOOK NOW!
                    </div>
                </button>

                {/* Disclaimer */}
                <p style={{
                    fontSize: '0.6rem',
                    color: '#666',
                    textAlign: 'center',
                    marginTop: '0.75rem',
                    lineHeight: '1.4'
                }}>
                    * Delay - Deny - Depose retails for $15.99, but we're offering it for Free!
                    We just ask that you pay shipping / handling to receive it (just $9.95 US).
                    Your information is secure and will not be shared.
                </p>
            </form>
        </motion.div>
    );
};

export default EmbeddedCheckoutForm;
