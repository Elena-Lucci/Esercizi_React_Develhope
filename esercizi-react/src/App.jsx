import { useState, useEffect, useRef } from 'react'
import ChatMessage from './Components/ChatMessage'
import './App.css'

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
    height: '500px',
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
  }

  const chatHistoryStyle = {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '8px',
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

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Simulated incoming messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prev => [...prev, { text: 'hei', sender: 'other' }])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={pageStyle}>
      <div style={chatContainer}>
        
        {/* Chat history */}
        <div style={chatHistoryStyle}>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={handleInvia} style={{ display: 'flex' }}>
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Scrivi un messaggio..."
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: '16px',
              border: '1px solid #ccc'
            }}
          />
          <button
            type="submit"
            style={{
              marginLeft: '8px',
              padding: '8px 16px',
              borderRadius: '16px',
              backgroundColor: '#007aff',
              color: '#fff',
              border: 'none'
            }}
          >
            Invia
          </button>
        </form>

      </div>
    </div>
  )
}

export default App
