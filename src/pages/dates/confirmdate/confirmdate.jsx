// react imports
import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// personal imports
import './confirmdate.css'
import { AuthContext } from '@/context/AuthContext';

export default function ConfirmDate() {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [storage, setStorage] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('dateconfirm');
        if (saved) {
            setStorage(JSON.parse(saved));
        }
    }, []);

    if (!storage) return null;

  return (
    <section className='confirm'>
        {/* {console.log('console de confirmdate', storage)} */}
        <div className='confirm-container'>
            <svg className='confirm-icon' viewBox="0 0 506.4 506.4">
                <circle cx="253.2" cy="253.2" r="249.2" fill="#54B265"/>
                <path fill="#F4EFEF" d="M372.8 200.4l-11.2-11.2c-4.4-4.4-12-4.4-16.4 0L232 302.4l-69.6-69.6c-4.4-4.4-12-4.4-16.4 0L134.4 244c-4.4 4.4-4.4 12 0 16.4l89.2 89.2c4.4 4.4 12 4.4 16.4 0l10.4-10.4.8-.8 121.6-121.6c4.4-4.4 4.4-11.6 0-16.4z"/>
                <path fill='#F4EFEF' d="M253.2 506.4C113.6 506.4 0 392.8 0 253.2S113.6 0 253.2 0s253.2 113.6 253.2 253.2S392.8 506.4 253.2 506.4zm0-498.4C118 8 8 118 8 253.2s110 245.2 245.2 245.2 245.2-110 245.2-245.2S388.4 8 253.2 8z"/>
                <path fill='#F4EFEF' d="M231.6 357.2c-4 0-8-1.6-11.2-4.4l-89.2-89.2c-6-6-6-16 0-22l11.6-11.6c6-6 16.4-6 22 0l66.8 66.8L342 186.4c2.8-2.8 6.8-4.4 11.2-4.4s8 1.6 11.2 4.4l11.2 11.2c6 6 6 16 0 22L242.8 352.4c-3.2 3.2-7.2 4.8-11.2 4.8zM154 233.6c-2 0-4 .8-5.6 2.4l-11.6 11.6c-2.8 2.8-2.8 8 0 10.8l89.2 89.2c2.8 2.8 8 2.8 10.8 0l132.8-132.8c2.8-2.8 2.8-8 0-10.8l-11.2-11.2c-2.8-2.8-8-2.8-10.8 0L234.4 306c-1.6 1.6-4 1.6-5.6 0l-69.6-69.6c-1.2-1.2-3.2-2-5.2-2z"/>
            </svg>
            <h2 className='confirm-title'>Reserva Confirmada!!</h2>
            <p className='confirm-subtitle'>Todo listo{user ? ', ' + user.nombre : ''}. Te esperamos en Carwash El Flaco para dejar tu auto como nuevo.</p>
            <div className='confirm-button-container'>
                {user ? <button className='confirm-button' onClick={() => navigate("/perfil")}> 
                    <svg className='confirm-button-icon' viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M716 190.9v-67.8h-44v67.8H352v-67.8h-44v67.8H92v710h840v-710H716z m-580 44h172v69.2h44v-69.2h320v69.2h44v-69.2h172v151.3H136V234.9z m752 622H136V402.2h752v454.7z" fill="#ffffff" /><path d="M319 565.7m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /><path d="M510 565.7m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /><path d="M701.1 565.7m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /><path d="M319 693.4m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /><path d="M510 693.4m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /><path d="M701.1 693.4m-33 0a33 33 0 1 0 66 0 33 33 0 1 0-66 0Z" fill="#ffffff" /></svg>
                    Ver Mis Citas
                </button> : ''}
                <button className='confirm-button' onClick={() => navigate("/")}> 
                    Volver
                </button>
            </div>
            <div className='confirm-content'>
                <div className='confirm-resume-header'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className='confirm-header-icon'>
                        <path d="M426.667,0c-46.933,0-85.333,38.4-85.333,85.333V192c0,12.8,8.533,21.333,21.333,21.333h128c12.8,0,21.333-8.533,21.333-21.333V85.333C512,38.4,473.6,0,426.667,0z M469.333,170.667H384V85.333c0-23.467,19.2-42.667,42.667-42.667s42.667,19.2,42.667,42.667V170.667z"/>
                        <path d="M362.667,384c-12.8,0-21.333,8.533-21.333,21.333v21.333c0,12.8,8.533,21.333,21.333,21.333S384,439.467,384,426.667v-21.333C384,392.533,375.467,384,362.667,384z"/>
                        <path d="M362.667,405.333c-12.8,0-21.333,8.533-21.333,21.333c0,23.467-19.2,42.667-42.667,42.667S256,450.133,256,426.667v-21.333c0-12.8-8.533-21.333-21.333-21.333c-12.8,0-21.333,8.533-21.333,21.333v21.333c0,46.933,38.4,85.333,85.333,85.333S384,473.6,384,426.667C384,413.867,375.467,405.333,362.667,405.333z"/>
                        <path d="M426.667,0h-320c-36.267,0-64,27.733-64,64v341.333c0,12.8,8.533,21.333,21.333,21.333s21.333-8.533,21.333-21.333V64c0-12.8,8.533-21.333,21.333-21.333H352c-6.4,12.8-10.667,27.733-10.667,42.667v320c0,12.8,8.533,21.333,21.333,21.333S384,418.133,384,405.333v-320c0-23.467,19.2-42.667,42.667-42.667C454.4,42.667,454.4,0,426.667,0z"/>
                        <path d="M298.667,469.333c-23.467,0-42.667-19.2-42.667-42.667v-21.333c0-12.8-8.533-21.333-21.333-21.333H21.333C8.533,384,0,392.533,0,405.333v21.333C0,473.6,38.4,512,85.333,512h213.333C326.4,512,326.4,469.333,298.667,469.333z M85.333,469.333c-23.467,0-42.667-19.2-42.667-42.667h170.667c0,14.933,4.267,29.867,10.667,42.667H85.333z"/>
                        <path d="M192,106.667h-42.667C136.533,106.667,128,115.2,128,128s8.533,21.333,21.333,21.333H192c12.8,0,21.333-8.533,21.333-21.333S204.8,106.667,192,106.667z"/>
                        <path d="M277.333,192h-42.667c-12.8,0-21.333,8.533-21.333,21.333c0,12.8,8.533,21.333,21.333,21.333h42.667c12.8,0,21.333-8.533,21.333-21.333C298.667,200.533,290.133,192,277.333,192z"/>
                        <path d="M277.333,106.667H256c-12.8,0-21.333,8.533-21.333,21.333S243.2,149.333,256,149.333h21.333c12.8,0,21.333-8.533,21.333-21.333S290.133,106.667,277.333,106.667z"/>
                        <path d="M192,277.333h-42.667c-12.8,0-21.333,8.533-21.333,21.333c0,12.8,8.533,21.333,21.333,21.333H192c12.8,0,21.333-8.533,21.333-21.333C213.333,285.867,204.8,277.333,192,277.333z"/>
                        <path d="M277.333,277.333H256c-12.8,0-21.333,8.533-21.333,21.333c0,12.8,8.533,21.333,21.333,21.333h21.333c12.8,0,21.333-8.533,21.333-21.333C298.667,285.867,290.133,277.333,277.333,277.333z"/>
                        <path d="M149.333,192c-12.8,0-21.333,8.533-21.333,21.333c0,12.8,8.533,21.333,21.333,21.333c12.8,0,21.333-8.533,21.333-21.333C170.667,200.533,162.133,192,149.333,192z"/>
                    </svg>
                    <h3 className='confirm-header-title'>Resumen de tu Cita</h3>
                </div>
                <div className='confirm-resume-content'>
                    <div className='confirm-resume-item'>
                        <h4 className='confirm-resume-title'>Servicio</h4>
                        <p className='confirm-resume-text'>{storage.services.nombre}</p>
                    </div>
                    <div className='confirm-resume-item'>
                        <h4 className='confirm-resume-title'>Cliente</h4>
                        <p className='confirm-resume-text'>{storage.data.name}</p>
                    </div>
                    <div className='confirm-resume-item'>
                        <h4 className='confirm-resume-title'>Fecha</h4>
                        <p className='confirm-resume-text'>{storage.date}</p>
                    </div>
                    <div className='confirm-resume-item'>
                        <h4 className='confirm-resume-title'>Hora</h4>
                        <p className='confirm-resume-text'>{storage.time}</p>
                    </div>
                </div>
                <div className='confirm-divider'></div>
                <div className='confirm-map-container'>
                    <h4 className='confirm-map-title'>UBICACION</h4>
                    <div className='confirm-map-content'>
                        <div className='confirm-map-text-container'>
                            <p className='confirm-map-text'>"Nombre de barberia"</p>
                            <p className='confirm-map-subtext'>Av. Hidalgo 1234, Guadalajara Jalisco</p>
                            <a href="#" className='confirm-map-link'>Como llegar ↗️</a>
                        </div>
                        <div className='confirm-iframe-container'>
                            {/* <iframe src="" frameborder="0" ></iframe> */}
                        </div>
                    </div>
                </div>
                <div className='confirm-total-container'>
                    <div className='confirm-total-content'>
                        <h4 className='confirm-total-title'>Duracion Estimada</h4>
                        <p className='confirm-total-text'>~ {storage.services.duracion_min} min.</p>
                    </div>
                    <div className='confirm-total-content'>
                        <h4 className='confirm-total-title'>Total Estimado</h4>
                        <p className='confirm-total-price'>${storage.services.precio}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
