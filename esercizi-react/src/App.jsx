import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatMessage from './Components/ChatMessage'

function App() {
  
const [messages, setMessages] = useState([
    {text: 'Ciao! Come stai? Vieni ad arrampicare questa sera?', sender: 'other' },
    {text: 'Tutto bene, grazie! E tu? Guarda, non saprei, a che ora andate?', sender: 'me' },
    {text: 'Bene anche io, pensavo dopo le 18:00', sender: 'other' },
    {text: 'Perfetto, verso le 15:00 ti do conferma, ma penso di potere!', sender: 'me' },
  ]);

const [otherMessages, setOtherMessages] = useState([
    {text: 'Ciao! Come stai? Vieni ad arrampicare questa sera?', sender: 'other' },
    {text: 'Bene anche io, pensavo dopo le 18:00', sender: 'other' },
  ]);

const [message, setMessage] = useState("")

const [myMessages, setMyMessages] = useState([])

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

  function handleInvia(event) {
    event.preventDefault()
    setMessages([...messages, {text: message, sender: "me"}])
  }

  function handleChange(event) {
    setMessage(event.target.value)
  }

  useEffect(()=> {
    const intervallo = setInterval(()=> setMessages([...messages, {text: "hei", sender: "other"}]), 1000)

   return ()=> clearInterval(intervallo)}, [messages])

  return (
    <div style={pageStyle}>
      <div style={chatContainer}>
        {messages.map(msg => (
          <ChatMessage message={msg} />
        ))}
      </div>
      <form onSubmit={handleInvia}>
        <input type="text" onChange={handleChange}/>
        <button type='submit'>Invia</button>
        </form>
    </div>
  );
}

export default App;