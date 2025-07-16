import { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response) throw new Error("User not found");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setUser(null);
      }
    }
    fetchUser();
  }, [username]);

  if (!user) return <p className="text-red-500">User "{username}" not found.</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login}/>
      <div>
        <h2>{user.name}</h2>
        <p>@{user.login}</p>
      </div>
    </div>
  );
}

export default GithubUser;