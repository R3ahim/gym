import React from 'react'
import './Footer.css'
import github from '../../assets/github.png';
import instagram from '../../assets/instagram.png'
import linkdin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
   <div className="Footer-container">
    <hr />

    <div className="footer">
      <div className="social-links">
      <img src={github} alt="" />
        <img src={instagram} alt="" />
        <img src={linkdin} alt="" />
      </div>
      <div className="logo-f">
        <img src={logo} alt="" />
    </div>
    </div>
  
   </div>
)
}

export default Footer