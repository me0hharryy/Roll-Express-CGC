import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import brandLogo from '../assets/logo.png';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Glassmorphism Floating Pill Transformations
  const navBg = useTransform(scrollY, [0, 100], ['rgba(253, 242, 248, 0.5)', 'rgba(253, 242, 248, 0.95)']);
  const navWidth = useTransform(scrollY, [0, 100], ['calc(100% - 40px)', 'calc(100% - 60px)']);
  const navMaxWidth = useTransform(scrollY, [0, 100], ['1600px', '1200px']);
  const navShadow = useTransform(scrollY, [0, 100], ['0px 0px 0px var(--color-border-thick)', '6px 6px 0px var(--color-border-thick)']);
  const navY = useTransform(scrollY, [0, 100], [20, 10]);

  // Adjust pill radius dynamically if menu is open
  const navRadius = menuOpen ? '24px' : '100px';

  return (
    <>
      <motion.header
        className="navbar-pill"
        style={{ 
          backgroundColor: navBg, 
          width: navWidth,
          maxWidth: navMaxWidth,
          boxShadow: navShadow,
          y: navY,
          x: '-50%', // Keeps it centered from left: 50%
          borderRadius: navRadius
        }}
      >
        <div className="navbar__container">
          
          <div className="navbar__left">
            <Link to="/about" className="navbar__link desktop-link">ABOUT</Link>
            <Link to="/contact" className="navbar__link desktop-link">CONTACT</Link>
            <Link to="/faq" className="navbar__link desktop-link">FAQ</Link>
          </div>

          <div className="navbar__center">
            <Link to="/" className="navbar__logo-wrap" onClick={() => setMenuOpen(false)}>
              <div className="navbar__logo-clean">
                <img src={brandLogo} alt="Roll Express Logo" className="navbar__logo-item" />
              </div>
            </Link>
          </div>

          <div className="navbar__right">
             <Link to="/menu" className="navbar__btn">MENU</Link>
          </div>

          {/* Mobile Hamburger Toggle — only visible on mobile */}
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

        </div>

        {/* Mobile Tray Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="navbar__mobile-tray"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="navbar__mobile-links">
                <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
                <Link to="/menu" onClick={() => setMenuOpen(false)} style={{ color: 'var(--color-brand-green)' }}>MENU</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
