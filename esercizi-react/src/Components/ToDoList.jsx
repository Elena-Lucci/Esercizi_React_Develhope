import React, { useState } from 'react';

export function TodoList() {
// todos è un array che conterrà le stringhe dei tasks.
// setTodos è la funzione che aggiorna i todos.
// newTodo è la stringa che rappresenta il testo attualmente digitato nell’input.
// setNewTodo serve ad aggiornare newTodo ad ogni digitazione. 
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Handle input change: Collega onChange={handleChange} all’<input>. Ogni volta che l’utente preme un tasto, React chiama handleChange, legge e.target.value (il valore corrente dell’input) e lo salva in newTodo.
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add a new todo: se newTodo è vuoto o contiene solo spazi, esci subito (return). Altrimenti, aggiorna l’array todos con il nuovo todo, tramite spread operator [...].

  const handleAdd = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo.trim()]);
    setNewTodo(''); // Pulizia dell’input: chiami setNewTodo('') per resettare l’<input> a vuoto.
  };

  // Reset all todos: semplicemente imposta todos a un array vuoto. La lista <ul> ridisegna zero <li>, quindi la pagina mostra la lista svuotata.
  const handleReset = () => {
    setTodos([]);
  };

  // Remove a specific todo by index: Ogni <li> ha un proprio index. filter crea un nuovo array includendo solo gli elementi il cui indice i non è uguale a quello passato, pari a index. Reinvoco setTodos con il nuovo array filtrato, che non include l’elemento rimosso.
  const handleRemove = (index) => {
    setTodos(todos.filter((x, i) => i !== index));
    //filter accetta una funzione che prende due argomenti: l'elemento corrente (x) e l'indice corrente (i). La funzione restituisce true per gli elementi che devono rimanere nell'array, e false per quelli da rimuovere.
  };

  return (
    <div>
      <input
        type="text"
        // mostra sempre ciò che c’è in newTodo.
        value={newTodo}
        // aggiorna newTodo ad ogni tasto premuto.
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
      <ul>
        {/* todos.map(...) itera sull’array todos. Ogni todo diventa un <li> con il testo ${todo}*/}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
