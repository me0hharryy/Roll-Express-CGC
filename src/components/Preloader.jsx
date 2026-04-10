import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import '../styles/preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Elegant, smooth counter
    let counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => setProgress(Math.floor(counter.val)),
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to(wrapperRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
        });
        tl.set(wrapperRef.current, { display: 'none' });
      },
    });
  }, []);

  return (
    <div className="preloader" ref={wrapperRef}>
      <div className="preloader__content" ref={textRef}>
        <div className="preloader__brand">ROLL EXPRESS</div>
        <div className="preloader__counter">{progress.toString().padStart(3, '0')}%</div>
      </div>
    </div>
  );
}
