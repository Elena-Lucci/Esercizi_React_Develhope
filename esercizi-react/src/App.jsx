import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


export default function App() {
  const { count, increment, decrement, reset } = useCounter();
  const { form, handleChange } = useForm();
  const { user, error, loading, fetchUser } = useGithubUser();
  const { location, getLocation, error: locError, loading: locLoading } = useCurrentLocation();
  const [githubInput, setGithubInput] = useState("");

  const handleGithubSubmit = (e) => {
    e.preventDefault();
    if (githubInput.trim()) fetchUser(githubInput.trim());
  };

  return (
    <div>
      <h1>React Custom Hooks Demo</h1>

      {/* Counter Hook */}
      <section>
        <h2>useCounter</h2>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </section>

      {/* Form Hook */}
      <section>
        <h2>useForm</h2>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </section>

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

      {/* Location Hook */}
      <section>
        <h2>useCurrentLocation</h2>
        <button onClick={getLocation}>Get Current Location</button>
        {locLoading && <p>Getting location...</p>}
        {locError && <p>{locError}</p>}
        {location && (
          <pre>{JSON.stringify(location, null, 2)}</pre>
        )}
      </section>
    </div>
  );
}
