import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FocusableInput } from "./Components/FocusableInput.jsx";
import { MountLogger } from "./Components/MountLogger.jsx";

function App() {
  

  return (
    <>
      <FocusableInput />
      <MountLogger /> 
    </>
  )
}

export default App
