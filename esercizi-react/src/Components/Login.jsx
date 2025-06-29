import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Stile dinamico del button Login
  const loginButtonStyle = {
    backgroundColor: password.length < 8 ? 'red' : 'green',
  };

  const handleLogin = (e) => {
  e.preventDefault();                   // impedisce il refresh della pagina
  onLogin({                             // chiama la prop onLogin passando lo stato
    username,
    password,
    remember,
  });
  console.log('Login dati:', { username, password, remember });
};

  return (
    <form onSubmit={handleLogin}>

      <button
        type="submit"
        disabled={username === '' || password === ''}
        style={loginButtonStyle}
      > Login
      </button>
    </form>
  );
}