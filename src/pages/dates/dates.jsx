import React, { use } from 'react'

// react imports
import { useState, useEffect, useContext } from 'react'

//  Muix imports
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useMediaQuery } from '@mui/material';

// personal imports
import './dates.css'
import carwash from '@/assets/navbar/carwash.svg'
import datearrow from '@/assets/dates/arrow-right.svg'
import datemoney from '@/assets/dates/money.svg'
import datetarjeta from '@/assets/dates/tarjeta.svg'
import deleteicon from '@/assets/dates/delete.svg'

import fetchBase from '@/fetch/fetch.jsx'

import { DateContext } from '@/context/DateContext'

export default function Dates() {
    
    const [servicios, setServicios] = useState([]);
    const { dates, setDates } = useContext(DateContext);
    const {initialState} = useContext(DateContext);
    const { savedates, dateConfirm, setDateConfirm } = useContext(DateContext);
    const [activeStep, setActiveStep] = useState('');
    const [ocupadas , setOcupadas] = useState([]);
    const isMobile = useMediaQuery('(max-width:768px)');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchBase('api/servicios')
            .then(data => setServicios(data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = () => {
        setDates(initialState);
        setActiveStep('');
    };



    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        const y = el.getBoundingClientRect().top + window.pageYOffset - 300;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    };

    const handleDate = (e) => {
        e.preventDefault();

        const required = {
            services: dates.services.id_servicio,
            date: dates.date ? dates.date.format('YYYY-MM-DD') : null,
            time: dates.time ? dates.time.format('HH:mm') : null,
            name: dates.data?.name,
            phone: dates.data?.phone,
            // car: dates.data?.car,
            pay_method: dates.pay_method
        };

        const requiredFields = [
            { value: dates.services, step: 'services' },
            { value: dates.date, step: 'calendar' },
            { value: dates.time, step: 'calendar' },
            { value: dates.data?.name, step: 'data' },
            { value: dates.data?.phone, step: 'data' },
            // { value: dates.data?.car, step: 'data' },
            { value: dates.pay_method, step: 'payment' }
        ];

        const firstInvalid = requiredFields.find(f => !f.value);

        if (!firstInvalid) {
            savedates(required);
        }else {
            setActiveStep(firstInvalid.step);
            scrollToSection(firstInvalid.step);
        }
        
    }

    const handleDateChange = (newDate) => {
        if (!newDate) return;

        const normalizedDate = dayjs(newDate).startOf('day');

        setDates(prev => ({
            ...prev,
            date: normalizedDate,
            time: null // MUY IMPORTANTE: resetear hora
        }));

        const day = normalizedDate.format('YYYY-MM-DD');

        console.log('DATE ENVIADA:', day);
        fetchBase(`api/hours?date=${day}`)
            .then(res => {
                // console.log('RESPUESTA BACKEND:', res);
            if (res.success && Array.isArray(res.data)) {
                const horasOcupadas = [...new Set(
                res.data.map(h => Number(h.hora_ocupada))
                )];
                setOcupadas(horasOcupadas);
            } else {
                setOcupadas([]);
            }
            })
            .catch(() => setOcupadas([]));
        // {console.log('console de dates', day, ocupadas)}

    };

    const horasDisponibles = Array.from({ length: 15 }, (_, i) => i + 8); // 8–22

  return (
    <section className='dates'>
        <div className='dates-container'>
            <div className='dates-selection-container'>
                <h2 className='dates-selection-title'>Reserva tu Cita</h2>
                <p className='dates-selection-text'>Completa el formulario en 4 simples pasos</p>

                <div className='dates-globals-container' id='services'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>1</p>
                        <h3 className='dates-global-title'>Elige tu Servicios</h3>
                        {activeStep === 'services' && <p className='dates-global-subtitle'>Selecciona un servicio</p>}
                    </div>
                    <div className={`dates-services-content ${!showAll ? 'collapsed' : ''}`} style={{marginTop: '5%'}}>
                        {servicios.map((servicio, index) => (
                            <label key={index} className="dates-services-option" onClick={() => setDates(prev => ({...prev, services: servicio}))}>
                            <div className="dates-services-opcion-section1">
                                <img src={carwash} alt="" loading="lazy" className="dates-services-icon" />
                                <input
                                type="radio"
                                name="service"
                                className="dates-services-input"
                                checked={dates.services?.nombre === servicio.nombre}
                                onChange={() => setDates(prev => ({...prev, services: servicio}))}
                                />
                                <span className="dates-services-checkmark"></span>
                            </div>

                            <strong className="dates-services-option-title">{servicio.nombre}</strong>
                            <p className="dates-services-option-text">
                                {servicio.descripcion_corta}
                            </p>
                            <div className="dates-services-option-line"></div>
                            <span className="dates-services-option-price">${servicio.precio}</span>
                            </label>
                        ))}
                    </div>
                    {servicios.length > 4 && (
                        <button
                            className="dates-more-button"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Ver menos' : 'Ver más'}
                        </button>
                    )}
                </div>
                <div className='dates-globals-container' id='dates-calendar-container'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>2</p>
                        <h3 className='dates-global-title'>Fecha y Hora</h3>
                        {activeStep === 'calendar' && <p className='dates-global-subtitle'>Selecciona la fecha y la hora</p>}
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                        <div className='dates-calendar-content'  id='calendar'>
                            <div className="dates-calendar-col1">
                                <StaticDatePicker 
                                value={dates.date}
                                onChange={handleDateChange}
                                defaultValue={dayjs()}
                                orientation="portrait"
                                minDate={dayjs()}
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
                                <select
                                    className="dates-hours-select"
                                    value={dates.time ? dates.time.hour() : ''}
                                    onChange={(e) =>
                                        setDates(prev => ({
                                        ...prev,
                                        time: dayjs().hour(Number(e.target.value)).minute(0)
                                        }))
                                    }
                                    >
                                    <option value="" disabled>
                                        Selecciona una hora
                                    </option>

                                    {horasDisponibles.map(hour => (
                                        <option
                                        key={hour}
                                        value={hour}
                                        disabled={ocupadas.includes(hour)}
                                        >
                                        {dayjs().hour(hour).format('hh:00 A')}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </LocalizationProvider>
                </div>
                <div className='dates-globals-container' id='data'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>3</p>
                        <h3 className='dates-global-title'>Ingresa tus Datos</h3>
                        {activeStep === 'data' && <p className='dates-global-subtitle'>Completa los datos obligatorios</p>}
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
                                value={dates.data.name}
                                onChange={e =>
                                    setDates(prev => ({
                                        ...prev,
                                        data:{
                                            ...prev.data,
                                            name: e.target.value
                                        }
                                    }))
                                }
                                />
                            </div>
                        </div>
                        <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Telefono (Whatsapp)</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">📞</span>
                                <input
                                value={dates.data.phone}
                                type="text"
                                id="telefono"
                                className="dates-input"
                                placeholder=" 669 110 2839"
                                onChange={e =>
                                    setDates(prev => ({
                                        ...prev,
                                        data:{
                                            ...prev.data,
                                            phone: e.target.value
                                        }
                                    }))
                                }
                                />
                            </div>
                        </div>
                        {/* <div className="dates-input-group">
                            <label htmlFor="nombre" className="dates-input-label">Marca y Modelo</label>
                            <div className="dates-input-wrapper">
                                <span className="dates-input-icon">🚘</span>
                                <input
                                type="text"
                                id="auto"
                                className="dates-input"
                                placeholder="Ej: Honda Civic 2022"
                                value={dates.data.car}
                                onChange={e =>
                                    setDates(prev => ({
                                        ...prev,
                                        data:{
                                            ...prev.data,
                                            car: e.target.value
                                        }
                                    }))
                                }
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
                                value={dates.data.plate}
                                onChange={e =>
                                    setDates(prev => ({
                                        ...prev,
                                        data:{
                                            ...prev.data,
                                            plate: e.target.value
                                        }
                                    }))
                                }
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='dates-globals-container' id='payment'>
                    <div className='dates-global-header'>
                        <p className='dates-global-number'>4</p>
                        <h3 className='dates-global-title'>Metodo de Pago</h3>
                        {/* {activeStep === 'payment' && <p className='dates-global-subtitle'>Selecciona un metodo de pago</p>} */}
                    </div>
                    <div className='dates-payment-container'>
                        {/* <label className="dates-payment-option">
                            <div className="dates-payment-opcion-section1">
                                <input type="radio" id="tarjeta" name="tarjeta" className="dates-payment-input" />
                                <span className="dates-payment-checkmark"></span>
                                <img src={datemoney} alt="" loading="lazy" className="dates-payment-icon" />
                                <div className='dates-payment-content'>
                                    <strong className="dates-payment-option-title">Pagar en Linea</strong>
                                    <p className="dates-payment-option-text">Tarjeta de Credito/Debito</p>
                                </div>
                            </div>
                        </label> */}
                        <label className="dates-payment-option" htmlFor="efectivo">
                            <div className="dates-payment-opcion-section1">
                                <input type="radio" id="efectivo" name="pago" 
                                    className="dates-payment-input" 
                                    value="efectivo"
                                    checked={dates.pay_method === "efectivo"}
                                    onChange={() => setDates(prev => ({...prev, pay_method: "efectivo"}))}
                                />
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
                <div className='dates-resume-header'>
                    <h3 className='dates-resume-title'>Resumen de Reserva</h3>
                    <a href="#" className='dates-resume-delete' onClick={handleDelete}>
                        <img src={deleteicon} alt="" loading="lazy" className='dates-resume-icon'/>
                    </a>
                </div>
                <div className='dates-resume-line'></div>
                <div className='dates-resume-section1'>
                    <div className='dates-resume-service-container'>
                        <p className='dates-resume-date-title'>Servicio</p>
                        <p className='dates-resume-service-title'>{dates.services?.nombre ?? '-'}</p>
                        <p className='dates-resume-service-tag'>{dates.services?.destacado === 1 && 'Destacado'}</p>
                    </div>
                    <p className='dates-resume-price'>${dates.services?.precio}</p>
                </div>
                <div className='dates-resume-section2'>
                    <div className='dates-resume-date-container'>
                        <p className='dates-resume-date-title'>Cita</p>
                        <p className='dates-resume-date'>{dates.date?.format('DD/MM/YYYY')} - {dates.time?.format('hh:mm A')}</p>
                    </div>
                    <a href="#dates-calendar-container" className='dates-resume-edit'>Editar</a>
                </div>
                <div className='dates-resume-line'></div>
                <div className='dates-resume-total'>
                    <p className='dates-resume-total-title'>Total a pagar</p>
                    <p className='dates-resume-total-price'>{dates.services?.precio}</p>
                </div>
                <button className='dates-resume-button' onClick={handleDate}>
                    Confirmar Reserva 
                    <img src={datearrow} alt="" loading='lazy' className='dates-resume-button-icon'/>
                </button>
            </div>
        </div>
    </section>
  )
}
