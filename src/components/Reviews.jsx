import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/reviews.css';

const reviewsData = [
  {
    id: 1,
    bg: '#000',
    color: '#fff',
    stars: '★★★★★',
    text: "THIS IS NOT JUST A ROLL, IT'S AN EXPERIENCE. CHOMPO BRINGS THE HEAT EVERY SINGLE TIME. 10/10.",
    name: "- REANGER TARGARYEN",
    rotate: -12,
    x: -80,
    zIndex: 1,
  },
  {
    id: 2,
    bg: 'var(--color-brand-yellow)', // Pink
    color: '#000',
    stars: '★★★★★',
    text: "THE FRIES ARE CRISPY AND THE URGE IS PERFECTION I TELL YA. NEVER BEEN HAPPIER WITH A QUICK BITE.",
    name: "- ARYA STARK",
    rotate: -4,
    x: -30,
    zIndex: 2,
  },
  {
    id: 3,
    bg: '#212121',
    color: '#fff',
    stars: '★★★★★',
    text: "ORDERING FROM CHOMPO IS ALWAYS EASY AND THE DELIVERY IS FAST! THE TASTE IS UNBEATABLE AND GENUINE.",
    name: "- DAENERYS",
    rotate: 4,
    x: 30,
    zIndex: 3,
  },
  {
    id: 4,
    bg: 'var(--color-brand-green)',
    color: '#fff',
    stars: '★★★★★',
    text: "CHOMPO ROLLS HIT THE SPOT EVERY TIME — BOLD FLAVORS, FRESH INGREDIENTS. MY GO TO FOR A DELICIOUS MEAL!",
    name: "- JON SNOW",
    rotate: 12,
    x: 80,
    zIndex: 4,
  }
];

export default function Reviews() {
  const containerRef = useRef(null);

  return (
    <section className="reviews-section" ref={containerRef}>
      <div className="reviews-header">
        <h2>REAL TALK FROM<br/>REAL FOODIES</h2>
      </div>

      <div className="reviews-stack">
        {reviewsData.map((rev) => (
          <motion.div
            key={rev.id}
            className="review-card"
            style={{
              backgroundColor: rev.bg,
              color: rev.color,
              zIndex: rev.zIndex,
            }}
            initial={{ rotate: 0, x: 0 }}
            whileInView={{ rotate: rev.rotate, x: rev.x }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
            whileHover={{ 
              scale: 1.05, 
              zIndex: 10, 
              rotate: 0, 
              y: -20,
              boxShadow: "10px 10px 0px rgba(7,56,32,0.4)"
            }}
          >
            <div className="review-stars">{rev.stars}</div>
            <p className="review-text">"{rev.text}"</p>
            <span className="review-name">{rev.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
