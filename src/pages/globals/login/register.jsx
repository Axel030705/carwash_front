
// react imports
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

// personal imports
import './login.css';
import fetchBase from '@/fetch/fetch.jsx';

export default function Login() {
  
    const navigate = useNavigate();
    // const [login, setLogin] = useState(true);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    useEffect(() => {
      setPasswordMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    const handleRegister = async (e) => {
      e.preventDefault();

      if (!passwordMatch) {
        alert('Las contraseñas no coinciden');
        return;
      }
      
      const payload = {
        username,
        email,
        password,
      };

      const data = await fetchBase('api/registrar', {
        method: 'POST',
        body: payload
      });

      console.log(data);

      if(data.success) {
        Swal.fire('Registrado Exitosamente', 'Bienvenido de nuevo', 'success');
        navigate('/login');
      }else {
        alert(data.message);
      }

    };
  
  return (
      <div className="login-page">
      <div className="login-form-container">
        <p className="login-title">Registrate</p>

        <form className="login-form" onSubmit={handleRegister}>
          <div className="login-input-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" name="username"  placeholder="" onChange={(e) => setUsername(e.target.value)} required/>
          </div>

          <div className="login-input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"  placeholder="" onChange={(e) => setEmail(e.target.value)} required/>
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Contrase&ntilde;a</label>
            <input type="password" name="password"  placeholder="" onChange={(e) => setPassword(e.target.value)} required/>
          </div>

            <div className="login-input-group">
            <label htmlFor="password">Confirmar contrase&ntilde;a <span className="login-error">{!passwordMatch && ('Las contraseñas no coinciden')}</span></label>
            <input type="password" name="password"  placeholder="" onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </div>

          <button className="login-sign" type="submit">Registrarse</button>
        </form>

        {/* <div className="login-social-message">
          <div className="login-line"></div>
          <p className="login-message">Login with social accounts</p>
          <div className="login-line"></div>
        </div>

        <div className="login-social-icons">
          <button aria-label="Log in with Google" className="login-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
            </svg>
            Google
          </button>

          <button aria-label="Log in with Twitter" className="login-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
            </svg>
            Facebook
          </button>

        </div> */}

          <p className="login-signup">
          Ya tienes una cuenta?
          <button rel="noopener noreferrer" onClick={() => navigate('/login')}>Inicia Sesion</button>
        </p>

      </div>
    </div>
     


    
  );
}
