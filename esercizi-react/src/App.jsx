import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import { Clock } from './Components/Clock'

function App() {
  

  return (
    <>
      <Counter initialValue={0} increment={1}></Counter>
      <Clock></Clock>
    </>
  )
}

export default App