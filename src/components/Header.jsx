import React, { useState } from 'react';
import './Header.css'
import { TfiWorld } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { TfiSearch } from "react-icons/tfi";
const Header = () => {
  const [dropdownVisible, set_DropdownVisible] = useState(false);

  const showDropdown = () => {
    set_DropdownVisible(true);
  };

  const hideDropdown = () => {
    set_DropdownVisible(false);
  };

  return (
    <>
     
     
      <div id='nav'>
      <div id='dropdown' style={{ top: dropdownVisible ? '0vh' : '-70vh' }} >
        {/* Dropdown content */}
        <div className='cili' id='tifny' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        <div id='tifny1'>
<h2>Business Overview</h2>
        </div> 
        <h4 className='learn'>Learn more</h4>
        <div id='tifny2'>
<h2>Our Brands</h2>
        </div> 
        <h4 className='learn'>Browse select Tata barnds</h4> 
        </div>
        

        {/* <div className='cili' onMouseEnter={showDropdown} onMouseLeave={hideDropdown} >Dropdown Item 2</div> */}
        {/* <div className='cili' onMouseEnter={showDropdown} onMouseLeave={hideDropdown} >Dropdown Item 3</div> */}
      </div>
        <div id='l1'>
          <img id='logo' src='tata neu.png' />
        </div>
        <div id='l2'>
        <ul>
          <li className='item' id='iot1' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>Business</li>
          <li className='item' id='iot2' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>Community</li>
          <li className='item' id='iot3' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>About Us</li>
          <li className='item' id='iot4' >Newsroom</li>
          <li className='item' id='iot5' >Careers</li>
        </ul>
        </div>
        <div id='l3'>
          <TfiWorld className='icons' />
          <TfiEmail className='icons' />
          <TfiSearch className='icons'/>
        </div>
      </div>
    </>
  )
}

export default Header
