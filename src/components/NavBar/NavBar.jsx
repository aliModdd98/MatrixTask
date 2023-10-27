import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './NavBarStyle.css';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Dropdown from '../DropDown/DropDown';
import NestedDropdown from '../DropDown/DropDown';


const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'servises', label: 'Servises' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'team', label: 'Team' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

function NavBar() {
  const [mobileMode, setMobileMode] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="containerNav">
        <h3 className="logo" onClick={scrollToTop}>
          Vesperr
        </h3>
        <ul className={mobileMode ? 'small-size' : 'nav-links'} onClick={() => setMobileMode(false)}>
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
              style={{ animationDelay: '0.1s' }}
              activeClass="activeBtn"
            >
              <li>{section.label}</li>
            </ScrollLink>
          ))}
          <Link to="/dropdown" style={{ animationDelay: '0.2s' }}>
            <li>
              <NestedDropdown />
            </li>
          </Link>
          <Link to="/about">
            <div className="btn">
              <button>Get Started</button>
            </div>
          </Link>
        </ul>
        <button className="small-size-mobile" onClick={() => setMobileMode(!mobileMode)}>
          {mobileMode ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;