import React from 'react'
import Banner from './slider1/Banner'
import News from './slider2/News'
import Produits from './Produits/Produits'

function Hero() {
  return (
    <div className='pt-8'>
        <h2 className='text-center md:text-3xl md:font-semibold'>À ne pas manquer sur Polar-Edition!</h2>
        <Banner />
        <News />
        <Produits />
    </div>
  )
}

export default Hero