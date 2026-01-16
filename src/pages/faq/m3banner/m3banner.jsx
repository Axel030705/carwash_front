import React from 'react'

// personal inputs  
import './m3banner.css'
import tryimg from '@/assets/img/imgprueba.jpg'

export default function m3banner() {
  return (
    <section className='m3banner'>
        <div className='m3banner-container'>
            <img src={tryimg} alt="" className='m3banner-img'/>
            <div className='m3banner-content'>
                <h2 className='m3banner-content-title'>Como podemos ayudarte</h2>
                <p className='m3banner-content-text'>Encuentra respuestas rapidas sobre nuestros servicios de lavado, proceso de reservas, metodos de pago y mas</p>
            </div>
        </div>
    </section>
  )
}
