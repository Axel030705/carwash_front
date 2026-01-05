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
                  <h3 className='m3section2-question-title'>¿Cómo hago una reserva para lavar mi auto?</h3>
                </div>
                <p className='m3section2-question-text'>
                  Para reservar, ve a la sección 'Reservar' en el menú principal. Selecciona el tipo de lavado que necesitas (básico, completo, detallado), elige la fecha y hora disponible en el calendario interactivo, y confirma tu cita ingresando tus datos básicos. Recibirás un correo de confirmación al instante
                </p>
              </a>
              <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
                <div className='m3section2-title-container'>
                  <img src={m3s2money} alt="" className='m3section2-question-icon'/>
                  <h3 className='m3section2-question-title'>- ¿Qué métodos de pago aceptan?</h3>
                </div>
                <p className='m3section2-question-text'>
                  Aceptamos pagos con cualquier tarjeta Mastercard o Visa, incluyendo opciones populares como BBVA, Santander, Citibanamex, HSBC, Banorte, American Express, y Revolut. Todos los pagos se procesan de forma segura, garantizando rapidez y protección.
                </p>
              </a>
              <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
                <div className='m3section2-title-container'>
                  <img src={m3s2calendar_cancel} alt="" className='m3section2-question-icon'/>
                  <h3 className='m3section2-question-title'>- ¿Puedo cancelar o reagendar mi cita?</h3>
                </div>
                <p className='m3section2-question-text'>
                  Puedes modificar tu cita con mínimo 24 horas de anticipación directamente desde tu perfil. Si el tiempo es menor, será necesario contactarnos por WhatsApp o correo para ayudarte manualmente.
                </p>
              </a>
              <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
                <div className='m3section2-title-container'>
                  <img src={m3s2clock} alt="" className='m3section2-question-icon'/>
                  <h3 className='m3section2-question-title'>- ¿Cuánto tiempo demora el servicio completo?</h3>
                </div>
                <p className='m3section2-question-text'>
                  El tiempo estimado varía según el tipo de lavado y los extras seleccionados. Un servicio completo puede tardar entre 1 y 3 horas, dependiendo del nivel de detalle y personalización que elijas.
                </p>
              </a>
              <a href='#' onClick={e => e.preventDefault()} className='m3section2-question-content'>
                <div className='m3section2-title-container'>
                  <img src={m3s2drop} alt="" className='m3section2-question-icon'/>
                  <h3 className='m3section2-question-title'>¿Usan productos ecológicos?</h3>
                </div>
                <p className='m3section2-question-text'>
                Usamos productos 100% biodegradables y libres de químicos agresivos, diseñados para cuidar tu auto sin dañar el planeta. Cada fórmula está pensada para ofrecer limpieza profunda, brillo duradero y respeto total por el medio ambiente.
                Tu carro limpio, tu conciencia tranquila.
                </p>
              </a>
            </div>
        </div>
    </section>
  )
}
