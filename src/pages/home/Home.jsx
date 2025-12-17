import React from 'react'

import './Home.css'

import M1banner from './m1banner/m1banner.jsx'
import M1section2 from './m1section2/m1section2.jsx'
import M1section3 from './m1section3/m1section3.jsx'

export default function Home() {
  return (
    <main className='Home'>
        <M1banner />
        <M1section2 />
        <M1section3 />
    </main>
  )
}
