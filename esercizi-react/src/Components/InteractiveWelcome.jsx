import { Welcome } from "./Welcome";
import { useState } from "react";

export function InteractiveWelcome() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
        {/* The input tag is controlled by React */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <Welcome name={name} />
    </div>
  );
}