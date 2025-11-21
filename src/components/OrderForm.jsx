import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import BumpOffer from './BumpOffer';

// Initialize Stripe (Replace with your actual public key)
const stripePromise = loadStripe('pk_test_51Pxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });
    const [bumpAdded, setBumpAdded] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (formData.email && formData.fullName && formData.address) {
            setStep(2);
        } else {
            alert('Please fill in all shipping details.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        if (!stripe || !elements) {
            return;
        }

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            window.location.href = '/thank-you';
        }, 2000);
    };

    const totalAmount = bumpAdded ? 9.95 + 17 : 9.95; // Shipping $9.95 + Bump $17

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>

            {/* Step 1: Shipping Info */}
            <div style={{ display: step === 1 ? 'block' : 'none' }}>
                <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Step 1: Shipping Information</h3>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@example.com"
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Sarah Jones"
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Shipping Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="123 Main St"
                        style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        style={{ flex: 2, padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        style={{ flex: 1, padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="Zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        style={{ flex: 1, padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        required
                    />
                </div>

                <button
                    onClick={handleNextStep}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '1.2rem' }}
                >
                    Next Step: Payment &raquo;
                </button>
            </div>

            {/* Step 2: Payment */}
            <div style={{ display: step === 2 ? 'block' : 'none' }}>
                <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Step 2: Payment Details</h3>

                <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '2rem', backgroundColor: '#f9f9f9' }}>
                    <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
                </div>

                <BumpOffer onToggle={setBumpAdded} />

                <div style={{ borderTop: '2px solid #eee', paddingTop: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                        <span>Delay - Deny - Depose (Paperback):</span>
                        <span>FREE</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                        <span>Shipping & Handling:</span>
                        <span>$9.95</span>
                    </div>
                    {bumpAdded && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--color-action)' }}>
                            <span>Medical Bill Crusher Kit:</span>
                            <span>$17.00</span>
                        </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className="btn btn-primary"
                    style={{ width: '100%', fontSize: '1.5rem', marginTop: '2rem' }}
                >
                    {isProcessing ? 'Processing...' : `Complete Order - $${totalAmount.toFixed(2)}`}
                </button>

                <button
                    onClick={() => setStep(1)}
                    style={{ background: 'none', border: 'none', color: '#666', textDecoration: 'underline', marginTop: '1rem', cursor: 'pointer', width: '100%' }}
                >
                    &laquo; Back to Shipping
                </button>
            </div>

        </form>
    );
};

const OrderForm = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default OrderForm;
