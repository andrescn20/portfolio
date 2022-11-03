import { Project } from './Project';
import React, { useEffect, useRef } from 'react';
import { projects } from '../projects';

const Projects: React.FC<{ updatePosition: (position: number) => void }> = ({
  updatePosition,
}) => {
  const projectsRef = useRef<any>(null);

  useEffect(() => {
    const projectsPosition: any = projectsRef.current.offsetTop;
    updatePosition(projectsPosition - 50);
  }, [updatePosition]);

  const displayProjects = () => {
    return projects.map((project) => {
      return <Project {...project} />;
    });
  };
  return (
    <div className='projects' id='projects' ref={projectsRef}>
      <div className='layeredSpacer curvedLayer1'></div>

      <div>{displayProjects()}</div>

      <div className='layeredSpacer curvedLayer2'></div>
    </div>
  );
};

export default Projects;
