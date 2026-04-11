import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/legal.css';

export default function OurStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page-container">
      <div className="legal-noise"></div>
      <div className="story-decorative-text">ORIGINS</div>
      
      <div className="story-wrapper">
        <motion.div 
          className="legal-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>OUR STORY.</h1>
          <p>From a tiny kitchen concept to a premium brutalist cafe experience at CGC Landran.</p>
        </motion.div>

        <div className="story-grid">
          <motion.div 
            className="story-image-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>THE GENESIS</h2>
            <p>Roll Express didn't start in a boardroom; it started with a simple craving and an obsessive need to perfect the humble roll. We noticed that campus food lacked attitude, premium ingredients, and serious flavor. So, we set out to build an experience that matched the energy of the modern student — unapologetic, bold, and entirely satisfying.</p>
            <p>We began experimenting with spices, slow-cooking our meats, and hand-crafting paneer until everything snapped perfectly into place.</p>
          </motion.div>
        </div>

        <div className="story-grid reverse">
          <motion.div 
            className="story-image-box green"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="story-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>THE CRAFT</h2>
            <p>Every roll you eat is an architecture of flavor. From our 'Holy Aloo Sin' to the legendary 'King's Cut Mutton', we refuse to cut corners. The brutalist light theme of our aesthetic matches the raw, unfiltered authenticity in our recipes. What you see is what you get: massive portions, premium quality, and a commitment to unapologetic culinary violence on your tastebuds.</p>
          </motion.div>
        </div>
        
      </div>
    </main>
  );
}
