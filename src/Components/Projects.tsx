import React, { useEffect, useRef } from 'react';

const Projects: React.FC<{ updatePosition: (position: number) => void }> = ({
  updatePosition,
}) => {
  const projectsRef = useRef<any>(0);

  useEffect(() => {
    const projectsPosition: any = projectsRef.current.offsetTop;
    updatePosition(projectsPosition);
  }, []);

  return (
    <div className='projects' id='projects' ref={projectsRef}>
      <div className='layeredSpacer curvedLayer1'></div>

      <div className='projects-content'>
        <h2>Projects</h2>
        <div className='projectContainer'>
          <h3>Calion Crafting</h3>
          <p>E-commerce Shop</p>
        </div>
        <div className='projectContainer'>
          <h3>NPC Weather </h3>
          <p> MMORPG themed Weather App</p>
        </div>
        <div className='projectContainer'>
          <h3>Newton Project</h3>
          <p>Education: Teaches how to clear variables</p>
        </div>
        <div className='projectContainer'>
          <h3>BodyBuilding Tracker</h3>
          <p>App for tracking and designing workout cycles</p>
        </div>
      </div>

      <div className='layeredSpacer curvedLayer2'></div>
    </div>
  );
};

export default Projects;
