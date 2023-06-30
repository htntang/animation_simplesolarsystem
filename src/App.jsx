import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="App.css" /> 

    <header>
      <h1>The Solar System</h1>
      <h2>I want to live among the stars.</h2>
    </header>

    <div className="solarsystem">
    <svg viewBox="0 0 1000 1000">
      <circle id="orbit1" cx="50%" cy="50%" r="55px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit2" cx="50%" cy="50%" r="95px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="115px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="75px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="135px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="155px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="180px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="205px" fill="none" stroke="#f8f3dc" /> 
      <circle id="orbit3" cx="50%" cy="50%" r="240px" fill="none" stroke="#f8f3dc" /> 
      <circle id="sun" cx="50%" cy="50%" r="28px" fill="#fecb2f" /> 
      <circle id="mars" cx="50%" cy="50%" r="8px" fill="#69b3b2" /> 
      <circle id="mercury" cx="50%" cy="50%" r="8px" fill="#fa3757" /> 
      <circle id="saturn" cx="50%" cy="50%" r="8px" fill="#ffa4a4" /> 
      <circle id="venus" cx="50%" cy="50%" r="9px" fill="#FFC0CB" />    
      <circle id="jupiter" cx="50%" cy="50%" r="16px" fill="#dac586" />  
      <circle id="saturn" cx="50%" cy="50%" r="13px" fill="#F4C430" />  
      <circle id="uranus" cx="50%" cy="50%" r="12px" fill="#6699CC" />     
      <circle id="neptune" cx="50%" cy="50%" r="11px" fill="#89CFF0" /> 
      <circle id="pluto" cx="50%" cy="50%" r="5px" fill="#D8BFD8" />       
    </svg>
    </div>
    </>
  )
}

export default App
