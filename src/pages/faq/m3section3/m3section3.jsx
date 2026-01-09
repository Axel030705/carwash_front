import React, { useState, useEffect } from 'react'

// personal imports
import './m3section3.css'
import m3s3mail from '@/assets/faq/m3section3/mail.svg'
import Modal from '@/pages/globals/modal/modal.jsx';
import fetchBase from '@/fetch/fetch.jsx';

export default function m3section3() {

    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async ({name, email, message}) => {

        // pendiente
        const data = await fetchBase('api/correos', {
            Method: 'POST',
            body: {
                name,
                email,
                message
            }
        })
            
        if (data.success) {
            alert('data.message');
            setOpenModal(false);
        }else {
            alert(data.message);
        }

    }

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
                <button className='m3section3-button' onClick={() => setOpenModal(true)}>
                    <img src={m3s3mail} alt="" loading="lazy" className='m3section3-button-icon'/>
                    Enviar <br /> Correo
                </button>
            </div>
        </div>
        <Modal isOpen={openModal} isClose={() => setOpenModal(false)}>
            <div className="faq-modal-container">
                <div className="faq-modal-header">
                    <h2 className="faq-modal-title">Contactanos</h2>
                </div>
                <form className="faq-form" onSubmit={() => {handleSubmit()}}>
                    <div className="faq-input-group">
                        <label>Nombre Completo</label>
                        <input
                        type="text"
                        onChange={(e) => {}}
                        />
                    </div>

                    <div className="faq-input-group">
                        <label>Coreo</label>
                        <input
                        type="email"
                        onChange={(e) => {}}
                        />
                    </div>

                    <div className="faq-input-group">
                        <label>Mensaje</label>
                        <textarea
                        type="text"
                        onChange={(e) => {}}
                        />
                    </div>

                    <button className="faq-sign" type="submit">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </Modal>
    </section>
  )
}
