import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./Components/useCounter";
import { FilteredList } from "./Components/FilteredList";

const sampleData = [
  { id: 1, name: "Luca", age: 22 },
  { id: 2, name: "Anna", age: 17 },
  { id: 3, name: "Marco", age: 29 },
  { id: 4, name: "Sara", age: 16 },
];

function App() {
  const [people, setPeople] = useState(sampleData);
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <button onClick={decrement}>-</button>
      <span className="text-lg">{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <FilteredList list={people} />
    </>
  );
}

export default App;
