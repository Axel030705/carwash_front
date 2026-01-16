// react imports
import { useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

// dayjs imports
import dayjs from 'dayjs';

// personal imports
import './perfil.css'

import { AuthContext } from '@/context/AuthContext';

import fetchBase from '@/fetch/fetch.jsx'

export default function perfil() {

    const { logout, user } = useContext(AuthContext);
    const [history, setHistory] = useState([]);

    const navigate = useNavigate();

    const handlelogout = async (e) => {
      e.preventDefault();

      await logout();
      navigate('/login');

    };

    useEffect(() => {
      fetchBase('api/datehistory')
        .then(data => {
          if (data.success && Array.isArray(data.data)) {
            const formatted = data.data.map(item => {
              const fecha = dayjs(item.fecha_cita);

              return {
                ...item,
                fecha_cita: fecha.format('DD/MM/YYYY'),
                hora_cita: fecha.format('HH:mm A')
              };
            });
            setHistory(formatted);
          } else {
            setHistory([]);
          }
        })
        .catch(() => setHistory([]));
    }, []);


  return (
    <section className='perfil'>
      {/* {console.log('console de perfil: ', user)} */}
      <div className="perfil-layout">

        {/* COLUMNA IZQUIERDA */}
        <div className="perfil-col-izquierda">

          <section className="perfil-header">
            <div className="perfil-avatar">
              <span>{user?.nombre?.slice(0, 2).toUpperCase()}</span>
            </div>

            <div className="perfil-header-info">
              <h2 className="perfil-nombre">{user.nombre}</h2>
              <p className="perfil-subtitulo">Cliente frecuente</p>
              <form className="perfil-header-actions" onSubmit={handlelogout}>
                <button className="perfil-btn perfil-btn-primario" type='button'>Editar perfil</button>
                <button className='perfil-btn perfil-btn-secundario' type='submit'>Cerrar Sesión</button>
              </form>
            </div>
          </section>

          <section className="perfil-seccion perfil-info">
            <h3 className="perfil-card-title">Información Personal</h3>

            <div className="perfil-info-list">
              <div className="perfil-info-item">
                <span>Nombre</span>
                <p>{user.nombre}</p>
              </div>
              <div className="perfil-info-item">
                <span>Teléfono</span>
                <p> {user.telefono ? '+52' + user.telefono : 'No has agregado un telefono'}</p>
              </div>
              <div className="perfil-info-item">
                <span>Correo</span>
                <p>{user.email}</p>
              </div>
              <div className="perfil-info-item">
                <span>Miembro desde</span>
                <p>{user.fecha_perfil}</p>
              </div>
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA */}
        <aside className="perfil-col-derecha">
            <div className="perfil-historial">
              <h3 className="perfil-card-title">Historial de citas</h3>
              <div className="perfil-actividad">
                {console.log(history)}
                {history.map((history, index) => (
                  <div key={index} tabIndex='0' className="perfil-actividad-item">
                    <div className="perfil-actividad-info">
                      <div className="perfil-actividad-icon perfil-ok"></div>
                      <div className="perfil-actividad-texto">
                        <strong>{history.nombre} - ${history.precio}</strong>
                        <span> {history.fecha_cita} - {history.hora_cita} - {history.carro_cita}</span>
                      </div>
                    </div>
                    <div className="perfil-actividad-oculto">
                      <strong>Información de la cita:</strong>
                      <span>Persona Atendida: {history.nombre_cita}</span>
                      <span>Telefono de la persona: {history.telefono_cita}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </aside>
      </div>
    </section>
  )
}
