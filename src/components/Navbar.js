import React from 'react'
import { FaMoon } from 'react-icons/fa'
import DarkModeToggle from "react-dark-mode-toggle";
import './Navbar.css'


function Navbar({darkMode, lightMode, toggleDark, handleToggleDark}) {

  return (
    <div className='navbar' style={toggleDark ? darkMode : lightMode}>
        <h1>Know Your Country</h1>
        <div className='dark-mode-span' onClick={handleToggleDark}>
            <FaMoon/>
            <span style={{marginLeft: 7+'px', fontWeight: 300}}>Dark Mode</span>
        </div>
    </div>
  )
}

export default Navbar