import { type } from 'os';
import React from 'react';

interface Props {
  name: string;
  description: string;
  techStack: Array<{ name?: any; link?: any }>;
  links: Array<string>;
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
      return <img className='tech' src={tech.link} alt={tech.name} />;
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
      return <img className='image' src={image} alt={`${name} Media`} />;
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
      <ul className='links'>{links}</ul>
    </div>
  );
};
