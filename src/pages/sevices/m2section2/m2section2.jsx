// react imports
import React, { useState, useEffect } from 'react'

// personal imports
import './m2section2.css'
import imgprueba from '@/assets/img/imgprueba.jpg';
import fetchBase from '@/fetch/fetch.jsx';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import 'swiper/css/bundle';
import 'swiper/css/grid';
import { data } from 'react-router-dom';

export default function m2section2() {

    const BASE_URL = import.meta.env.VITE_API_URL;

    const [servicios, setServicios] = useState([]);

        useEffect(() => {
        fetchBase('api/servicios')
            .then(data => {
                console.log(data);
                setServicios(data);
            })
            .catch(err => console.error(err));
    }, []);

  return (
    <section className='m2section2'>
        <div className='m2section2-container'>
            <form className='m2section2-form'>
                <input type="text" placeholder='Busca tu servicio' className='m2section2-input'/>
            </form>
            <div className='m2section2-swiper-container'>
                {servicios.map((servicio, index) => (
                    <article className='m2section2-card' key={index}>
                        <img src={BASE_URL + servicio.imagen} alt="" className='m2section2-img'/>
                        <div className='m2section2-card-content'>
                            <div className='m2section2-card-title-container'>
                                <h3 className='m2section2-card-title'>{servicio.nombre}</h3>
                                <p className='m2section2-card-price'>${servicio.precio}</p>
                            </div>
                            <p className='m2section2-card-description'>{servicio.descripcion_corta}</p>
                            <button className='m2section2-card-button'>Ver detalles</button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}
