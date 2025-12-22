import React from 'react'

// personal imports
import './footer.css'
import carwash from '@/assets/navbar/carwash.svg'

export default function footer() {
  return (
    <section className='footer'>
        <div className='footer-container'>
        <div className='footer-title-container'>
            <img src={carwash} alt="" loading="lazy" className='footer-logo'/>
            <h2 className='footer-title'>CarWash El Flaco</h2>
        </div>
        <p className='footer-text'>© 2024 Carwash El Flaco. Todos los derechos reservados.</p>
        </div>
    </section>
  )
}
