import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Card from './Card'
import { Link } from 'react-router-dom'

import './CountryDisplay.css'

function CountryDisplay({darkMode, lightMode, toggleDark}) {

    const url = 'https://restcountries.com/v2/all'
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setsearchResults] = useState([])
    // const [filterOption, setFilterOption] = useState('All')
    // const [filterResults, setFilterResults] = useState([]) 

    const darkInputColor = {
        backgroundColor: 'hsl(209, 23%, 22%)',
        color: 'white'
    }

    const lightInputColor = {
        backgroundColor: 'white'
    }


    useEffect(() => {
        const getCountries = async () => {
            try{
                let response = await fetch(url)
                let data = await response.json()
                setCountries(data)
            }catch(err){
                console.log(err)
            }
            
        }
        getCountries()
    }, [])
    
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
        if(searchTerm !== ''){
            const newCountryList = countries.filter((country) => {
                return country.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
            setsearchResults(newCountryList)
        }else{
            setsearchResults(countries)
        }
    }

    // const filterHandler = (filterTerm) =>{
    //     setFilterOption(filterTerm)
    //     if(filterOption !== 'All'){
    //         const filteredCountries = countries.filter((country) => {
    //             return country.region === filterTerm
    //         })
    //         setFilterResults(filteredCountries)

    //     }else{
    //         setFilterResults(countries)
    //     }
    // }

   

  return (
    <div>
        <div className='search-bar-div'>
            <span className='search-icon'><FaSearch/></span>
            <input type='text' placeholder='Search for a country...' value={searchTerm} onChange={(e) => searchHandler(e.target.value)} style={toggleDark ? darkInputColor : lightInputColor}></input>
            {/* <select value={filterOption} onChange={(e) => filterHandler(e.target.value)}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select> */}
        </div>
        <div className='container'>
            <div className='card-rows'>
                {searchTerm.length < 1 ? countries.map(country => {
                    return (<Link to={`/${country.name}`} style={{ textDecoration: 'none' }}><Card country={country} darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark}/></Link>)
                }): searchResults.length > 0 ? searchResults.map((country) => {
                    return (<Link to={`/${country.name}`} style={{ textDecoration: 'none' }}><Card country={country} darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark}/></Link>)
                }): <div>No Countries Available</div>}
            </div>
        </div>
        
        
        
    </div>
  )
}

export default CountryDisplay

