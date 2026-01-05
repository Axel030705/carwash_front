import React from 'react'

import './m1section3.css'
import imgprueba from '@/assets/img/imgprueba.jpg'
import ws from '@/assets/home/m1section3/ws.svg'
import ig from '@/assets/home/m1section3/insta.svg'
import fb from '@/assets/home/m1section3/face.svg'
import arrow from '@/assets/home/m1section3/arrow.svg'
import clock from '@/assets/home/m1section3/clock.svg'

export default function M1section3() {
  return (
    <section className='m1section3'>
        <div className='m1section3-container'>
            <div className='m1section3-media'>
                <h2 className='m1section3-media-title'>Ponte en contacto</h2>
                <p className='m1section3-media-subtitle'>Reserva tu cita o haznos cualquier pregunta. Estamos listos para <br />atenderte</p>
                <button className='m1section3-media-button'>
                    <img src={ws} alt="" className='m1section3-media-icon'/>
                    <div className='m1section3-media-ajuste'>
                        <span className='m1section3-media-button-title'>Whatsapp</span>
                        <p className='m1section3-media-button-text'>Agenda rapida y directa</p>
                    </div>
                    <img src={arrow} alt="" className='m1section3-media-arrow'/>
                </button>
                <button className='m1section3-media-button2'>
                    <img src={ig} alt="" className='m1section3-media-icon'/>
                    <div className='m1section3-media-ajuste'>
                        <span className='m1section3-media-button-title'>Instagram</span>
                        <p className='m1section3-media-button-text'>Mira nuestros resultados</p>
                    </div>
                    <img src={arrow} alt="" className='m1section3-media-arrow'/>
                </button>
                <button className='m1section3-media-button2'>
                    <img src={fb} alt="" className='m1section3-media-icon'/>
                    <div className='m1section3-media-ajuste'>
                        <span className='m1section3-media-button-title'>Facebook</span>
                        <p className='m1section3-media-button-text'>Unete a nuestra comunidad</p>
                    </div>
                    <img src={arrow} alt="" className='m1section3-media-arrow'/>
                </button>
                <div className='m1section3-atention'>
                    <img src={clock} loading='lazy' alt="" className='m1section3-atention-icon'/>
                    <div className='m1section3-atention-item'>
                        <h3 className='m1section3-atention-title'>Horario de atencion</h3>
                        <p className='m1section3-atention-text'>Lunes a Sabado 8:00 AM - 6:00 PM</p>
                    </div>
                </div>
            </div>
            <img src={imgprueba} loading='lazy' alt="" className='m1section3-img'/>
        </div>
    </section>
  )
}
