
// personal imports
import './m1section2.css'
import imgprueba from '@/assets/img/imgprueba.jpg'

// react imports

// swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/bundle';

export default function M1section2() {
  return (
    <section className='m1section2'>
        <div className='m1section2-container'>
            <h2 className='m1section2-title'>Nuestros Servicios  Premium</h2>
            <p className='m1section2-subtitle'>Soluciones completas para el cuidado de tu vehiculo</p>
            <div className='m1section2-swiper-container'>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={3000}
                    autoplay={{ disableOnInteraction: false, pauseOnMouseEnter: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },   
                        1024: { slidesPerView: 3 },  
                    }}
                >
                {Array.from({length: 4}).map((_, index) => (
                    <SwiperSlide key={index}>
                        <article className='m1section2-card'>
                            <img src={imgprueba} alt="" className='m1section2-img'/>
                            <div className='m1section2-card-content'>
                                <div className='m1section2-card-title-container'>
                                    <h3 className='m1section2-card-title'>Lavado Ejemplo</h3>
                                    <p className='m1section2-card-price'>$400</p>
                                </div>
                                <p className='m1section2-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda ad reiciendis? Molestias assumenda, sit voluptatem exercitationem et.</p>
                                <button className='m1section2-card-button'>Ver detalles</button>
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
