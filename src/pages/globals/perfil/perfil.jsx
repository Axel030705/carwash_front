// react imports
import {React, useContext} from 'react'
import { useNavigate } from 'react-router-dom';

// personal imports
import './perfil.css'
import { AuthContext } from '@/context/AuthContext';

export default function perfil() {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const handlelogout = async (e) => {
      e.preventDefault();


      await logout();
      navigate('/login');

    };

  return (
    <section className='perfil'>
        <div className='perfil-container'>
            <form className='perfil-form' onSubmit={handlelogout}>
                <button className='perfil-button'>Cerrar Sesión</button>
            </form>
        </div>
    </section>
  )
}
