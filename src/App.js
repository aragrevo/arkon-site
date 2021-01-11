import React, { useState } from 'react';
import './App.css';
import Hero from './views/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Contact from './views/Contact/Contact';
import FloatButton from './components/FloatButton/FloatButton';
import Services from './views/Services/Services';

function App() {
  const [scroll, setScroll] = useState(0);
  console.log('mount');
  window.addEventListener('scroll', () => {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScrolled = window.scrollY;
    const scrollIndicatorWidth = Math.ceil(
      (currentScrolled / scrollableHeight) * 100
    );
    setScroll(scrollIndicatorWidth);
  });
  return (
    <div className='App'>
      <Navbar />
      <Header scroll={scroll} />
      <FloatButton />
      <div
        id='scrollIndicator'
        style={{ width: scroll + '%', zIndex: 999 }}
      ></div>
      <main>
        <Hero />
        <Services />
        <section id='gallery' className='gallery'>
          gallery
        </section>
        <section id='about' className='about'>
          about
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
