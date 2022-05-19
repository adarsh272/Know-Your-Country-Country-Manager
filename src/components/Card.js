import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

function Card({country, toggleDark}) {

  const navigate = useNavigate()

  const darkCardColor = {
    backgroundColor: 'hsl(209, 23%, 22%)',
    color: 'white'
}

const lightCardColor = {
    backgroundColor: 'white'
}

  return (
    <div className='card-container' style={toggleDark ? darkCardColor : lightCardColor} onClick={() => navigate('/countrydetails')}>
        <img src={country.flags.svg}></img>
        <h2>{country.name}</h2>
        <div className='info-section'>
            <p>Population: <span className='population'>{country.population}</span></p>
            <p>Region: <span className='region'>{country.region}</span></p>
            <p>Capital: <span className='capital'>{country.capital}</span></p>
        </div>
        
    </div>
  )
}

export default Card