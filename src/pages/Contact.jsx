import { motion } from 'framer-motion';
import '../styles/contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="container contact__container">
        
        <div className="contact__info">
           <motion.h1 
              initial={{y:50, opacity:0}} 
              animate={{y:0, opacity:1}} 
              className="contact__title"
           >
              SAY HELLO.
           </motion.h1>
           <motion.p 
              initial={{y:50, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{delay: 0.1}} 
              className="contact__desc"
           >
             Whether it's a massive catering order, feedback on our new signature roll, or just wanting to talk flavor—hit us up. We're always rolling.
           </motion.p>
           
           <div className="contact__details">
              <motion.div 
                 className="contact__detail-box"
                 initial={{ opacity: 0, x: -30 }} 
                 animate={{ opacity: 1, x: 0 }} 
                 transition={{delay: 0.2}}
              >
                 <h3>VISIT US</h3>
                 <p>CGC Landran Campus<br/>Mohali, Punjab</p>
              </motion.div>
              <motion.div 
                 className="contact__detail-box alt-bg"
                 initial={{ opacity: 0, x: -30 }} 
                 animate={{ opacity: 1, x: 0 }} 
                 transition={{delay: 0.3}}
              >
                 <h3>HOURS</h3>
                 <p>Mon - Sat<br/>11:00 AM - 9:00 PM</p>
              </motion.div>
           </div>
        </div>

        <motion.div 
           className="contact__form-wrap"
           initial={{ opacity: 0, y: 50 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{delay: 0.4}}
        >
           <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                 <input type="text" placeholder="YOUR NAME" required />
              </div>
              <div className="form-group">
                 <input type="email" placeholder="YOUR EMAIL" required />
              </div>
              <div className="form-group">
                 <textarea placeholder="WHAT'S ON YOUR MIND?" rows="5" required></textarea>
              </div>
              <button type="submit" className="contact__btn">
                 SEND MESSAGE <span className="contact__arrow">→</span>
              </button>
           </form>
        </motion.div>

      </div>
    </main>
  );
}
