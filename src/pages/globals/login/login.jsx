// react imports
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// personal imports
import './login.css';
import { AuthContext } from '@/context/AuthContext';

export default function Login() {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await login({ username, password });

    if (data.success) {
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <p className="login-title">Bienvenido de nuevo</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-input-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-sign" type="submit">
            Iniciar Sesión
          </button>
        </form>

        <p className="login-signup">
          No tienes una cuenta?
          <button onClick={() => navigate('/register')}>
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}
