import React from 'react';
import {twitter, github, fb, Instagram} from "./imports"
import "./footer.css";

const Footer = () => {
  return (
    <div className='figma__footer'>

      <img src={twitter} alt="twitter"/>
      <img src={fb} alt="facebook"/>
      <img src={Instagram} alt="instagram"/>
      <img src={github} alt="github"/>
    </div>
  )
}

export default Footer