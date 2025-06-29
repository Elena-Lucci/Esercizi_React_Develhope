import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InteractiveWelcome } from './Components/InteractiveWelcome'
import { Login } from './Components/Login'

function App() {
  // Definisco qui la funzione che poi passo al Login: se non lo facessi qui, non potrei accedere ai dati di login
    const handleLogin = (credentials) => {
    console.log('Dati di login:', credentials);}

  return (
    <>
    <InteractiveWelcome></InteractiveWelcome>
    <Login onLogin={handleLogin}></Login>
    </>
  );
}

export default App;