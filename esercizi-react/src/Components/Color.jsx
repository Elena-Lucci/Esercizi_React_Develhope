import React from 'react';


/**
 * Color component:
 * - Receives a `color` object prop with `id` and `name` properties
 * - Renders an <li> displaying the color.name
 */
export function Color({ color }) {
  return <li>{color.name}</li>;
}
