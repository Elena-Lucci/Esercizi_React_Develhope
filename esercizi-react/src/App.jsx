import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Colors } from "./Components/Colors.jsx";
import { Color } from "./Components/Color.jsx";

const sampleColors = [
  { id: 1, name: "Rosso" },
  { id: 2, name: "Verde" },
  { id: 3, name: "Blu" },
];

function App() {
  return (
    <>
      <Colors colors={sampleColors} />
    </>
  );
}

export default App;
