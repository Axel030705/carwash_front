import React from 'react'

// react imports
import { useState } from 'react'

//  Muix imports
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// personal imports
import './dates.css'
import carwash from '@/assets/navbar/carwash.svg'
import datearrow from '@/assets/dates/arrow-right.svg'

export default function Dates() {

    const [date, setDate] = useState(null);
    const [clock, setClock] = useState(null);
    {console.log(date, clock)}

  return (
    <section className='dates'>
        <div className='dates-container'>
            <div className='dates-selection-container'>
                <h2 className='dates-selection-title'>Reserva tu lavado</h2>
                <p className='dates-selection-text'>Completa el formulario en 4 simples pasos</p>

                <div className='dates-globals-container'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>1</p>
                        <h3 className='dates-global-title'>Elige tu Servicios</h3>
                    </div>
                    <div className='dates-services-content'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <label key={index} className="dates-services-option">
                            <div className="dates-services-opcion-section1">
                                <img src={carwash} alt="" loading="lazy" className="dates-services-icon" />
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
                <div className='dates-globals-container' id='dates-calendar-container'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>2</p>
                        <h3 className='dates-global-title'>Fecha y Hora</h3>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                        <div className='dates-calendar-content'>
                            <div className="dates-calendar-col1">
                                <StaticDatePicker 
                                value={date}
                                onChange={setDate}
                                defaultValue={dayjs()}
                                orientation='portrait'
                                slotProps={{
                                    actionBar: {
                                        actions: [null],
                                    },
                                    toolbar: {
                                        toolbarTitle: `Dia Seleccionado`,
                                    },
                                }}
                                />
                            </div>
                            <div className="dates-calendar-col2">
                                <DigitalClock 
                                value={clock}
                                onChange={setClock}
                                timeStep={60}   
                                ampm 
                                minTime={dayjs().hour(8).minute(0)}
                                maxTime={dayjs().hour(22).minute(0)}
                                skipDisabled
                                sx={{
                                    flex: 1,
                                    minHeight: 0,
                                    overflowY: 'auto',
                                }}
                                />
                            </div>

                        </div>
                    </LocalizationProvider>
                </div>
            </div>
            <div className='dates-resume-container'>
                <h3 className='dates-resume-title'>Resumen de Reserva</h3>
                <div className='dates-resume-line'></div>
                <div className='dates-resume-section1'>
                    <div className='dates-resume-service-container'>
                        <p className='dates-resume-service-title'>Lavado completo</p>
                        <p className='dates-resume-service-tag'>Destacado</p>
                    </div>
                    <p className='dates-resume-price'>$25.00</p>
                </div>
                <div className='dates-resume-section2'>
                    <div className='dates-resume-date-container'>
                        <p className='dates-resume-date-title'>Cita</p>
                        <p className='dates-resume-date'>{date?.format('DD/MM/YYYY')} - {clock?.format('hh:mm A')}</p>
                    </div>
                    <a href="#dates-calendar-container" className='dates-resume-edit'>Editar</a>
                </div>
                <div className='dates-resume-line'></div>
                <div className='dates-resume-total'>
                    <p className='dates-resume-total-title'>Total a pagar</p>
                    <p className='dates-resume-total-price'>$25</p>
                </div>
                <button className='dates-resume-button'>
                    Confirmar Reserva 
                    <img src={datearrow} alt="" loading='lazy' className='dates-resume-button-icon'/>
                </button>
            </div>
        </div>
    </section>
  )
}
