import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatMessage from './Components/ChatMessage'

function App() {
  
const [messages] = useState([
    {text: 'Ciao! Come stai? Vieni ad arrampicare questa sera?', sender: 'other' },
    {text: 'Tutto bene, grazie! E tu? Guarda, non saprei, a che ora andate?', sender: 'me' },
    {text: 'Bene anche io, pensavo dopo le 18:00', sender: 'other' },
    {text: 'Perfetto, verso le 15:00 ti do conferma, ma penso di potere!', sender: 'me' },
  ]);

  const pageStyle = {
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const chatContainer = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={pageStyle}>
      <div style={chatContainer}>
        {messages.map(msg => (
          <ChatMessage message={msg} />
        ))}
      </div>
    </div>
  );
}

export default App;