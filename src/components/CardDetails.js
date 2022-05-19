import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import './Carddetails.css'
import { FaArrowLeft } from 'react-icons/fa'

function CardDetails({darkMode, lightMode, toggleDark, handleToggleDark}) {


  const [countryDetail, setCountryDetail] = useState([])
  const { countryname } = useParams()
  const navigate = useNavigate()
  console.log(countryname)

  const style = {
    position: 'absolute',
    marginTop: 57+'px',
    marginLeft: 75+'px'

  }

  useEffect(() => {
    const getCountry = async () => {
        try{
            let response = await fetch(`https://restcountries.com/v2/name/${countryname}`)
            let data = await response.json()
            setCountryDetail(data)
        }catch(err){
            console.log(err)
        }
        
    }
    getCountry()
}, [])

  return (
    <div>
        <Navbar darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark} handleToggleDark={handleToggleDark}/>
        <FaArrowLeft className='arrow-left'/>
        <button onClick={() => navigate('/')}>Back</button>
      {countryDetail.map(country => {
      return <div className='details'>
                <img src={country.flags.png} className='country-flag'></img>
                <div className='info-section-1'>
                  <h1>{country.name}</h1>
                  <div className='sub-info-section-1'>
                    <p>Native Name: <span>{country.nativeName}</span></p>
                    <p>Population: <span>{country.population}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Sub Region: <span>{country.subregion}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                  </div>
                  <div className='border-country'>
                  </div>
                </div>
                <div className='info-section-2'>
                  <p>Population: <span>{country.population}</span></p>
                  <p>Offical Language: <span>{country.languages[0].name}</span></p>
                  <p>Currencies: <span>{country.currencies[0].name} {country.currencies[0].symbol}</span></p>
                </div>
            </div>
            
      })}
    </div>
  )
}

export default CardDetails