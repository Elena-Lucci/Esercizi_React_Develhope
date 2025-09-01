// Modify the chat application so that the bot obtains its responses from an external endpoint using the SWR library to manage network calls. Use the mocki.io service to create a mock for your network call!

// Requirements: When the user sends a message, use SWR to make a request to the provided endpoint and obtain the bot's response.


function ChatMessage({ message }) {
  const isSent = message.sender === 'me';

  const containerStyle = {
    display: 'flex',
    justifyContent: isSent ? 'flex-end' : 'flex-start',
    marginBottom: '8px',
  };

  const bubbleStyle = {
    maxWidth: '60%',
    padding: '8px',
    borderRadius: '16px',
    backgroundColor: isSent ? '#007aff' : '#e5e5ea',
    color: isSent ? '#fff' : '#000',
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle}>{message.text}</div>
    </div>
  );
}

export default ChatMessage;
