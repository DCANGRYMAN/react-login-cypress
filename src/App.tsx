import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simula login simples
    if (username === 'admin' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  if (loggedIn) {
    return <h1>Bem-vindo, {username}!</h1>;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        data-cy="username"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-cy="password"
      />
      <button onClick={handleLogin} data-cy="login-button">
        Entrar
      </button>
    </div>
  );
}

export default App;
