import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatMessage from './Components/ChatMessage'

function App() {
  const [messages, setMessages] = useState([
    { text: 'Ciao! Come stai? Vieni ad arrampicare questa sera?', sender: 'other' },
    { text: 'Tutto bene, grazie! E tu? Guarda, non saprei, a che ora andate?', sender: 'me' },
    { text: 'Bene anche io, pensavo dopo le 18:00', sender: 'other' },
    { text: 'Perfetto, verso le 15:00 ti do conferma, ma penso di potere!', sender: 'me' },
  ])

  const [message, setMessage] = useState("")
  const chatEndRef = useRef(null)

  const pageStyle = {
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const chatContainer = {
    width: '100%',
    maxWidth: '400px',
    height: '500px',          // altezza fissa per il container della chat
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',       // consente lo scroll
  }

  function handleInvia(event) {
    event.preventDefault()
    const trimmed = message.trim()
    if (!trimmed) return
    setMessages(prev => [...prev, { text: trimmed, sender: 'me' }])
    setMessage("")
  }

  function handleChange(event) {
    setMessage(event.target.value)
  }

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Simulate incoming messages (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => [...prev, { text: 'hei', sender: 'other' }])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={pageStyle}>
      <div style={chatContainer}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleInvia} style={{ display: 'flex', marginTop: '8px' }}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Scrivi un messaggio..."
          style={{ flex: 1, padding: '8px', borderRadius: '16px', border: '1px solid #ccc' }}
        />
        <button type='submit' style={{ marginLeft: '8px', padding: '8px 16px', borderRadius: '16px', backgroundColor: '#007aff', color: '#fff', border: 'none' }}>
          Invia
        </button>
      </form>
    </div>
  )
}

export default App
