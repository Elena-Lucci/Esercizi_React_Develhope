// Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter. Use the useCallback to memoize the functions used to increment, decrement and reset the counter.

//useCounter è un custom hook, cioè una funzione che inizia con use e che utilizza gli hook di React al suo interno, però CUSTOM HOOK NON PUO' ESSERE UN COMPONENTE, MA E' UNA FUNZIONE che restituisce un oggetto o un array con i valori e le funzioni che vogliamo esportare.

import { useState, useCallback } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

//useCallback è un hook che permette di memorizzare una funzione in modo che non venga ricreata ad ogni render, ma solo quando le dipendenze cambiano. In questo caso, le funzioni increment, decrement e reset non hanno dipendenze, quindi verranno create una sola volta.

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}

export default useCounter;