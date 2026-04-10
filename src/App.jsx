import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FAQ from './pages/FAQ';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
