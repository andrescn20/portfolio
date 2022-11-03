import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

interface Props {
  skills: number;
  projects: number;
  contact: number;
  scrollPosition: number;
}

const NavBar: React.FC<Props> = ({
  skills,
  projects,
  contact,
  scrollPosition,
}) => {
  const [isHomeActive, setIshomeActive] = useState(true);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isProjectsActive, setIsProjectsActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const [navBarClass, setNavBarClass] = useState('noBorder');

  useEffect(() => {
    if (scrollPosition < skills) {
      setIshomeActive(true);
      setIsSkillsActive(false);
      setIsProjectsActive(false);
      setIsContactActive(false);
      setNavBarClass('noBorder');
    }
    if (scrollPosition > skills && scrollPosition < projects) {
      setIshomeActive(false);
      setIsSkillsActive(true);
      setIsProjectsActive(false);
      setIsContactActive(false);
      setNavBarClass('border');
    }
    if (scrollPosition > projects && scrollPosition < contact) {
      setIshomeActive(false);
      setIsSkillsActive(false);
      setIsProjectsActive(true);
      setIsContactActive(false);
      setNavBarClass('border');
    }
    if (scrollPosition > contact) {
      setIshomeActive(false);
      setIsSkillsActive(false);
      setIsProjectsActive(false);
      setIsContactActive(true);
      setNavBarClass('border');
    }
  }, [
    contact,
    isContactActive,
    isHomeActive,
    isProjectsActive,
    isSkillsActive,
    navBarClass,
    projects,
    scrollPosition,
    skills,
  ]);
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={`navBar ${navBarClass}`}>
      <ul className='navBar-linkList'>
        <HashLink
          smooth
          to='/portfolio/#home'
          className={`${isHomeActive ? 'activeNavLink' : 'regularNavLink'}`}
          onClick={gotoTop}
        >
          Home
        </HashLink>
        <HashLink
          smooth
          to='/portfolio/#skills'
          className={` ${isSkillsActive ? 'activeNavLink' : 'regularNavLink'}`}
        >
          Skills
        </HashLink>
        <HashLink
          smooth
          to='/portfolio/#projects'
          className={` ${
            isProjectsActive ? 'activeNavLink' : 'regularNavLink'
          }`}
        >
          Projects
        </HashLink>
        <HashLink
          smooth
          to='/portfolio/#contact'
          className={`${isContactActive ? 'activeNavLink' : 'regularNavLink'}`}
        >
          Contact
        </HashLink>
      </ul>
    </div>
  );
};

export default NavBar;
