import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import NavBar from './Components/NavBar';
import Skills from './Components/Skills';
import { useScrollPosition } from './Components/ScrollHook';
import top from './Images/skills-top.svg';

const App: React.FC = () => {
  const [skillsPosition, setSkillsPosition] = useState(0);
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [contactPosition, setContactPosition] = useState(0);

  const [skillsStartingPosition, setSkillsStartingPosition] = useState(0);
  const [projectsStartingPosition, setProjectsStartingPosition] = useState(0);
  const [contactStartingPosition, setContactStartingPosition] = useState(0);

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
              <img className='transition-skills-top' src={top} alt='' />
              <NavBar
                skills={skillsPosition}
                projects={projectsPosition}
                contact={contactPosition}
                scrollPosition={scrollPosition}
                skillsStart={skillsStartingPosition}
                projectsStart={projectsStartingPosition}
                contactStart={contactStartingPosition}
              />
              <Home />
              <Projects
                updatePosition={updateProjectsPosition}
                projectsStart={setProjectsStartingPosition}
                scrollPosition={scrollPosition}
                pojectStartPosition={projectsPosition}
              />
              <Skills
                updatePosition={updateSkillsPosition}
                skillsStart={setSkillsStartingPosition}
                skillsPosition={skillsPosition}
                scrollPosition={scrollPosition}
              />

              <Contact
                updatePosition={updateContactPosition}
                contactStart={setContactStartingPosition}
                scrollPosition={scrollPosition}
                contactPosition={contactPosition}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
