import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import menuDishes from '../assets/menu-dishes.png';
import '../styles/menu.css';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: 'PANEER TIKKA ROLL',
    price: '₹89',
    description: 'Smoky tandoori paneer, mint chutney, onion rings.',
  },
  {
    name: 'CHICKEN SEEKH ROLL',
    price: '₹109',
    description: 'Juicy seekh kebabs with fresh salad, green chutney.',
  },
  {
    name: 'EGG OMELETTE ROLL',
    price: '₹69',
    description: 'Fluffy masala omelette with tangy sauce, onions.',
  },
  {
    name: 'ALOO TIKKI ROLL',
    price: '₹59',
    description: 'Crispy potato patty, tamarind chutney, crunchy sev.',
  },
];

export default function MenuShowcase() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.menu__item', 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      }
    );
  }, []);

  return (
    <section className="menu" ref={sectionRef} id="menu">
      <div className="container">
        
        <div className="menu__header">
          <h2 className="menu__heading">THE MENU</h2>
          <div className="menu__line" />
        </div>

        <div className="menu__grid">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              className="menu__item"
              whileHover={{ scale: 1.02 }}
            >
              <div className="menu__item-image-wrap">
                <img src={menuDishes} alt={item.name} className="menu__item-image" />
              </div>
              <div className="menu__item-info">
                <div className="menu__item-top">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="menu__btn">ADD TO CART</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
