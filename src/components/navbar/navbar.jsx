import {useState,useRef,useEffect} from 'react'
import './navbarStyle.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AiOutlineCloseSquare} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowUp ,MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

    const dropdownRef = useRef();
    

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);
  
  ///////////////////////////////////////////
  const [isOpen, setIsOpen]= useState(false);

  function toggleDropdown() {
      setIsOpen(!isOpen);
  }

  return (
    <nav className='navs'>

      <div className="nav-container bottom-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>

            <div>
                <div className={(menuOpened) ? 'containt active' : 'containt'} >
                    <ul className='nav-items'>
                      <li><NavLink to="/" onClick={() => setMenuOpened((prev)=> !prev)}>Home</NavLink></li>
                      <li><NavLink to="about" onClick={() => setMenuOpened((prev)=> !prev)}>About</NavLink></li>

                      <li className='dropdown' ref={dropdownRef}>
                          <Link className="dropdown-btn" onClick={toggleDropdown}>
                              Our Work {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                          </Link>
                          <ul className={isOpen ? "dropdown-content active" : "dropdown-content"}>
                              <li><NavLink to={"edumentoring"} onClick={() => setIsOpen(false)}>EduMentoring</NavLink></li>
                              <li><NavLink to={"edulens"} onClick={() => setIsOpen(false)}>EduLens</NavLink></li>
                              <li><NavLink to={"educounseling"} onClick={() => setIsOpen(false)}>EduCounselling</NavLink></li>
                          </ul>
                      </li>
                      <li><NavLink to="joinus" onClick={() => setMenuOpened((prev)=> !prev)}>Join Us</NavLink></li>
                      <li><NavLink to="contuct" onClick={() => setMenuOpened((prev)=> !prev)}>Contact Us</NavLink></li>

                    </ul>

                    <div className="close-bar" onClick={() => setMenuOpened((prev)=> !prev)}>
                      <AiOutlineCloseSquare/>
                    </div>
                </div>
                    <div className="menu-icon" onClick={() => setMenuOpened((prev)=> !prev)}>
                        <FaBars/>
                    </div>
          </div>
        </div>
    </nav>
              )
            }

            export default Navbar