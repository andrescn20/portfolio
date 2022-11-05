import { Project } from './Project';
import React, { useEffect, useRef } from 'react';
import { projects } from '../projects';

interface Props {
  projectsStart: (position: number) => void;
  updatePosition: (position: number) => void;
}

const Projects: React.FC<Props> = ({ updatePosition, projectsStart }) => {
  const projectsRef = useRef<any>(null);

  useEffect(() => {
    projectsStart(projectsRef.current.offsetTop);
  }, []);

  useEffect(() => {
    const projectsPosition: any = projectsRef.current.offsetTop;
    updatePosition(projectsPosition);
  }, [updatePosition]);

  const displayProjects = () => {
    return projects.map((project) => {
      return <Project {...project} key={project.name} />;
    });
  };
  return (
    <div className='projects' id='projects' ref={projectsRef}>
      {/* <div className='layeredSpacer curvedLayer1'></div> */}
      <h2 className='projects-title'>Projects</h2>
      <div>{displayProjects()}</div>
      <video width='320' height='240' controls>
        <source src='./Videos/CalionCraftingLQ.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <div className='layeredSpacer curvedLayer2'></div> */}
    </div>
  );
};

export default Projects;
