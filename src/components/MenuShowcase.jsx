import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { featuredItems } from '../data/menuData'; 
import '../styles/menu.css';

export default function MenuShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax the marquees in opposite directions
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  // Duplicate items heavily to make a true infinite-feeling string of cards
  const row1 = [...featuredItems, ...featuredItems, ...featuredItems, ...featuredItems];
  const row2 = [...featuredItems, ...featuredItems, ...featuredItems, ...featuredItems].reverse();

  return (
    <section className="showcase-marquee" ref={containerRef}>
      <div className="marquee-header">
        <h2 className="marquee-title">SIGNATURES</h2>
        <Link to="/menu" className="marquee-btn">EXPLORE <span>+40 ROLLS</span></Link>
      </div>

      <div className="marquee-track">
        <motion.div className="marquee-row" style={{ x: x1 }}>
          {row1.map((item, i) => (
            <div className="marquee-card" key={i}>
              <h3>{item.name}</h3>
              <span>₹{item.sin || item.price}</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div className="marquee-row" style={{ x: x2 }}>
          {row2.map((item, i) => (
            <div className="marquee-card" key={i}>
              <h3>{item.name}</h3>
              <span>₹{item.sin || item.price}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
