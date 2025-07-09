// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.
//usememo serve per ottimizzare le performance evitando calcoli inutili e il re-rendering quando la lista non cambia.

import { useMemo } from 'react';

export function FilteredList({ list }) {
  const filtered = useMemo(() => {
    //il return di useMemo viene eseguito solo quando la lista cambia, e questo avviene grazie alla dipendenza passata come secondo argomento
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>
          <b>{item.name}</b> - {item.age} anni
        </li>
      ))}
    </ul>
  );
}
