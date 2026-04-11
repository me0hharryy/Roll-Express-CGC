import Hero from '../components/Hero';
import SpinSection from '../components/SpinSection';
import ProcessSection from '../components/ProcessSection';
import MenuShowcase from '../components/MenuShowcase';
import About from '../components/About';
import Reviews from '../components/Reviews';
import GrandOpening from '../components/GrandOpening';

export default function Home() {
  return (
    <main>
      <Hero />
      <SpinSection />
      <ProcessSection />
      <About />
      <Reviews />
      <GrandOpening />
    </main>
  );
}
