export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  const handleLogin = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    onLogin({ username, password, remember });
    console.log({ username, password, remember });
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
    setRemember(false);
  };

  const isDisabled = username === '' || password === '';

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div>
        <label>
          Remember me:
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberChange}
          />
        </label>
      </div>
      <button type="submit" disabled={isDisabled}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}