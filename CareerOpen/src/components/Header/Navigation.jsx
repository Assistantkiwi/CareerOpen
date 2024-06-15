import { useState } from 'react';

import './NavBar.css'
import careerOpen from '../../assets/logo.svg';
import Buttons from './Buttons.jsx';


function Logo() {
    return (
      <img
       src={careerOpen} className="logo" alt="CareerOpen logo"
      />
    );
  }


  const NavBar = () => {
    const {menuOpen, setMenuOpen} = useState(false)
    
    return (
      
      <div>
        <nav>
        <div to="/" className='img'><Logo /></div>
              <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
              }}>
                <span ></span>
                <span ></span>
                <span ></span>
              </div>
            <ul className={menuOpen ? "open" : ""}>
            <li >
                Jobs
              </li>
              <li >
                Job seekers
              </li>
              <li >
                Employers
              </li>
              <li>
                About
              </li>
            <Buttons />
            </ul>
        </nav>
      </div>
    );
  }

export default NavBar