import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import '../styles/hero.css';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // --- Grid Physics ---
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const safeX = useTransform(smoothX, [0, 100], [35, 65]);
  const safeY = useTransform(smoothY, [0, 100], [35, 65]);
  const gridTemplateColumns = useMotionTemplate`${safeX}% 1fr`;
  const gridTemplateRows = useMotionTemplate`${safeY}% 1fr`;

  // --- Custom Trailing Cursor ---
  const cursorDotX = useMotionValue(-100);
  const cursorDotY = useMotionValue(-100);
  const smoothCursorX = useSpring(cursorDotX, { damping: 20, stiffness: 300, mass: 0.2 });
  const smoothCursorY = useSpring(cursorDotY, { damping: 20, stiffness: 300, mass: 0.2 });

  // --- Magnetic Button Physics ---
  const btnRef = useRef(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const smoothBtnX = useSpring(btnX, { damping: 15, stiffness: 150, mass: 0.1 });
  const smoothBtnY = useSpring(btnY, { damping: 15, stiffness: 150, mass: 0.1 });

  // --- Staggered Text Animations ---
  const titleContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
  };
  const letterAnim = {
    hidden: { y: 150, opacity: 0, rotate: 10 },
    show: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      // Custom Cursor
      cursorDotX.set(e.clientX);
      cursorDotY.set(e.clientY);

      // Grid Physics
      if (!isMobile) {
        mouseX.set((e.clientX / window.innerWidth) * 100);
        mouseY.set((e.clientY / window.innerHeight) * 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Entrance Animation Snap
    mouseX.set(0); mouseY.set(0);
    setTimeout(() => { mouseX.set(50); mouseY.set(50); }, 300);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY, isMobile, cursorDotX, cursorDotY]);

  // Magnetic Button Handlers
  const handleMagneticMove = (e) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    btnX.set((e.clientX - centerX) * 0.3);
    btnY.set((e.clientY - centerY) * 0.3);
  };
  const handleMagneticLeave = () => { btnX.set(0); btnY.set(0); };

  return (
    <section className="hero-grid-wrapper">
      
      {/* Trailing Dot Cursor */}
      {!isMobile && (
        <motion.div 
          className="custom-cursor-dot"
          style={{ x: smoothCursorX, y: smoothCursorY }}
        />
      )}

      <motion.div 
        className="hero-dynamic-grid"
        style={isMobile ? {} : { gridTemplateColumns, gridTemplateRows }}
        initial={{ opacity: 0, scale: 0.9, clipPath: 'inset(20% round 30px)' }}
        animate={{ opacity: 1, scale: 1, clipPath: 'inset(0% round 0px)' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* TOP LEFT */}
        <div className="grid-panel panel-brand-left">
          <div className="panel-inner ambient-float">
            <motion.div 
              className="panel-eyebrow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              THE SIGNATURE
            </motion.div>
            
            <motion.h1 className="fluid-text" variants={titleContainer} initial="hidden" animate="show">
              {['m', 'a', 'd', 'e'].map((char, i) => (
                <motion.span key={i} variants={letterAnim} className="inline-block">{char}</motion.span>
              ))}
            </motion.h1>
          </div>
        </div>

        {/* TOP RIGHT - Morphing Geometric Blob */}
        <div className="grid-panel panel-accent">
          <div className="panel-inner center-all">
            <motion.div 
              className="morphing-container"
              style={{
                position: 'relative',
                width: 'clamp(140px, 50cqw, 280px)',
                aspectRatio: '1',
                x: useTransform(smoothX, [0, 100], [-30, 30]),
                y: useTransform(smoothY, [0, 100], [-30, 30]),
              }}
            >
              {/* Dynamic Blob Shape */}
              <motion.div
                className="blob-shape"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--color-brand-yellow)',
                  border: 'clamp(3px, 1.5cqw, 6px) solid var(--color-bg)',
                  boxShadow: '10px 10px 0px rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%", 
                    "70% 30% 30% 70% / 70% 70% 30% 30%", 
                    "30% 70% 70% 30% / 30% 30% 70% 70%"
                  ],
                  rotate: [0, 180, 360] 
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Static Pulsing Text Overlay */}
              <div 
                className="blob-overlay text-center"
                style={{
                   position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center',
                   pointerEvents: 'none', zIndex: 5
                }}
              >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 6cqw, 3.8rem)',
                      lineHeight: 0.85,
                      color: 'var(--color-bg)',
                      textTransform: 'uppercase',
                      textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                    }}
                  >
                    RAW<br/>TASTE
                  </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM LEFT (Strictly Scaled Text, No Wrapping) */}
        <div className="grid-panel panel-info">
          <div className="panel-inner align-bottom">
            <motion.div 
              className="info-lockup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="info-date no-wrap">EST. 2026 // CGC University, Mohali</p>
              <p className="info-desc">
                <span className="no-wrap">Uncompromising street food engineered</span><br/>
                <span className="no-wrap">for absolute flavor. Zero shortcuts.</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="grid-panel panel-brand-right">
          <div className="panel-inner right-align ambient-float-reverse">
            <motion.h1 className="fluid-text stroke-text" variants={titleContainer} initial="hidden" animate="show">
              {['to crave'].map((char, i) => (
                <motion.span key={i} variants={letterAnim} className="inline-block">{char}</motion.span>
              ))}
            </motion.h1>
            
            <div className="cta-wrapper">
              <motion.div 
                ref={btnRef}
                className="magnetic-hitbox"
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <motion.a 
                  href="/menu" 
                  className="btn-bento fluid-btn"
                  style={{ x: smoothBtnX, y: smoothBtnY }}
                >
                  GRAB A ROLL
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}