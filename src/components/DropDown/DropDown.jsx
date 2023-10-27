import './DropStyle.css'
import React, { useState } from 'react';
import {MdOutlineExpandMore}from "react-icons/md"
import { Link } from 'react-router-dom';
function NestedDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNestedDropdown = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleNestedDropdown} onMouseLeave={toggleNestedDropdown}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
         Dropdown <MdOutlineExpandMore className='sizeicon'/>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link href="#">Option 1</Link>
          <Link href="#" onMouseEnter={toggleNestedDropdown}>
            Option 2 <MdOutlineExpandMore className='sizeicon'/>
            {isNestedOpen && (
              <div className="nested-dropdown-content">
                <Link href="#">Nested Option 1</Link>
                <Link href="#">Nested Option 2</Link>
                <Link href="#">Nested Option 3</Link>
              </div>
            )}
          </Link>
          <Link href="#">Option 3</Link>
        </div>
      )}
    </div>
  );
}

export default NestedDropdown;