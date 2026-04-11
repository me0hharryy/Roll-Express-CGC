import AboutSection from '../components/About';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container" style={{ paddingTop: '150px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(4rem, 10vw, 8rem)', 
            color: 'var(--color-text-dark)', 
            marginBottom: '1rem',
            lineHeight: 0.8
          }}>
            OUR <span style={{ color: 'var(--color-brand-yellow)' }}>STORY.</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.25rem',
            fontWeight: 500,
            color: 'var(--color-text-dark)',
            maxWidth: '500px',
            marginBottom: '1rem'
          }}>
            From a tiny kitchen concept to a premium brutalist cafe experience at CGC Landran. We don't take flavor lightly.
          </p>
        </motion.div>
      </div>
      <AboutSection />
    </main>
  );
}
