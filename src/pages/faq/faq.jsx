import React from 'react'

// personal imports
import './faq.css'
import M3banner from './m3banner/m3banner.jsx'
import M3section2 from './m3section2/m3section2.jsx'
import M3section3 from './m3section3/m3section3.jsx'

export default function faq() {
  return (
    <div className='FAQ'>
        <M3banner/>
        <M3section2/>
        <M3section3/>
    </div>
  )
}
