import React from 'react';
import { email, linkdin, imgfm} from "./imports";
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
            <img src={email} alt="email"/>
            <span>Email</span>
          </button>
          <button type='button' className='btn'>
            <img src={linkdin} alt="linkedin"/>
            <span>Linkedin</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header