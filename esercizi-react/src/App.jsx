import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertClock from './Components/AlertClock'

function App() {
  
  const handleAlertTime = () => {
    alert(`Current time is ${new Date().toLocaleTimeString()}`);
  };
  return (
    <>
      <AlertClock onAlert={handleAlertTime} />
    </>
  )
}

export default App
