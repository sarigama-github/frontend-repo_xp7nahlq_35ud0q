import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import About from './components/About';
import BrandNetwork from './components/BrandNetwork';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Future from './components/Future';
import Footer from './components/Footer';

const App = () => {
  React.useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const content = 'UMX INDIE – A confidential indie ecosystem by Om Lakhera. Building brands, designs, and digital experiences powered by independence, intelligence, and imagination.';
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', content);
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <Nav />
      <Hero />
      <About />
      <BrandNetwork />
      <Services />
      <Philosophy />
      <Future />
      <Footer />
    </div>
  );
};

export default App;
