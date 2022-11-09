import React, { useEffect, useState } from 'react';

interface Props {
  skills: number;
  projects: number;
  contact: number;
  scrollPosition: number;
  skillsStart: number;
  projectsStart: number;
  contactStart: number;
}

const NavBar: React.FC<Props> = ({
  skills,
  projects,
  contact,
  scrollPosition,
  skillsStart,
  projectsStart,
  contactStart,
}) => {
  const [isHomeActive, setIshomeActive] = useState(true);
  const [isSkillsActive, setIsSkillsActive] = useState(false);
  const [isProjectsActive, setIsProjectsActive] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const [navBarClass, setNavBarClass] = useState('noBorder');

  let x = 0;
  const correctedScrollPosition = scrollPosition - x;

  useEffect(() => {
    if (correctedScrollPosition <= skills) {
      setIshomeActive(true);
      setIsSkillsActive(false);
      setIsProjectsActive(false);
      setIsContactActive(false);
      setNavBarClass('noBorder');
    }
    if (
      correctedScrollPosition >= skills &&
      correctedScrollPosition < projects
    ) {
      setIshomeActive(false);
      setIsSkillsActive(true);
      setIsProjectsActive(false);
      setIsContactActive(false);
      setNavBarClass('border');
    }
    if (
      correctedScrollPosition >= projects &&
      correctedScrollPosition < contact
    ) {
      setIshomeActive(false);
      setIsSkillsActive(false);
      setIsProjectsActive(true);
      setIsContactActive(false);
      setNavBarClass('border');
    }
    if (correctedScrollPosition >= contact) {
      setIshomeActive(false);
      setIsSkillsActive(false);
      setIsProjectsActive(false);
      setIsContactActive(true);
      setNavBarClass('border');
    }
    // console.log(
    //   'Scroll: ' +
    //     correctedScrollPosition +
    //     '// Skills: ' +
    //     skillsStart +
    //     '// Projects: ' +
    //     projectsStart +
    //     '// Contact: ' +
    //     contactStart
    // );
  }, [
    contact,
    contactStart,
    isContactActive,
    isHomeActive,
    isProjectsActive,
    isSkillsActive,
    navBarClass,
    projects,
    projectsStart,
    scrollPosition,
    skills,
    skillsStart,
  ]);
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const gotoSkills = () => {
    window.scrollTo({
      top: skills,
      left: 0,
      behavior: 'smooth',
    });
  };

  const gotoProjects = () => {
    window.scrollTo({
      top: projects,
      left: 0,
      behavior: 'smooth',
    });
  };

  const gotoContact = () => {
    window.scrollTo({
      top: contact,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`navBar ${navBarClass}`}>
      <ul className='navBar-linkList'>
        <div
          className={`${
            isHomeActive ? 'activeNavLink' : 'regularNavLink'
          } nav-homeTab`}
          onClick={gotoTop}
        >
          Home
        </div>
        <div
          onClick={gotoSkills}
          className={` ${isSkillsActive ? 'activeNavLink' : 'regularNavLink'}`}
        >
          Skills
        </div>

        <div
          onClick={gotoProjects}
          className={` ${
            isProjectsActive ? 'activeNavLink' : 'regularNavLink'
          } projectsNav`}
        >
          Projects
        </div>
        <div
          onClick={gotoContact}
          className={`${isContactActive ? 'activeNavLink' : 'regularNavLink'}`}
        >
          Contact
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
