import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuDishes from '../assets/menu-dishes.png';
import '../styles/menu.css';

const categories = ['ALL', 'SIGNATURE ROLLS', 'CLASSICS', 'BEVERAGES'];

const allItems = [
  { id: 1, cat: 'SIGNATURE ROLLS', name: 'MUTTON GALOUTI', price: '₹139', desc: 'Melt-in-mouth galouti kebab, saffron mayo.' },
  { id: 2, cat: 'SIGNATURE ROLLS', name: 'CHICKEN SEEKH', price: '₹109', desc: 'Juicy seekh kebabs with fresh salad, green chutney.' },
  { id: 3, cat: 'CLASSICS', name: 'PANEER TIKKA', price: '₹89', desc: 'Smoky tandoori paneer, mint chutney, onion rings.' },
  { id: 4, cat: 'CLASSICS', name: 'ALOO TIKKI', price: '₹59', desc: 'Crispy potato patty, tamarind chutney, crunchy sev.' },
  { id: 5, cat: 'CLASSICS', name: 'EGG OMELETTE', price: '₹69', desc: 'Fluffy masala omelette with tangy sauce, onions.' },
  { id: 6, cat: 'BEVERAGES', name: 'MASALA SHIKANJI', price: '₹49', desc: 'Refreshing lemon drink packed with Indian spices.' },
  { id: 7, cat: 'BEVERAGES', name: 'COLD COFFEE', price: '₹79', desc: 'Thick, creamy, and loaded with caffeine.' }
];

export default function Menu() {
  const [active, setActive] = useState('ALL');

  const filteredItems = active === 'ALL' 
    ? allItems 
    : allItems.filter(item => item.cat === active);

  return (
    <main className="menu-page">
      <div className="container">
        
        <header className="menu-page__header">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="menu-page__title"
          >
            THE FULL MENU
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="menu-page__sub"
          >
            Explore our curated selection.
          </motion.p>
        </header>

        <div className="menu-page__nav">
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(cat)}
              className={`menu-page__cat-btn ${active === cat ? 'active' : ''}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="menu-page__grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="menu__item"
              >
                <div className="menu__item-image-wrap">
                  <img src={menuDishes} alt={item.name} className="menu__item-image" />
                </div>
                <div className="menu__item-info">
                  <div className="menu__item-top">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                  <button className="menu__btn">ADD TO CART</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
