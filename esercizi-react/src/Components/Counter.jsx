import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  //non c'è differenza tra passare l'initialValue come props come fatto qui da me, o mettere useState(initialValue || 0).

  const incrementCounter = () => {
    setCounter(prev => prev + incrementAmount) ;
  };

  const decrementCounter = () => {
    setCounter(prev => prev - incrementAmount) ;
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  //   Using the functional form of the setter (passing a function) is preferred
  //   over an immediate value when the new state depends on the previous state.
  //   This ensures that you always receive the latest state value, even if
  //   multiple updates are queued or React batches them asynchronously.

  return (
    <>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}
