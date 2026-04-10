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
                <a href="#process">Process</a>
              </div>

              <div className="footer__col">
                <h4>Support</h4>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
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
            <span>Made with bold flavor.</span>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
