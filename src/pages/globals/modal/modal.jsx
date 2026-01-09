import React from 'react'

// personal imports
import './modal.css'

export default function modal({isOpen, isClose, children}) {

    if (!isOpen) return null;

  return (
    <section className='modal'>
        <div className='modal-container'>
            <button className='modal-close' onClick={isClose}>x</button>
            {children}
        </div>
    </section>
  )
}
