import { useRef } from 'react';
import { motion } from 'framer-motion';
import rollMascot from '../assets/9318006.jpg';
import '../styles/spinsection.css';

export default function SpinSection() {
  const sectionRef = useRef(null);

  // Text for each ring — repeat enough to fill the circumference fully
  const outerText = "ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ";
  const middleText = "ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ";
  const innerText = "ROLLEXPRESS • ROLLEXPRESS • ROLLEXPRESS • ";

  return (
    <section className="spin-sect" ref={sectionRef}>
      <div className="spin-sect__container">

        {/* Pills */}
        <motion.div className="ref-pill pill-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
        >
          <span className="ref-dot" /> Unwrap meeeeh ; )
        </motion.div>

        <motion.div className="ref-pill pill-right-top"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.4, delay: 0.3 }}
        >
          <span className="ref-dot" /> Just Eat It
        </motion.div>

        <motion.div className="ref-pill pill-right-bottom"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.4, delay: 0.5 }}
        >
          <span className="ref-dot" /> Feastmode
        </motion.div>

        {/* SVG Concentric Rings — Pure CSS animation, no framer transforms on <g> */}
        <div className="spin-rings">
          <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="ring-outer" fill="none"
                d="M 300,300 m -260,0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0" />
              <path id="ring-middle" fill="none"
                d="M 300,300 m -195,0 a 195,195 0 1,1 390,0 a 195,195 0 1,1 -390,0" />
              <path id="ring-inner" fill="none"
                d="M 300,300 m -130,0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0" />
            </defs>

            {/* Outer ring — clockwise */}
            <g className="ring ring--outer">
              <text>
                <textPath href="#ring-outer" startOffset="0%">{outerText}</textPath>
              </text>
            </g>

            {/* Middle ring — counter-clockwise */}
            <g className="ring ring--middle">
              <text>
                <textPath href="#ring-middle" startOffset="0%">{middleText}</textPath>
              </text>
            </g>

            {/* Inner ring — clockwise */}
            <g className="ring ring--inner">
              <text>
                <textPath href="#ring-inner" startOffset="0%">{innerText}</textPath>
              </text>
            </g>
          </svg>
        </div>

        {/* Center Mascot */}
        <div className="spin-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
            style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src={rollMascot} alt="Roll Express Mascot" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}