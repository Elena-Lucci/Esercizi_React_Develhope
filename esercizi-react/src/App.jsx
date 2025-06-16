import React from "react";
import Hello from "./components/Hello-function";
import Message from "./components/Message";

/*
  You can use <Hello /> more than once in App: each instance renders independently.
  You can also render <Message /> directly in App; it works exactly the same, it’ll just render the "What a beautiful day!" paragraph at that location.
*/
function App() {
  return (
    <>
      <div>
        <Hello></Hello>
      </div>
    </>
  );
}

export default App;
