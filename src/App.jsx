import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPageSarah from './pages/LandingPageSarah';
import LandingPageMark from './pages/LandingPageMark';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        {/* Two Doors Strategy */}
        <Route path="/" element={<Navigate to="/fight-back" replace />} />
        <Route path="/fight-back" element={<LandingPageSarah />} />
        <Route path="/investigation" element={<LandingPageMark />} />

        {/* Funnel Steps */}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
