/*
 * UncontrolledLogin:
 * - Three inputs: username, password, remember checkbox (all uncontrolled)
 * - "Login (DOM API)" button submits the form, reads values via event.target
 * - "Login (FormData API)" button reads values via FormData
 * - Calls onLogin prop with an object { username, password, remember }
 */
import React from 'react';

export function UncontrolledLogin({ onLogin }) {

// Vogliamo accedere al DOM element <form> associato al componente React in due modi diversi:

  // 1. Usando il DOM API (event.target): Nel metodo legato a onSubmit={handleSubmit}, React passa l’evento e: e.target è proprio il nodo <form>

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log('DOM API:', { username, password, remember });
    onLogin({ username, password, remember });
  };

  // 2. Usando l'API FormData (così leggo il form in un handler indipendente dall'evento). Creiamo un oggetto FormData passando il nodo <form> e poi leggiamo i valori con data.get('name').

     const formRef = React.useRef(null); // Creiamo un ref per accedere al nodo <form>

  const loginWithFormData = () => {
    const form = formRef.current; // Accediamo al nodo <form> tramite il ref
    const data = new FormData(form);
    const username = data.get('username');
    const password = data.get('password');
    const remember = data.get('remember') === 'on';

    console.log('FormData API:', { username, password, remember });
    onLogin({ username, password, remember });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input name="username" type="text" defaultValue="" />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input name="password" type="password" defaultValue="" />
        </label>
      </div>

      <div>
        <label>
          Remember me:
          <input name="remember" type="checkbox" defaultChecked={false} />
        </label>
      </div>

      <button type="submit" onSubmit={handleSubmit}>
        Login (DOM API)
      </button>
      <button onClick={loginWithFormData}>
        Login (FormData API)
      </button>
    </form>
  );
}