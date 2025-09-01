import { useState } from "react";
import "./App.css";


export default function App() {

  const { user, error, loading, fetchUser } = useGithubUser();
  const [githubInput, setGithubInput] = useState("");

  const handleGithubSubmit = (e) => {
    e.preventDefault();
    if (githubInput.trim()) fetchUser(githubInput.trim());
  };

  return (
    <div>
      <h1>React Custom Hooks Demo</h1>

      {/* Github Hook */}
      <section>
        <h2>useGithubUser</h2>
        <form onSubmit={handleGithubSubmit}>
          <input
            value={githubInput}
            onChange={(e) => setGithubInput(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button>Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <p>{user.name}</p>
              <p>@{user.login}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
