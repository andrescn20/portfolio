import React, { useEffect, useRef } from 'react';

const Skills: React.FC<{ updatePosition: (position: number) => void }> = ({
  updatePosition,
}) => {
  const skillsRef = useRef<any>(0);

  useEffect(() => {
    const skillsPosition: any = skillsRef.current.offsetTop;
    updatePosition(skillsPosition);
  }, []);

  return (
    <div id='skills' className='skills' ref={skillsRef}>
      <h3>Skills</h3>
      <ul>
        <li>React JS</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
      </ul>
    </div>
  );
};

export default Skills;
