import { useContext, useState } from 'react';

// estilos
import './navbar.css';
import carwash from '@/assets/navbar/carwash.svg';

// routing
import { NavLink } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';

export default function Navbar() {

  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={`navbar ${open ? 'open' : ''}`}>
      <div className="navbar-container">

        <div className="navbar-logo-container">
          <img src={carwash} alt="CarWash" className="navbar-logo" />
          <h2 className="navbar-slogan">CarWash El Flaco</h2>
        </div>

        {/* Links desktop */}
        <div className="navbar-link-container">
          <NavLink to="/" className="navbar-link">Inicio</NavLink>
          <NavLink to="/servicios" className="navbar-link">Servicios</NavLink>
          <NavLink to="/faq" className="navbar-link">FAQ</NavLink>

          {user ? (
            <>
              <NavLink to="/dates" className="navbar-link2">Agendar Cita</NavLink>
              <NavLink to="/perfil" className="navbar-link2">Perfil</NavLink>
            </>
          ) : (
            <NavLink to="/login" className="navbar-link2">Login</NavLink>
          )}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      <div className="navbar-mobile">
          <button className="navbar-close" onClick={closeMenu}>✕</button>
          <div className="navbar-logo-mobile-container">
            <img src={carwash} alt="CarWash" className="navbar-logo" />
            <h2 className="navbar-slogan">CarWash El Flaco</h2>
          </div>

        <NavLink to="/" onClick={closeMenu} className="navbar-link">Inicio</NavLink>
        <NavLink to="/servicios" onClick={closeMenu} className="navbar-link">Servicios</NavLink>
        <NavLink to="/faq" onClick={closeMenu} className="navbar-link">FAQ</NavLink>

        {user ? (
          <>
            <NavLink to="/dates" onClick={closeMenu} className="navbar-link2">Agendar Cita</NavLink>
            <NavLink to="/perfil" onClick={closeMenu} className="navbar-link2">Perfil</NavLink>
          </>
        ) : (
          <NavLink to="/login" onClick={closeMenu} className="navbar-link2">Login</NavLink>
        )}
      </div>
    </nav>
  );
}
