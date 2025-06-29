import React, { useEffect, useRef } from 'react';
/*
 FocusableInput:
// L’input ottiene immediatamente il cursore senza che l’utente debba cliccarci sopra, tramite onFocus() e useRef().
In pratica: Appena il componente appare, l’utente può subito digitare, perché il cursore è già nell’input.
 */

export function FocusableInput() {
    // Creo un “puntatore” (inputRef) che inizialmente vale null.
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

// L’array vuoto [] esegue questa funzione soltanto una volta, subito dopo che il componente è stato inserito in pagina.
// prende inputRef.current (che ora punta all’elemento <input>) e richiama il metodo .focus().

  return (
    // Quando React monta l’<input>, assegna a inputRef.current il riferimento al nodo DOM dell’input.
    <input
      ref={inputRef}
      type="text"
      placeholder="Focus me automatically"
    />
  );
}
