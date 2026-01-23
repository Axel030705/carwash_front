import React from 'react'

// personal imports
import './m2banner.css'
import banner from '@/assets/services/m2banner/banner.jpg'

export default function m2banner() {
  return (
    <section className='m2banner'>
        <div className='m2banner-container'>
            <img src={banner} alt="" className='m2banner-img'/>
            <div className='m2banner-content'>
                <h2 className='m2banner-title'>Nuestros Servicios</h2>
                <p className='m2banner-text'>
                    El servicio de barbería más preciso y profesional de la ciudad. Déjanos cuidar de tu imagen mientras te relajas.
                </p>
            </div>
        </div>
    </section>
  )
}
