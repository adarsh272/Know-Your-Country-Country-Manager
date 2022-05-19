import React from 'react'
import CountryDisplay from './CountryDisplay'
import Navbar from './Navbar'

function HomePage({darkMode, lightMode, toggleDark, handleToggleDark}) {
  return (
    <div>
        <Navbar darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark} handleToggleDark={handleToggleDark}/>
        <CountryDisplay darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark}/>
    </div>
  )
}

export default HomePage