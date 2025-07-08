import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LanguageProvider } from './Context/languageContext';
import Hello from './Components/Hello';

function App() {

  return (
    <div style={{ padding: '2rem' }}>
      <LanguageProvider>
        <Hello />
      </LanguageProvider>
    </div>
  );
};

export default App;
