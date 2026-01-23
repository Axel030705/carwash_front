import React from 'react'

// personal imports
import './m3section2.css'
import m3s2calendar from '@/assets/faq/m3section2/calendar.svg'
import m3s2money from '@/assets/faq/m3section2/money.svg'
import m3s2calendar_cancel from '@/assets/faq/m3section2/calendar_cancel.svg'
import m3s2clock from '@/assets/faq/m3section2/clock.svg'
import m3s2drop from '@/assets/faq/m3section2/drop.svg'

export default function m3section2() {
  return (
    <section className='m3section2'>
        <div className='m3section2-container'>
            <h3 className='m3section2-title'>
              Categorias de Ayuda
            </h3>
            <p className='m3section2-text'>
              Busca la respuesta que necesitas
            </p>
            <div className='m3section2-question-container'>
              <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
              <div className='m3section2-title-container'>
                <img src={m3s2calendar} alt="" className='m3section2-question-icon'/>
                <h3 className='m3section2-question-title'>¿Cómo hago una reserva para un corte o servicio?</h3>
              </div>
              <p className='m3section2-question-text'>
                Para reservar, ve a la sección “Reservar” en el menú principal. Selecciona el servicio que necesitas
                (corte, barba, combo, etc.), elige la fecha y hora disponible en el calendario interactivo
                y confirma tu cita ingresando tus datos básicos.
              </p>
            </a>

            <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
              <div className='m3section2-title-container'>
                <img src={m3s2money} alt="" className='m3section2-question-icon'/>
                <h3 className='m3section2-question-title'>¿Qué métodos de pago aceptan?</h3>
              </div>
              <p className='m3section2-question-text'>
                Aceptamos pagos únicamente en efectivo o mediante transferencia bancaria al momento de tu cita.
              </p>
            </a>

            <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
              <div className='m3section2-title-container'>
                <img src={m3s2calendar_cancel} alt="" className='m3section2-question-icon'/>
                <h3 className='m3section2-question-title'>¿Puedo cancelar o reagendar mi cita?</h3>
              </div>
              <p className='m3section2-question-text'>
                Para modificar o cancelar tu cita comunicate con nosotros al 55 55 55 55 55.
              </p>
            </a>

            <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
              <div className='m3section2-title-container'>
                <img src={m3s2clock} alt="" className='m3section2-question-icon'/>
                <h3 className='m3section2-question-title'>¿Cuánto tiempo dura el servicio?</h3>
              </div>
              <p className='m3section2-question-text'>
                El tiempo estimado depende del servicio seleccionado. Un corte o arreglo de barba
                suele durar entre 30 y 60 minutos, mientras que un servicio completo puede tomar
                hasta 90 minutos.
              </p>
            </a>

            <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
              <div className='m3section2-title-container'>
                <img src={m3s2drop} alt="" className='m3section2-question-icon'/>
                <h3 className='m3section2-question-title'>¿Qué productos utilizan?</h3>
              </div>
              <p className='m3section2-question-text'>
                Utilizamos productos profesionales de alta calidad, diseñados para cuidar tu cabello y tu piel.
                Nuestras fórmulas ayudan a mantener un acabado limpio, saludable y duradero.
                Tu estilo en las mejores manos.
              </p>
            </a>
            </div>
        </div>
    </section>
  )
}
