import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet";

import './home.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Hero from './Hero';
import More from './slider1/Banner'
import Newsletter from './newsletter/Newsletter';
import Aside from './aside/Aside';
import Agenda from './agenda/Agenda';
import Carousel from '../addons/carousel/Carousel';
import Produits from './Produits/Produits';
import slides from '../../info.json'
import Pricing from './pricing/Pricing';

function Home() {
    React.useEffect(() => {
        AOS.init({
            scrollContainer: "#approot",
            duration: 1000,
        })
    }, [])
    
      // console.log(Object.entries(Object.values(slides.catégorie1)))
    return (
      <div className="home relative">
        <Carousel slides={slides} />
        <h2 className="text-center text-xl md:text-3xl md:mt-20 font-bold">
          À ne pas manquer sur Polar-Edition!
        </h2>
        <More data={5} slides={slides} />
        <Produits />
        <Aside />
        <Pricing />
        <Agenda />
        <Newsletter />
      </div>
    );
}

export default Home
