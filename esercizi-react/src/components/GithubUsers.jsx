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