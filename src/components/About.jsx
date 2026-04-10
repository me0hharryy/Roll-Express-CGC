import { useRef } from 'react';
import { motion } from 'framer-motion';
import campusImg from '../assets/campus-location.png';
import '../styles/about.css';

export default function About() {
  const sectionRef = useRef(null);

  // Avatar placeholder src
  const avatar = "https://i.pravatar.cc/100";

  return (
    <section className="about" ref={sectionRef}>
      <div className="container">
        
        <div className="about-bento-grid">
          
          <motion.div 
            className="about-bento-main"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-bento-main-top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>ROLL EXPRESS</span>
            </div>
            
            <h2>BACK YOUR CRAVINGS WITH PREMIUM FLAVOR</h2>
            
            <div className="about-btn-wrap">
              <span className="about-btn-text">View Story</span>
              <div className="about-btn-arrow">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-bento-tall"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src={campusImg} alt="Students eating" />
            
            <div className="glass-panel">
              <div className="glass-top">
                <h3>About Us</h3>
                <div className="glass-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>
                </div>
              </div>
              <p>We deliver more than typical fast food. We deliver smarter flavors, and long-term satisfaction for the college everyday life.</p>
            </div>
          </motion.div>

          <div className="about-bento-bottom">
            <motion.div 
              className="bento-small-img"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" alt="Food" />
            </motion.div>
            
            <motion.div 
              className="bento-small-img"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop" alt="Vibe" />
              
              <div className="bento-avatar-cutout">
                <div className="avatars-stack">
                  <img src={avatar + "?img=1"} alt="Avatar" />
                  <img src={avatar + "?img=2"} alt="Avatar" />
                  <img src={avatar + "?img=3"} alt="Avatar" />
                </div>
                <span className="avatar-label">Happy Customers</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
