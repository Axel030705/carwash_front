import React from 'react'

// react imports
import { useState, useEffect } from 'react'

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
import datemoney from '@/assets/dates/money.svg'
import datetarjeta from '@/assets/dates/tarjeta.svg'
import fetchBase from '@/fetch/fetch.jsx'

export default function Dates() {

    const [servicios, setServicios] = useState([]);
    const [date, setDate] = useState(null);
    const [clock, setClock] = useState(null);
    {console.log(date, clock)}

    useEffect(() => {
        fetchBase('/servicios')
            .then(data => setServicios(data))
            .catch(err => console.error(err));
    }, []);

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
                <div className='dates-globals-container' id='dates-calendar-container'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>3</p>
                        <h3 className='dates-global-title'>Ingresa tus Datos</h3>
                    </div>
                    <div className='dates-input-grid'>
                        <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Nombre Completo</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">👤</span>
                                <input
                                type="text"
                                id="nombre"
                                className="dates-input"
                                placeholder="Juan Pérez"
                                />
                            </div>
                        </div>
                        <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Telefono (Whatsapp)</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">📞</span>
                                <input
                                type="text"
                                id="telefono"
                                className="dates-input"
                                placeholder=" 696 116 2732"
                                />
                            </div>
                        </div>
                        <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Marca y Modelo</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">🚘</span>
                                <input
                                type="text"
                                id="auto"
                                className="dates-input"
                                placeholder="Ej: Honda Civic 2022"
                                />
                            </div>
                        </div>
                        <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Placas (opcional)</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">🪪</span>
                                <input
                                type="text"
                                id="placa"
                                className="dates-input"
                                placeholder="GTA-619-11"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dates-globals-container'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>4</p>
                        <h3 className='dates-global-title'>Metodo de Pago</h3>
                    </div>
                    <div className='dates-payment-container'>
                        <label className="dates-payment-option">
                            <div className="dates-payment-opcion-section1">
                                <input type="radio" id="tarjeta" name="tarjeta" className="dates-payment-input" />
                                <span className="dates-payment-checkmark"></span>
                                <img src={datemoney} alt="" loading="lazy" className="dates-payment-icon" />
                                <div className='dates-payment-content'>
                                    <strong className="dates-payment-option-title">Pagar en Linea</strong>
                                    <p className="dates-payment-option-text">Tarjeta de Credito/Debito</p>
                                </div>
                            </div>
                        </label>
                        <label className="dates-payment-option">
                            <div className="dates-payment-opcion-section1">
                                <input type="radio" id="efectivo" name="efectivo" className="dates-payment-input" />
                                <span className="dates-payment-checkmark"></span>
                                <img src={datetarjeta} alt="" loading="lazy" className="dates-payment-icon" />
                                <div className='dates-payment-content'>
                                    <strong className="dates-payment-option-title">Pagar en Cita</strong>
                                    <p className="dates-payment-option-text">Efectivo o Terminal de Pago</p>
                                </div>
                            </div>
                        </label>
                    </div>
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
