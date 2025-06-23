import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { CounterDisplay } from './Components/CounterDisplay'

function App() {
  
  return (
    <>
      <Counter initialValue={0} incrementAmount={1}></Counter>
    </>
  )
}

export default App
