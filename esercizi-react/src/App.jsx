import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UncontrolledLogin } from './Components/UncontrolledLogin'

function App() {


  return (
    <>
    <UncontrolledLogin onLogin={(data) => console.log('Login data:', data)} />
    </>
  );
}

export default App;