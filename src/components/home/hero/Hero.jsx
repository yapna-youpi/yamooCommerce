import React from 'react'
import News from './slider2/News'
import Produits from './Produits/Produits'
import Carousel from '../../addons/carousel/Carousel'
import slides from '../../../info.json'

function Hero() {
  return (
    <div className='pt-8'>
        <Carousel slides={slides} />
        <h2 className='text-center md:text-3xl font-bold'>À ne pas manquer sur Polar-Edition!</h2>
        {/* <Banner /> */}
        <News />
        <Produits />
    </div>
  )
}

export default Hero