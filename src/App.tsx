import React from 'react';
import './App.scss';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='App'>
      <About />
      <NavBar />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
