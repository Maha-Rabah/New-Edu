import React from 'react'
import './footerStyle.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube ,
} from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import { Link ,NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">

        <div className="box">
            <Link to="/"><img src={logo} alt="" /></Link>
            <a href="mailto:info@edu-bridge.org.uk">info@edu-bridge.org.uk</a>
            <ul className='social'> 
              <Link to={"https://www.facebook.com/share/7BUHBUWxU951ac6Y/?mibextid=qi2Omg"}><FaFacebookF/></Link>
              <Link to={"https://www.instagram.com/edu.bridge.sy"}><FaInstagram/></Link>
              <Link to={"https://www.linkedin.com/company/edubridge2024"}><FaLinkedinIn/></Link>
              <Link to={"https://youtube.com/@edu.bridge.sy.?si=HpwWOaJPbz0mOrWI"}><FaYoutube /></Link>
              <Link to={"https://t.me/EduLens_Podcast"}><BsTelegram /></Link>
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
              <li><NavLink to="educounseling">EduCounseling</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="joinus">Join Us</NavLink></li>
          <li><NavLink to="contuct">Contuct Us</NavLink></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer