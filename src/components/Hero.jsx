import { motion } from 'framer-motion';
import heroRoll from '../assets/hero-roll.png';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        
        <div className="hero__content">
          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FRESH.<br/>
            FAST.<br/>
            <span className="hero__title-highlight">FLAVORFUL.</span>
          </motion.h1>

          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The premium roll experience has finally arrived at CGC Landran. Unmatched taste, unapologetic vibes.
          </motion.p>
          
          <motion.div 
            className="hero__cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/menu" className="hero__btn hero__btn--primary">VIEW MENU</a>
            <a href="#about" className="hero__btn hero__btn--secondary">OUR STORY</a>
          </motion.div>
        </div>

        <div className="hero__visual">
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={heroRoll} alt="Roll Express Signature" className="hero__image" />
          </motion.div>
        </div>

      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-inner">
          <span className="hero__marquee-text">OPEN NOW AT CGC LANDRAN</span>
          <span className="hero__marquee-text">100% PREMIUM</span>
          <span className="hero__marquee-text">OPEN NOW AT CGC LANDRAN</span>
          <span className="hero__marquee-text">100% PREMIUM</span>
        </div>
      </div>
    </section>
  );
}
