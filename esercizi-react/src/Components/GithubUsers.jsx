// Create a new GithubUsers component that has a form with a text input and a submit button. The input will be used for searching a user by providing their username. Each user will be displayed in a list, where each list item is a GithubUser component. These components will take username as a prop.

import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [input, setInput] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernames((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button>
          Search user by username
        </button>
      </form>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}