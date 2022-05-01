import React from 'react';
import {imgfm} from "./imports";
import Emailsvg from "./Emailsvg"
import Linkedin from "./Linkedinsvg"
import "./header.css";

const Header = () => {
  return (
    <div className='figma__header'>
      <img src={imgfm} alt="profile"/>

      <div className="figma__header-container">
        <div className="figma__header-content">
          <h2>Berry Whyte</h2>
          <p>Frontend Developer</p>
          <p>berrywhyte@gmail.com</p>
        </div>
        <div className="figma__header-btn">
          <button type='button' className='btn'>
          <Emailsvg fill="#1E1F26"/>

            <span>Email</span>
          </button>
          <button type='button' className='btn'>
            <Linkedin fill="#fff"/>
            

            <span>Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header