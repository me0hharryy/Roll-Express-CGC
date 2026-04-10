import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import brandLogo from '../assets/logo.png';
import '../styles/navbar.css';

export default function Navbar() {
  const { scrollY } = useScroll();

  // Glassmorphism Floating Pill Transformations
  const navBg = useTransform(scrollY, [0, 100], ['rgba(253, 242, 248, 0.5)', 'rgba(253, 242, 248, 0.95)']);
  const navWidth = useTransform(scrollY, [0, 100], ['calc(100% - 40px)', 'calc(100% - 60px)']);
  const navMaxWidth = useTransform(scrollY, [0, 100], ['1600px', '1200px']);
  const navShadow = useTransform(scrollY, [0, 100], ['0px 0px 0px var(--color-border-thick)', '6px 6px 0px var(--color-border-thick)']);
  const navY = useTransform(scrollY, [0, 100], [20, 10]); 

  return (
    <motion.header
      className="navbar-pill"
      style={{ 
        backgroundColor: navBg, 
        width: navWidth,
        maxWidth: navMaxWidth,
        boxShadow: navShadow,
        y: navY,
        x: '-50%' // Keeps it centered from left: 50%
      }}
    >
      <div className="navbar__container">
        
        <div className="navbar__left" style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/about" className="navbar__link">ABOUT</Link>
          <Link to="/contact" className="navbar__link">CONTACT</Link>
          <Link to="/faq" className="navbar__link">FAQ</Link>
        </div>

        <div className="navbar__center">
          <Link to="/" className="navbar__logo-wrap">
            <div className="navbar__logo-clean">
              <img src={brandLogo} alt="Roll Express Logo" className="navbar__logo-item" />
            </div>
          </Link>
        </div>

        <div className="navbar__right">
           <Link to="/menu" className="navbar__btn">MENU</Link>
        </div>

      </div>
    </motion.header>
  );
}
