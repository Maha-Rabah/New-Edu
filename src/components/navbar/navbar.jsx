import React,{useState,useRef,useEffect} from 'react'
import './navbarStyle.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AiOutlineCloseSquare} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // other links menu
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  


  ///////////////////////////////
  const [isOpen, setIsOpen]= useState(false);

  function toggleDropdown() {
      setIsOpen(!isOpen);
  }

  const ref = useRef(false);

  const updateRef = () => {
    ref.current = false;
  };

  useEffect(() => {
    const handleClick = () => {
      updateRef();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <nav className='navs' 
    >
      <div className="container bottom-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
         <div>
                <div className={(menuOpened) ? 'containt active' : 'containt'} >
                    <ul className='nav-items'>
                      <li><NavLink to="/" onClick={() => setMenuOpened((prev)=> !prev)}>Home</NavLink></li>
                      <li><NavLink to="about" onClick={() => setMenuOpened((prev)=> !prev)}>About</NavLink></li>
                      <li><NavLink to="dashboard" onClick={() => setMenuOpened((prev)=> !prev)}>Dashbourd</NavLink></li>
                      <li className='dropdown' ref={dropdownRef}>
                        <div className="dropdown-btn" onClick={toggleDropdown}>
                          <span>Our Work </span>
                        {/* {
                          isOpen? (<BiUpArrow/>):(<BiDownArrow/>)
                        } */}
                        </div>
                        <ul className={isOpen ? "dropdown-content active" :"dropdown-content"} onClick={toggleDropdown}>
                          <li><NavLink to={"edumentoring"} onClick={() => setMenuOpened((prev)=> !prev)}>EduMentoring</NavLink></li>
                          <li><NavLink to={"edulens"} onClick={() => setMenuOpened((prev)=> !prev)}>EduLens</NavLink></li>
                          <li><NavLink to={"educounseling"} onClick={() => setMenuOpened((prev)=> !prev)}>EduCounseling</NavLink></li>
                        </ul>
                      </li>
                      <li><NavLink to="joinus" onClick={() => setMenuOpened((prev)=> !prev)}>Join Us</NavLink></li>
                      <li><NavLink to="contuct" onClick={() => setMenuOpened((prev)=> !prev)}>Contuct Us</NavLink></li>

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