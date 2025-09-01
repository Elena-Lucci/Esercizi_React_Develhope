import { useState, useEffect, useRef } from 'react';
import ChatMessage from './Components/ChatMessage';
import useSWR from 'swr';
import './App.css';

// Endpoint mock
const MOCK_ENDPOINT = 'https://mocki.io/v1/6585442b-234d-4508-9f40-b193e6f1d0d3';

// Funzione fetch da usare con SWR
const fetcher = (url) => fetch(url).then(res => res.json());

function App() {
  const [messages, setMessages] = useState([
    { text: 'Ciao! Come stai?', sender: 'other' },
  ]);
  const [message, setMessage] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const chatEndRef = useRef(null);

  // Hook SWR personalizzato: attivato solo quando shouldFetch === true
  const { data, error } = useSWR(shouldFetch ? MOCK_ENDPOINT : null, fetcher, {
    revalidateOnFocus: false,
  });

  // Quando arriva una nuova risposta dal bot
  useEffect(() => {
    if (data?.reply) {
      setMessages(prev => [...prev, { text: data.reply, sender: 'other' }]);
      setShouldFetch(false); // reset
    }
  }, [data]);

  // Auto scroll in fondo
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function handleInvia(event) {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    // Aggiungi messaggio utente
    setMessages(prev => [...prev, { text: trimmed, sender: 'me' }]);
    setMessage('');
    setShouldFetch(true); // Attiva SWR per ottenere la risposta del bot
  }

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#f2f2f2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        height: '500px',
        backgroundColor: '#fff',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '8px' }}>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleInvia} style={{ display: 'flex' }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
  );
}

export default App;
