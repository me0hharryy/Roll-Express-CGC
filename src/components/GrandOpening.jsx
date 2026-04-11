import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/cta.css';

export default function GrandOpening() {
  const sectionRef = useRef(null);
  
  // Clean scroll parallax for the floating center card
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="promo-modern" ref={sectionRef} id="grand-opening">
      
      {/* Background Giant Marquee */}
      <div className="promo-modern__bg-text">
        <div className="promo-modern__marquee">
           {[...Array(6)].map((_, i) => (
              <span key={i}>GRAND OPENING PROMO &nbsp;✦&nbsp; </span>
           ))}
        </div>
        <div className="promo-modern__marquee reverse">
           {[...Array(6)].map((_, i) => (
              <span key={i}>GRAND OPENING PROMO &nbsp;✦&nbsp; </span>
           ))}
        </div>
      </div>

      {/* Floating Center Offer Box */}
      <div className="container promo-modern__main">
        <motion.div 
           className="promo-modern__card"
           style={{ y: yParallax }}
        >
           <div className="promo-modern__card-inner">
             <div className="promo-modern__tag">LTD TIME OFFER</div>
             
             <h2 className="promo-modern__title">50% OFF</h2>
             <p className="promo-modern__desc">For the first 100 students at CGC University, Mohali. <br/>Drops April 15.</p>
             
             <button className="promo-modern__btn">CLAIM NOW</button>
           </div>
        </motion.div>
      </div>
      
    </section>
  );
}
