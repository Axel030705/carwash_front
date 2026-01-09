// react imports
import React from 'react'
import {useNavigate} from 'react-router-dom'

// personal imports
import './m1banner.css'

import m1bannerimg from '@/assets/home/m1banner/carrobanner.jpg' 

export default function m1banner() {

  const navigate = useNavigate()

  return (
    <section className='m1banner'>
        <div className='m1banner-container'>
        <img src={m1bannerimg} alt="" className='m1banner-img'/>
        <div className='m1banner-content'>
            <h1 className='m1banner-title'>TU AUTO MERECE LO MEJOR</h1>
            <p className='m1banner-text'>El servicio de autolavado más rápido y detallista de la ciudad. Déjanos <br />
             cuidar de tu vehículo mientras te relajas.</p>
            <div className='m1banner-buttons-container'>
                <a className='m1banner-button' href="" onClick={() => navigate('/dates')}>Reservar ahora</a>
                <a className='m1banner-button2' href="" onClick={() => navigate('/servicios')}>VER PRECIOS</a>
            </div>
        </div>
        </div>
    </section>
  )
}
