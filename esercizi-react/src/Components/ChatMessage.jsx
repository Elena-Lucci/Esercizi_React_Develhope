// Single chat message bubble
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

export default ChatMessage