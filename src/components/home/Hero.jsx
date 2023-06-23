import React from 'react'
import News from './slider2/News'
import Produits from './Produits/Produits'
import Carousel from '../addons/carousel/Carousel'
import More from "./slider1/Banner"
import slides from '../../info.json'

function Hero() {
  return (
    <div className='pt-8 relative'>
        <Carousel slides={slides} />
        <h2 className='text-center text-xl md:text-3xl md:mt-20 font-bold'>À ne pas manquer sur Polar-Edition!</h2>
        <More slides={slides} />
        <Produits />
    </div>
  )
}

export default Hero