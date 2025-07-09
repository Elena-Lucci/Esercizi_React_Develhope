// useForm
//Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

import { useState, useCallback } from "react";

export function useForm(initialValues = { username: "", password: "" }) {
  const [form, setForm] = useState(initialValues);

// Event handler to update form state
//1. useCallback(...) memorizza la funzione handleChange, così non viene ricreata a ogni render. La dipendenza è vuota [] quindi viene creata una sola volta.
// 2. (e) => { ... } È il gestore passato all'evento onChange di un input HTML.
// 3. const { name, value } = e.target Estrae: name → il nome dell’input (e.g. username, password) e value → il contenuto dell’input digitato
// 4. setForm((prev) => ({ ...prev, [name]: value })). Aggiorna lo stato del form, mantenendo il valore esistente degli altri campi e aggiornando solo quello modificato.

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { form, handleChange };
}