import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

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
      {/* <h1 className='section-heading'>navbar</h1> */}
      {/* smooth navigation  */}
      <div id='scrollIndicator' style={{ width: scroll + '%' }}></div>
      <main>
        <Hero />
        <section id='gallery' className='gallery'>
          gallery
        </section>
        <section id='services' className='services'>
          services
        </section>
        <section id='about' className='about'>
          about
        </section>
        <section id='contact' className='contact'>
          contact
        </section>
      </main>
    </div>
  );
}

export default App;
