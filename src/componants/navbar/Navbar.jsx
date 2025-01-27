import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg'
// import logo from '../../assets/Biometric Attendance (2).png'
// import logo from '../../assets/Biometric Attendance.png'
import logo from '../../assets/ai.png'
import { useState } from 'react';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#HIW">how its Works</a></p>
    {/* <p><a href="#possibility">Open AI</a></p> */}
    <p><a href="#features">Features</a></p>
    <p><a href="#pricing">Pricing</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_Container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p>
        <button type="button"> Sign Up</button> */}
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button"> Sign Up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Navbar
