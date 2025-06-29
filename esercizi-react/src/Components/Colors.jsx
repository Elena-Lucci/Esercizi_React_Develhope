/**
 * Colors component:
 * - Receives `colors` prop: an array of objects with `id` and `name`
 * - Renders an unordered list of <Color /> components
 */
import React from 'react';
import { Color } from './Color.jsx';

// Qui la prop si chiama colors ed è un array di oggetti, ciascuno con { id, name }.
export function Colors({ colors }) {
  return (
    // All’interno del <ul>, usiamo colors.map(...) per iterare sugli elementi dell’array. Ad ogni iterazione prendiamo un singolo oggetto c (che contiene { id, name }).
    <ul>
      {colors.map((c) => (
        // Per ciascun c, passiamo l’intero oggetto c (contenente id e name) come prop color al componente figlio Color:
        <Color key={c.id} color={c} />
      ))}
    </ul>
  );
}



// Recap:
// Color: riceve un singolo oggetto color e ne mostra il name in un <li>.
// Colors: riceve l’array colors, itera con .map(), e per ciascun elemento istanzia un <Color> fornendogli l’oggetto e una chiave unica.