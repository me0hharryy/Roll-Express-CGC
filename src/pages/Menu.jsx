import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import '../styles/menu.css';

// Complete Menu Data
const wheelCategories = [
  {
    id: 0,
    title: "ALOO & VEG",
    color: "var(--color-brand-green)",
    items: [
      { name: "Aloo Roll", sin: "70", dbl: "80" },
      { name: "Tandoori Aloo Roll", sin: "80", dbl: "100" },
      { name: "Veggie Roll", sin: "80", dbl: "100" },
      { name: "Mix Veg. Paneer", sin: "90", dbl: "110" }
    ]
  },
  {
    id: 1,
    title: "PANEER PREMIERE",
    color: "var(--color-brand-yellow)",
    items: [
      { name: "Paneer Roll", sin: "100", dbl: "120" },
      { name: "Paneer Malai Tikka", sin: "110", dbl: "140" },
      { name: "Paneer Bhurji", sin: "110", dbl: "140" },
      { name: "Achari Paneer", sin: "110", dbl: "140" }
    ]
  },
  {
    id: 2,
    title: "TALES OF CHAAP",
    color: "var(--color-brand-green)",
    items: [
      { name: "Afghani Chaap Roll", sin: "110", dbl: "130" },
      { name: "Masala Chaap Roll", sin: "110", dbl: "130" },
      { name: "Achari Chaap Roll", sin: "120", dbl: "140" },
      { name: "Tandoori Chaap", sin: "120", dbl: "140" }
    ]
  },
  {
    id: 3,
    title: "RUSTIC CHICKEN",
    color: "var(--color-text-dark)",
    items: [
      { name: "Chicken Roll", sin: "100", dbl: "120" },
      { name: "Chicken Seekh", sin: "120", dbl: "140" },
      { name: "Chicken Malai", sin: "110", dbl: "140" },
      { name: "Tandoori Chicken", sin: "110", dbl: "140" }
    ]
  },
  {
    id: 4,
    title: "THE KING'S CUT",
    color: "var(--color-brand-yellow)",
    items: [
      { name: "Single Mutton", sin: "120", dbl: "-" },
      { name: "Double Mutton", sin: "150", dbl: "-" },
      { name: "Sin. Egg Dbl. Mutton", sin: "170", dbl: "-" },
      { name: "Dbl. Egg Dbl. Mutton", sin: "180", dbl: "-" }
    ]
  },
  {
    id: 5,
    title: "EGG SERIES",
    color: "var(--color-brand-green)",
    items: [
      { name: "Single Egg Roll", sin: "60", dbl: "-" },
      { name: "Double / Triple Egg", sin: "70", dbl: "80" },
      { name: "Egg Bhurji Roll", sin: "100", dbl: "-" },
      { name: "Sin. Egg Sin. Aloo", sin: "90", dbl: "-" }
    ]
  },
  {
    id: 6,
    title: "EGG COMBOS",
    color: "var(--color-brand-yellow)",
    items: [
      { name: "Sin. Egg Sin. Paneer", sin: "110", dbl: "-" },
      { name: "Dbl. Egg Dbl. Paneer", sin: "140", dbl: "-" },
      { name: "Sin. Egg Sin. Chicken", sin: "110", dbl: "-" },
      { name: "Dbl. Egg Dbl. Chicken", sin: "150", dbl: "-" }
    ]
  },
  {
    id: 7,
    title: "BURGERS & SIDES",
    color: "var(--color-text-dark)",
    items: [
      { name: "Crispy Paneer Burger", sin: "100", dbl: "-" },
      { name: "Chicken Zinger", sin: "130", dbl: "-" },
      { name: "Fries (Salted / Peri)", sin: "90", dbl: "100" },
      { name: "Premium Shakes", sin: "99", dbl: "-" }
    ]
  }
];

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // 1. Get raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Inject buttery-smooth physical momentum into the scroll
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,     // High damping prevents it from feeling too bouncy
    stiffness: 80,   // Lower stiffness makes it glide smoothly
    mass: 0.8        // Adds "weight" to the scroll
  });

  // 3. Map the smoothed scroll (0 to 1) to continuous wheel rotation (0 to -315 degrees)
  const totalAngle = (wheelCategories.length - 1) * 45; // 7 * 45 = 315 deg
  const wheelRotation = useTransform(smoothProgress, [0, 1], [0, -totalAngle]);

  // 4. Update the active board content smoothly
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (wheelCategories.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCategory = wheelCategories[activeIndex];
  const anglePerItem = 360 / wheelCategories.length;

  const handleNodeClick = (index) => {
    if (!containerRef.current) return;
    const totalScrollHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = (index / (wheelCategories.length - 1)) * totalScrollHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className="menu-scroll-wrapper" ref={containerRef}>
      
      <section className="menu-sticky-viewport">
        <div className="menu-noise"></div>
        <div className="menu-watermark">EXPRESS</div>

        <div className="rotary-container">
          
          {/* --- LEFT: The Massive Rotary Wheel --- */}
          <div className="wheel-wrapper">
            <motion.div 
              className="wheel-circle"
              style={{ rotate: wheelRotation }} // Tied directly to smooth spring
            >
              {wheelCategories.map((cat, i) => {
                const rotationAngle = i * anglePerItem;
                const isActive = activeIndex === i;
                
                // Keep the text perfectly upright while the wheel spins
                const counterRotation = useTransform(wheelRotation, (val) => `rotate(${-rotationAngle - val}deg)`);
                
                return (
                  <div 
                    key={cat.id} 
                    className="wheel-spoke"
                    style={{ transform: `rotate(${rotationAngle}deg)` }}
                  >
                    <motion.button 
                      className={`wheel-node ${isActive ? 'active' : ''}`}
                      onClick={() => handleNodeClick(i)}
                      style={{ 
                        transform: counterRotation,
                        backgroundColor: isActive ? cat.color : '#fff',
                        color: isActive && cat.color === 'var(--color-text-dark)' ? '#fff' : 'var(--color-text-dark)'
                      }}
                    >
                      {cat.title}
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>
            
            <div className="wheel-hub">
              <div className="hub-inner">MENU</div>
            </div>
          </div>

          {/* --- RIGHT: The Dynamic Content Board --- */}
          <div className="content-board">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                className="board-inner"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                
                <div className="board-header">
                  <span className="board-index">0{activeCategory.id + 1}</span>
                  <h2 className="board-title">{activeCategory.title}</h2>
                </div>

                <div className="board-legend">
                  <span>SELECTION</span>
                  <div className="legend-prices">
                    <span>SIN</span>
                    <span>DBL</span>
                  </div>
                </div>

                <div className="board-items">
                  {activeCategory.items.map((item, idx) => (
                    <div key={idx} className="curved-item-card">
                      <div className="item-name-group">
                        <div className="item-dot" style={{ backgroundColor: activeCategory.color }}></div>
                        <span className="item-name">{item.name}</span>
                      </div>
                      
                      <div className="item-prices">
                        <span className="price">₹{item.sin}</span>
                        <span className="price">{item.dbl !== "-" ? `₹${item.dbl}` : "-"}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}