import React from 'react';

interface Props {
  name: string;
  description: string;
  techStack: Array<string>;
  links: Array<string>;
  image: string;
  id: number;
}
export const Project: React.FC<Props> = ({
  name,
  description,
  techStack,
  links,
  image,
  id,
}) => {
  const displayStack = () => {
    return techStack.map((tech: string) => {
      return <p className='tech'>{tech}</p>;
    });
  };
  const direction = () => {
    if (id % 2 === 0) {
      return 'left';
    } else {
      return 'right';
    }
  };
  return (
    <div className={`individualProject ${direction()}`}>
      <h2 className='title'>{name}</h2>
      <p className='description'>{description}</p>
      <div className='techStack'>{displayStack()}</div>
      <img className='image' src={image} alt={name} />
      <ul className='links'>{links}</ul>
    </div>
  );
};
