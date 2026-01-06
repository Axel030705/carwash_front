import React from 'react'

// personal imports
import './navbar.css'
import carwash from '@/assets/navbar/carwash.svg'

// react imports
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <div className='navbar-logo-container'>
                <img src={carwash} alt="" className='navbar-logo'/>
                <h2 className='navbar-slogan'>CarWash El Flaco</h2>
            </div>
            <div className='navbar-link-container'>
                <NavLink to="/" className='navbar-link'>Inicio</NavLink>
                <NavLink to="/servicios" className='navbar-link'>Servicios</NavLink>
                <NavLink to="/faq" className='navbar-link'>FAQ</NavLink>
                <NavLink to="/dates" className='navbar-link2'>Agendar Cita</NavLink>
                {localStorage.getItem('user') ?
                  <NavLink to="/profile" className='navbar-link2'>Perfil</NavLink> :
                  <NavLink to="/login" className='navbar-link2'>Login</NavLink>
                }
            </div>
        </div>
    </nav>
  )
}
