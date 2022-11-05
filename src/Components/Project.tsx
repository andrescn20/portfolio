import React from 'react';
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
}
export const Project: React.FC<Props> = ({
  name,
  description,
  techStack,
  links,
  image,
  video,
  id,
}) => {
  const displayStack = () => {
    return techStack.map((tech) => {
      return (
        <img className='tech' src={tech.link} alt={tech.name} key={tech.name} />
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

  return (
    <div className={`individualProject ${direction()}`}>
      <h3 className='title'>{name}</h3>
      <p className='description'>{description}</p>
      <div className='techStack'>{displayStack()}</div>
      <div className='media'>{media()}</div>
      <div className='links'>
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
