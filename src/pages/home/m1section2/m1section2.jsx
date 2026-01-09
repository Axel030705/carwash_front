
// personal imports
import './m1section2.css'
import imgprueba from '@/assets/img/imgprueba.jpg'
import fetchBase from '@/fetch/fetch.jsx';
import Modal from '@/pages/globals/modal/modal.jsx';
import { AuthContext } from '@/context/AuthContext';

// react imports
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/bundle';
import { DateContext } from '@/context/DateContext';
import React from 'react';


export default function M1section2() {

    const BASE_URL = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [item, setItem] = useState({});
    const [servicios, setServicios] = useState([]);
    const { dates, setDates } = useContext(DateContext);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchBase('api/destacados')
        .then(data => {setServicios(data)})
        .catch(err => console.error(err));
    }, []);


    const handleNavigate = () => {
        navigate('/dates');
    }

  return (
    <section className='m1section2'>
        <div className='m1section2-container'>
            <h2 className='m1section2-title'>Nuestros Servicios  Premium</h2>
            <p className='m1section2-subtitle'>Soluciones completas para el cuidado de tu vehiculo</p>
            <div className='m1section2-swiper-container'>
                {servicios.map((servicio, index) => (
                    <article className='m1section2-card' key={index}>
                        <div className='m1section2-img-tag'>
                            Destacado
                        </div>
                        <img src={BASE_URL + servicio.imagen} alt="" className='m1section2-img'/>
                        <div className='m1section2-card-content'>
                            <div className='m1section2-card-title-container'>
                                <h3 className='m1section2-card-title'>{servicio.nombre}</h3>
                                <p className='m1section2-card-price'>${servicio.precio}</p>
                            </div>
                            <p className='m1section2-card-description'>{servicio.descripcion_corta}</p>
                            <button className='m1section2-card-button' onClick={() => {setOpenModal(true); setItem(servicio); }}>Ver detalles</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>

        <Modal isOpen={openModal} isClose={() => setOpenModal(false)}>
            <div className='m1section2-modal'>
                <img src={BASE_URL + item.imagen} alt="" className='m1section2-modal-img'/>
                <div className='m1section2-modal-content'>
                    <div className='m1section2-modal-title-container'>
                        <h3 className='m1section2-modal-title'>{item.nombre}</h3>
                        <p className='m1section2-modal-price'>${item.precio}</p>
                    </div>
                    <p className='m1section2-modal-description'>{item.descripcion}</p>
                    {user ?
                        <button className='m1section2-card-button' onClick={() => {setDates({...dates, services: item}); handleNavigate()}}>Agendar cita de este servicio</button> :
                        <button className='m1section2-card-button' onClick={() => navigate('/login')}>Inicia sesión para agendar</button>
                    }
                </div>
            </div>
        </Modal>
    </section>
  )
}
