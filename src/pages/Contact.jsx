import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `🌯 Roll Express — New message from ${formData.name}`,
          from_name: 'Roll Express Website',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

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
           <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                 <input 
                   type="text" 
                   name="name"
                   placeholder="YOUR NAME" 
                   value={formData.name}
                   onChange={handleChange}
                   required 
                   disabled={status === 'sending'}
                 />
              </div>
              <div className="form-group">
                 <input 
                   type="email" 
                   name="email"
                   placeholder="YOUR EMAIL" 
                   value={formData.email}
                   onChange={handleChange}
                   required 
                   disabled={status === 'sending'}
                 />
              </div>
              <div className="form-group">
                 <textarea 
                   name="message"
                   placeholder="WHAT'S ON YOUR MIND?" 
                   rows="5" 
                   value={formData.message}
                   onChange={handleChange}
                   required
                   disabled={status === 'sending'}
                 ></textarea>
              </div>
              <button type="submit" className="contact__btn" disabled={status === 'sending'}>
                 {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} 
                 <span className="contact__arrow">{status === 'sending' ? '⏳' : '→'}</span>
              </button>
           </form>

           {/* Toast feedback */}
           <AnimatePresence>
             {status === 'success' && (
               <motion.div 
                 className="contact__toast success"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
               >
                 ✅ Message sent! We'll get back to you soon.
               </motion.div>
             )}
             {status === 'error' && (
               <motion.div 
                 className="contact__toast error"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
               >
                 ❌ Something went wrong. Please try again.
               </motion.div>
             )}
           </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
