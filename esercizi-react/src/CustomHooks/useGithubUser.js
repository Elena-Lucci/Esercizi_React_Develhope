// Modify the useGithubUser custom hook from the third Custom Hooks exercise to use the useSWR hook to fetch the data of a Github user.
// Modify the useGithubUser hook so that, if the username is null, no request is made.
// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
// Use SWRConfig to set a default value for the fetcher prop of the useSWR hook.

import useSWR from 'swr';

// Custom hook
export function useGithubUser(username) {
  const shouldFetch = username != null && username !== '';

  const { data, error, isValidating, mutate } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null
  );

  return {
    user: data,
    loading: isValidating && !data,
    error,
    refetch: mutate // manual refetch
  };
}


//Riceve username come argomento, cioè il nome utente GitHub da cercare.

// shouldFetch:
// Verifica se username è valido (non nullo e non vuoto).
// Se non è valido, non farà la richiesta.

// useSWR:
// Usa il hook useSWR per gestire il fetch dei dati.
// Se shouldFetch è true, fa una richiesta a https://api.github.com/users/${username}.
// Se false, non fa nessuna richiesta (passa null).

// Risultato:
// Restituisce un oggetto con:

// user: i dati dell’utente GitHub (se trovati)
// loading: true se sta ancora caricando e non ha dati
// error: eventuale errore della richiesta
// refetch: funzione per ricaricare manualmente i dati (mutate di SWR)
// In sintesi:
// Questo hook permette di ottenere i dati di un utente GitHub, gestisce lo stato di caricamento/errore, e offre una funzione per ricaricare i dati manualmente.
