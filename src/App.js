import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Card from './components/Card';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CardDetails from './components/CardDetails';

function App() {

  const [toggleDark, setToggleDark] = useState(false)

  const handleToggleDark = () =>{
    setToggleDark(!toggleDark)
  }

  const darkMode = {
    backgroundColor: 'hsl(207, 26%, 17%)',
    color: 'hsl(0, 0%, 100%)'
  }

  const lightMode = {
    backgroundColor: 'hsl(0, 0%, 98%)',
    color: 'hsl(200, 15%, 8%)'
  }

  return (
    <div className="App" style={toggleDark ? darkMode : lightMode}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark} handleToggleDark={handleToggleDark}/>}/>
          <Route path=':countryname' element={<CardDetails darkMode={darkMode} lightMode={lightMode} toggleDark={toggleDark} handleToggleDark={handleToggleDark}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
