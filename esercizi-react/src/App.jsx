import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome } from './Components/Welcome'
import { CounterDisplay } from './Components/CounterDisplay'
import { Login } from './Components/Login'

function App() {
  const user = "Elena";
  const count = 42;
   const handleLogin = (credentials) => {
    console.log('Dati di login:', credentials);}
  return (
    <>
      <Welcome name={user}></Welcome>
      <CounterDisplay count={count}></CounterDisplay>
      <Login onLogin={handleLogin}></Login>
    </>
  )
}

export default App
