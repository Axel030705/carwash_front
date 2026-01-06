
// personal imports
import './m1section2.css'
import imgprueba from '@/assets/img/imgprueba.jpg'
import fetchBase from '@/fetch/fetch.jsx';

// react imports
import React, { useState, useEffect } from 'react';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/bundle';

export default function M1section2() {

    const BASE_URL = import.meta.env.VITE_API_URL;

    const [servicios, setServicios] = useState([]);

            useEffect(() => {
                fetchBase('api/destacados')
                .then(data => {
                setServicios(data);
            })
            .catch(err => console.error(err));
    }, []);
  return (
    <section className='m1section2'>
        <div className='m1section2-container'>
            <h2 className='m1section2-title'>Nuestros Servicios  Premium</h2>
            <p className='m1section2-subtitle'>Soluciones completas para el cuidado de tu vehiculo</p>
            <div className='m1section2-swiper-container'>
                {servicios.map((servicio, index) => (
                    <article className='m1section2-card' key={index}>
                        <img src={BASE_URL + servicio.imagen} alt="" className='m1section2-img'/>
                        <div className='m1section2-card-content'>
                            <div className='m1section2-card-title-container'>
                                <h3 className='m1section2-card-title'>{servicio.nombre}</h3>
                                <p className='m1section2-card-price'>${servicio.precio}</p>
                            </div>
                            <p className='m1section2-card-description'>{servicio.descripcion_corta}</p>
                            <button className='m1section2-card-button'>Ver detalles</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}
