import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/faq.css';

const faqs = [
  {
    q: "Is everything made fresh?",
    a: "100%. We prep our premium dough and fillings every single morning. When we sell out, we're done."
  },
  {
    q: "Do you offer vegetarian options?",
    a: "Absolutely. Our Paneer Tikka Roll and Veg Gourmet Roll are massive fan favorites."
  },
  {
    q: "Where is the physical store?",
    a: "We are currently located directly on the CGC Landran campus. Check the map section for precise directions."
  },
  {
    q: "Can I preorder for pickup?",
    a: "Not yet, but our online ordering system is launching extremely soon. Stay tuned to our socials."
  },
  {
    q: "Are the spices adjustable?",
    a: "Our signature flavor profile is locked in, but if you need it mild, let the chef know when ordering."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq-page">
      <div className="container faq__container">
        
        <motion.div 
          className="faq__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>FREQUENTLY<br/>ASKED <span className="text-pink">QUESTIONS</span></h1>
          <p>Everything you need to know about the Roll Express premium experience.</p>
        </motion.div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`faq__item ${openIndex === index ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="faq__question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.q}</span>
                <span className="faq__icon">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq__answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq__answer">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
