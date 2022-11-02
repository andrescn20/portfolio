import React from 'react';
// import { HashLink } from 'react-router-hash-link';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <NavBar />
              <Home />
              <Skills />
              <Projects />
              <Contact />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
