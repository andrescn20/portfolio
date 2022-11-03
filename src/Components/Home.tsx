import React from 'react';
import { HashLink } from 'react-router-hash-link';
import gitHub from '../Images/github.png';
import linkedIn from '../Images/linkedin.png';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className='about-text'>
        <h2>Andrés Castro</h2>
        <h3>Front-End Web Developer</h3>
        <p>
          Having a strong background in Mechanical Engineering and Education,
          building to solve problems and communicating solutions is part of who
          I am.
          <button className='home-aboutBtn'>Get to Know Me Better</button>
        </p>
        <div>
          <a href='https://github.com/andrescn20'>
            <img alt='gitHub' src={gitHub} />
          </a>
          <a href='https://www.linkedin.com/in/andres-castro-197856181/'>
            <img alt='LinkedIn' src={linkedIn} />
          </a>
        </div>
        <div className='home-navigationContainer'>
          <HashLink smooth to='/portfolio/#projects' className='home-navLink'>
            Projects
          </HashLink>
          <HashLink smooth to='/portfolio/#skills' className='home-navLink'>
            Skills
          </HashLink>
          <HashLink smooth to='/portfolio/#contact' className='home-navLink'>
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default Home;
