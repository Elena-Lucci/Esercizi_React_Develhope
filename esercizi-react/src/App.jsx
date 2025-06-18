import React from "react";
import Welcome from "./components/Welcome";
import Age from "./components/Age";

/*
  You can use <Hello /> more than once in App: each instance renders independently.
  You can also render <Message /> directly in App; it works exactly the same, it’ll just render the "What a beautiful day!" paragraph at that location.
*/
function App() {
  return (
    <>
      <div>
      <Welcome name = {<strong>Elena</strong>} age={27} ></Welcome>
      </div>
    </>
  );
}

export default App;
