import { useRef } from 'react';
import { motion } from 'framer-motion';
import heroRoll from '../assets/hero-roll.png';
import '../styles/spintext.css';

export default function SpinText() {
  const containerRef = useRef(null);

  const textToSpin = "ROLL EXPRESS • CRAVE IT • ROLL EXPRESS • CRAVE IT • ";
  const characters = textToSpin.split("");
  const degPerChar = 360 / characters.length;

  return (
    <section className="spin-section" ref={containerRef}>
      <div className="spin-container">
        
        {/* Floating Pills */}
        <motion.div 
          className="spin-pill pill-1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="pill-dot"></span> Sanguiss
        </motion.div>
        
        <motion.div 
          className="spin-pill pill-2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="pill-dot"></span> Pizzuuuuuu
        </motion.div>

        <motion.div 
          className="spin-pill pill-3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="pill-dot"></span> cheazzy
        </motion.div>

        {/* CSS Transform Circular Text Layer 1 */}
        <motion.div 
           className="spin-circle-wrap spin-circle-1"
           animate={{ rotate: 360 }}
           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {characters.map((char, i) => (
            <span 
              key={`c1-${i}`} 
              className="spin-char"
              style={{ transform: `rotate(${i * degPerChar}deg) translateY(-210px)` }}
            >
              {char}
            </span>
          ))}
        </motion.div>

        {/* Layer 2 (Inner Ring) */}
        <motion.div 
           className="spin-circle-wrap spin-circle-2"
           animate={{ rotate: -360 }}
           transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {characters.map((char, i) => (
            <span 
              key={`c2-${i}`} 
              className="spin-char"
              style={{ transform: `rotate(${i * degPerChar}deg) translateY(-160px)` }}
            >
              {char}
            </span>
          ))}
        </motion.div>

        {/* Layer 3 (Inner Most Ring) */}
        <motion.div 
           className="spin-circle-wrap spin-circle-3"
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {characters.map((char, i) => (
            <span 
              key={`c3-${i}`} 
              className="spin-char"
              style={{ transform: `rotate(${i * degPerChar}deg) translateY(-110px)` }}
            >
              {char}
            </span>
          ))}
        </motion.div>

        {/* Center Graphic */}
        <motion.div 
          className="spin-center-graphic"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={heroRoll} alt="Roll graphic" />
        </motion.div>

      </div>
    </section>
  );
}
