import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ShipIt from './components/ShipIt';
import Community from './components/Community';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update page title
    document.title = "Molus | Community for Solo Builders";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
  
  return (
    <div className="font-['Helvetica_Neue']">
      <Navbar />
      <Hero />
      <About />
      <ShipIt />
      <Community />
      <Partners />
      <FAQ />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App