import React from 'react';
import { HashLink } from 'react-router-hash-link';
const NavBar = () => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='navBar'>
      <ul className='navBar-linkList'>
        <HashLink smooth to='/#home' className='navLink' onClick={gotoTop}>
          Home
        </HashLink>
        <HashLink smooth to='/#skills' className='navLink'>
          Skills
        </HashLink>
        <HashLink smooth to='/#projects' className='navLink'>
          Projects
        </HashLink>
        <HashLink smooth to='/#contact' className='navLink'>
          Contact
        </HashLink>
      </ul>
    </div>
  );
};

export default NavBar;
