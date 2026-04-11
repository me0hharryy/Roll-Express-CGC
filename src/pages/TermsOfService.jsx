import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/legal.css';

export default function TermsOfService() {
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
        <h1>TERMS OF SERVICE.</h1>
        <p>Last Updated: October 2026</p>
      </motion.div>

      <motion.div 
        className="legal-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the Roll Express website, mobile application, or engaging with our service inside CGC Campus, you agree to be bound unconditionally by these Terms of Service.</p>
        </section>

        <section className="legal-section">
          <h2>2. Services Provided</h2>
          <p>Roll Express provides a platform for ordering food, specifically high-quality artisanal rolls and associated beverages. Prices and availability of items are subject to change without notice in response to supply chain fluctuations.</p>
        </section>

        <section className="legal-section">
          <h2>3. Ordering & Fulfillment</h2>
          <p>All orders placed through our digital infrastructure are subject to confirmation. We reserve the right to cancel any order if there are logistical constraints. Estimated delivery or pickup times are provided as a convenience and are not legally binding guarantees.</p>
        </section>

        <section className="legal-section">
          <h2>4. User Conduct</h2>
          <p>You agree to use our services respectfully. Attempting to tamper with our digital infrastructure, exploit bugs, or submit fraudulent orders will result in an immediate permanent ban and potential reference to campus authorities.</p>
        </section>

        <section className="legal-section">
          <h2>5. Intellectual Property</h2>
          <p>The brutalist aesthetics, code, images, the "Roll Express" name, and the "Holy Aloo Sin" monikers are intellectual property of Roll Express & The Rusted Studio. Unauthorized replication or theft of our UI/UX and branding will be met with severe legal enforcement.</p>
        </section>

        <section className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>Roll Express shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, except as explicitly required by law.</p>
        </section>
      </motion.div>
    </main>
  );
}
