import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        
        <div className="footer-pill">
          
          <div className="footer__content">
            <div className="footer__brand">
               <h2>ROLL EXPRESS</h2>
               <p>The ultimate flavor experience for CGC Campus.</p>
            </div>

            <div className="footer__links">
              <div className="footer__col">
                <h4>Navigation</h4>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/story">Our Story</Link>
              </div>

              <div className="footer__col">
                <h4>Support</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
              </div>
            </div>

            <div className="footer__socials">
              <span className="social-label">STAY CONNECTED</span>
              <div className="social-circles">
                <a href="#" className="social-circle">IG</a>
                <a href="#" className="social-circle">WA</a>
                <a href="#" className="social-circle">TW</a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© 2026 ROLL EXPRESS. All Rights Reserved.</span>
            <span>Made by
              <div className="footer__col"> 
              <a href='https://www.instagram.com/therustedstudio?igsh=djFuN2prOXNyMXN6'>@ The Rusted Studio.</a>
              </div>
            </span>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
