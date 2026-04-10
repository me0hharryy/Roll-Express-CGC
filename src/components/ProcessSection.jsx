import { useRef } from 'react';
import { motion } from 'framer-motion';
import heroRoll from '../assets/hero-roll.png';
import menuDishes from '../assets/menu-dishes.png';
import campusLocation from '../assets/campus-location.png';
import '../styles/process.css';

const processSteps = [
  {
    id: '01',
    title: 'THE CRAFT',
    desc: 'Every roll begins with our heritage dough, freshly kneaded every single morning for that perfect crispy-chewy pull.',
    img: heroRoll,
    bgColor: '#FFF4E0' // Warm Cream
  },
  {
    id: '02',
    title: 'THE FIRE',
    desc: 'Our fillings hit the roaring wok. Only the boldest spices make the cut. Warning: Highly addictive flavor profile.',
    img: menuDishes,
    bgColor: '#E6F4EA' // Soft Green tint
  },
  {
    id: '03',
    title: 'THE FINISH',
    desc: 'Rolled tight, seared hot, and served immediately. The ultimate campus survival gear handed straight to you.',
    img: campusLocation,
    bgColor: '#FFEBF3' // Light Pink
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  return (
    <section className="process-aw" ref={sectionRef} id="process">
      <div className="process-aw__container">
        
        {/* Sticky Left Column */}
        <div className="process-aw__sticky">
          <div className="process-aw__header">
             <div className="process-aw__badge">✦</div>
             <h2 className="process-aw__title">
               HOW<br/>WE<br/>DO IT.
             </h2>
             <p className="process-aw__desc">No shortcuts. Just aggressive flavor and brutal perfection in every single roll.</p>
          </div>
        </div>

        {/* Scrolling Right Column */}
        <div className="process-aw__steps">
          {processSteps.map((step, i) => (
             <motion.div 
               key={step.id}
               className="process-aw__card"
               initial={{ opacity: 0, y: 150 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             >
                <div className="process-aw__card-image">
                  <div className="process-aw__card-num">{step.id}</div>
                  <img src={step.img} alt={step.title} />
                </div>
                <div className="process-aw__card-content" style={{ backgroundColor: step.bgColor }}>
                  <h3 className="process-aw__card-title">{step.title}</h3>
                  <p className="process-aw__card-desc">{step.desc}</p>
                </div>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
