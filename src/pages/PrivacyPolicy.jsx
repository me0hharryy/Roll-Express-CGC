import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/legal.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page-container">
      <div className="legal-noise"></div>
      
      <motion.div 
        className="legal-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>PRIVACY POLICY.</h1>
        <p>Last Updated: October 2026</p>
      </motion.div>

      <motion.div 
        className="legal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>We do not collect unnecessary data. The brutal truth is we only care about bringing you the best rolls. However, to operate effectively, we collect the following:</p>
          <ul>
            <li>Personal Data: Name, email address, phone number during checkout.</li>
            <li>Usage Data: IP addresses, browser types, and usage patterns via analytics.</li>
            <li>Transaction Data: Payment details securely processed by Razorpay.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Your Data</h2>
          <p>Your data is exclusively used to fulfill your orders, provide customer support, and occasionally notify you of a new signature roll. We do NOT sell your data to third-party data brokers. Period.</p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies & Tracking</h2>
          <p>Our website utilizes minimal cookies for essential session management (e.g., keeping your cart intact while you browse) and completely anonymized analytics to ensure the UI remains as crisp as our fries.</p>
        </section>

        <section className="legal-section">
          <h2>4. Data Security</h2>
          <p>We utilize industry-standard encryption for all your communication with our servers. Payment information is never touched or stored by our internal systems; it's handled completely by our secure payment gateway providers.</p>
        </section>

        <section className="legal-section">
          <h2>5. Your Rights</h2>
          <p>You have the absolute right to request the deletion of your account and personal data from our systems. Reach out to our support team at legal@rollexpress.com for immediate action.</p>
        </section>
      </motion.div>
    </main>
  );
}
