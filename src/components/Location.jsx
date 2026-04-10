import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import campusImg from '../assets/campus-location.png';
import '../styles/location.css';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.location__box',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
    );
  }, []);

  return (
    <section className="location" ref={sectionRef} id="location">
      <div className="container">
        <div className="location__box">
          <div className="location__info">
            <h2 className="location__heading">FIND US AT CGC</h2>
            <div className="location__details">
              <div className="loc-item">
                <span className="loc-label">Address</span>
                <p>Food Court, CGC Campus,<br/>Mohali, Punjab</p>
              </div>
              <div className="loc-item">
                <span className="loc-label">Timings</span>
                <p>Mon - Sat<br/>9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=CGC+Landran" target="_blank" rel="noopener noreferrer" className="btn-bento">
              GET DIRECTIONS
            </a>
          </div>
          <div className="location__image-wrap">
            <img src={campusImg} alt="CGC Campus" className="location__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
