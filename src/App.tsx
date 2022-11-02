import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import { useScrollPosition } from './Components/ScrollHook';

const App: React.FC = () => {
  const [skillsPosition, setSkillsPosition] = useState(0);
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);

  const scrollPosition = useScrollPosition();

  const updateSkillsPosition = (position: number) => {
    setSkillsPosition(position);
  };

  const updateProjectsPosition = (position: number) => {
    setProjectsPosition(position);
  };

  const updateContactPosition = (position: number) => {
    setContactPosition(position);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/portfolio'
          element={
            <div className='App'>
              <NavBar
                skills={skillsPosition}
                projects={projectsPosition}
                contact={contactPosition}
                scrollPosition={scrollPosition}
              />
              <Home />
              <Skills updatePosition={updateSkillsPosition} />
              <Projects updatePosition={updateProjectsPosition} />
              <Contact updatePosition={updateContactPosition} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
