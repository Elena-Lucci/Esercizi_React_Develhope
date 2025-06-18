import React from "react";
import Welcome from "./components/Welcome";
import Age from "./components/Age";
import Message from "./components/Message";

function App() {
  return (
    <>
      <div>
      <Welcome name = "Elena" age={27} ></Welcome>
      </div>
    </>
  );
}

export default App;
