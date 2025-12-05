import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Policies from './components/Policies';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Policies />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
