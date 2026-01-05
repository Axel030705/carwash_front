import React from 'react'

// personal imports
import './m3section3.css'
import m3s3mail from '@/assets/faq/m3section3/mail.svg'

export default function m3section3() {
  return (
    <section className='m3section3'>
        <div className='m3section3-container'>
            <div className='m3section3-content'>
                <div className='m3section3-text-container'>
                    <h3 className='m3section3-title'>
                        ¿No encontraste lo que buscabas?
                    </h3>
                    <p className='m3section3-text'>
                        Nuestro equipo de soporte está listo para ayudarte con cualquier <br /> duda específica
                    </p>
                </div>
                <button className='m3section3-button'>
                    <img src={m3s3mail} alt="" loading="lazy" className='m3section3-button-icon'/>
                    Enviar <br /> Correo
                </button>
            </div>
        </div>
    </section>
  )
}
