import React from 'react'
import './footerStyle.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube ,
} from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import { Link ,NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-container">

        <div className="box">
            <Link to="/"><img src={logo} alt="" /></Link>
            <a href="mailto:info@edu-bridge.org.uk">info@edu-bridge.org.uk</a>
            <ul className='social'> 
              <Link to={"https://facebook.com/EduBridge.Organization"}><FaFacebookF/></Link>
              <Link to={"https://instagram.com/edubridge.organization"}><FaInstagram/></Link>
              <Link to={"https://www.linkedin.com/company/edubridge-organization"}><FaLinkedinIn/></Link>
              <Link to={"https://youtube.com/@EduBridge.Organization"}><FaYoutube /></Link>
              <Link to={"https://t.me/EduBridge_Organization"}><BsTelegram /></Link>
            </ul>
        </div>
        
        <ul className='column'>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="about">About</NavLink></li>
          <li>
            <NavLink to="edumentoring">Our Work</NavLink>
            <ul className='drop'>
              <li><NavLink to="edumentoring">EduMentoring</NavLink></li>
              <li><NavLink to="edulens">EduLens</NavLink></li>
              <li><NavLink to="educounseling">EduCounselling</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="joinus">Join Us</NavLink></li>
          <li><NavLink to="contuct">Contact Us</NavLink></li>
        </ul>

      </div>

    </div>
  )
}

export default Footer