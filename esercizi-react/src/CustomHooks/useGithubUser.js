// useGithubUser
//Create a custom hook called useGithubUser that receive a username, fetches the data of the corresponding Github user from the Github API and returns user, error, loading and the function to fetch the data.

import { useState, useCallback } from "react";

export function useGithubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async (username) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  }, []);

  return { user, loading, error, fetchUser };
}