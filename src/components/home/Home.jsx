import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet";

import './home.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import More from './more/More'
import Newsletter from './newsletter/Newsletter';
import Aside from './aside/Aside';
import Agenda from './agenda/Agenda';
import Carousel from '../addons/carousel/Carousel';
import Auteurs from './auteurs/Auteurs';
import Parution from "./parution/Parution"
import News from './hero/News';
import slides from '../../info.json'
import Pricing from './pricing/Pricing';

function Home() {
    React.useEffect(() => {
        AOS.init({
          scrollContainer: "#approot",
          duration: 1000,
        });
    }, [])
    
      // console.log(Object.entries(Object.values(slides.catégorie1)))
    return (
      <div className="home relative">
        <Carousel slides={slides} />
        <News />
        <More  />
        <Parution />
        <Aside />
        <Pricing />
        <Agenda />
        <Auteurs />
        <Newsletter />
      </div>
    );
}

export default Home
