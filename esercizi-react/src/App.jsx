import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { CounterDisplay } from './Components/CounterDisplay'

function App() {
  
  const handleAlertTime = () => {
    alert(`Current time is ${new Date().toLocaleTimeString()}`);
  };
  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
