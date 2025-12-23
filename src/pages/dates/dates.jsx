import React from 'react'

// personal imports
import './dates.css'
import carwash from '@/assets/navbar/carwash.svg'

export default function dates() {
  return (
    <section className='dates'>
        <div className='dates-container'>
            <div className='dates-selection-container'>
                <h2 className='dates-selection-title'>Reserva tu lavado</h2>
                <p className='dates-selection-text'>Completa el formulario en 4 simples pasos</p>

                <div className='dates-services-container'>
                    <div className='dates-services-header'>
                        <p className='dates-services-number'>1</p>
                        <h3 className='dates-services-title'>Elige tu Servicios</h3>
                    </div>
                    <div className='dates-services-content'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <label key={index} className="dates-services-option">
                            <div className="dates-services-opcion-section1">
                                <img src={carwash} alt="" className="dates-services-icon" />
                                <input
                                type="radio"
                                name="service"
                                className="dates-services-input"
                                />
                                <span className="dates-services-checkmark"></span>
                            </div>

                            <strong className="dates-services-option-title">Título de la opción</strong>
                            <p className="dates-services-option-text">
                                Descripción o detalles adicionales. cosas extras y así Lorem ipsum dolor sit
                            </p>
                            <div className="dates-services-option-line"></div>
                            <span className="dates-services-option-price">$25</span>
                            </label>
                        ))}
                    </div>
                </div>

                
            </div>
            <div className='dates-resume-container'>

            </div>
        </div>
    </section>
  )
}
