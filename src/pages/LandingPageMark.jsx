import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageMark = () => {
    return (
        <div className="landing-page mark-theme">
            <h1>The Beautiful Crime.</h1>
            <p>How policy, profit, and politics broke American healthcare.</p>
            <Link to="/checkout" className="cta-button">Read the Investigation</Link>
        </div>
    );
};

export default LandingPageMark;
