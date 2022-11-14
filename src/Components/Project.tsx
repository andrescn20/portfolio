import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import gitHubLogo from '../Images/github.png';

interface Props {
  name: string;
  description: string;
  techStack: Array<{ name?: any; link?: any }>;
  links: { gitHub: string; live: string };
  image?: any;
  video?: { src: string; type: string };
  id: number;
  key: string;
  projectsPosition: number;
  scrollPosition: number;
}
export const Project: React.FC<Props> = ({
  name,
  description,
  techStack,
  links,
  image,
  video,
  id,
  projectsPosition,
  scrollPosition,
}) => {
  const displayStack = () => {
    return techStack.map((tech) => {
      return (
        <img
          className={`tech ${tech.name}`}
          src={tech.link}
          alt={tech.name}
          key={tech.name}
        />
      );
    });
  };

  const direction = () => {
    if (id % 2 === 0) {
      return 'left';
    } else {
      return 'right';
    }
  };
  const media = () => {
    if (image) {
      return (
        <Zoom>
          <img className='image' src={image} alt={`${name} Media`} />
        </Zoom>
      );
    }
    if (video) {
      return (
        <video className='video' width='320' height='240' controls>
          <source src={video.src} type={video.type} />
          Your browser does not support the video tag.
        </video>
      );
    }
  };
  const projectAppear = () => {
    return scrollPosition >= projectsPosition - 500 ? 'appear' : 'dissapear';
  };
  return (
    <div className={`individualProject ${direction()} ${projectAppear()}`}>
      <h3
        className={`title
         ${projectAppear()}
          `}
      >
        {name}
      </h3>
      <p className={`description ${projectAppear()}`}>{description}</p>
      <div className={`techStack ${projectAppear()}`}>{displayStack()}</div>
      <div className={`media ${projectAppear()}`}>{media()}</div>
      <div className={`links ${projectAppear()}`}>
        <a href={links.gitHub}>
          <img className='gitHubLogo' alt='gitHub' src={gitHubLogo} />
        </a>
        <a className='liveBtn' href={links.live}>
          Live
        </a>
      </div>
    </div>
  );
};
