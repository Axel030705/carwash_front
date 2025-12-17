import React from 'react'

// personal imports
import './m2section2.css'
import imgprueba from '@/assets/img/imgprueba.jpg';

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid, Autoplay } from "swiper/modules";
import 'swiper/css/bundle';
import 'swiper/css/grid';

export default function m2section2() {
  return (
    <section className='m2section2'>
        <div className='m2section2-container'>
            <form className='m2section2-form'>
                <input type="text" placeholder='Busca tu servicio' className='m2section2-input'/>
            </form>
            <div className='m2section2-swiper-container'>
                <Swiper
                    modules={[Pagination, Navigation, Grid, Autoplay]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    speed={3000}
                    autoplay={{ delay: 500, disableOnInteraction: true, pauseOnMouseEnter: true }}
                    breakpoints={{
                        320: { slidesPerView: 1,
                            grid: {
                                rows: 2,
                                fill: 'row',
                            }
                         },
                        768: { slidesPerView: 2,
                            grid: {
                                rows: 2,
                                fill: 'row',
                            }
                         },   
                        1024: { slidesPerView: 4,
                            grid: {
                                rows: 2,
                                fill: 'row',
                            }
                         },  
                    }}
                >
                {Array.from({length: 13}).map((_, index) => (
                    <SwiperSlide key={index}>
                        <article className='m2section2-card'>
                            <img src={imgprueba} alt="" className='m2section2-img'/>
                            <div className='m2section2-card-content'>
                                <div className='m2section2-card-title-container'>
                                    <h3 className='m2section2-card-title'>Lavado Ejemplo</h3>
                                    <p className='m2section2-card-price'>$400</p>
                                </div>
                                <p className='m2section2-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda ad reiciendis? Molestias assumenda, sit voluptatem exercitationem et.</p>
                                <button className='m2section2-card-button'>Ver detalles</button>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
