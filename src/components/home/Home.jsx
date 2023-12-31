import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet";

import './home.css'
import More from './more/More'
import Newsletter from './newsletter/Newsletter';
import Aside from './aside/Aside';
import Agenda from './agenda/Agenda';
import Carousel from '../addons/carousel/Carousel';
import Parution from "./parution/Parution"
import News from './hero/News';
import slides from '../../info.json'
import Pricing from './pricing/Pricing';
import Auteur from './auteur/Auteur';

function Home() {
    React.useEffect(() => {
        window.scrollTo(0,0)
        AOS.init({
          scrollContainer: "#approot",
          duration: 1000,
        });
    }, [])
    
      // console.log(Object.entries(Object.values(slides.catégorie1)))
    return (
      <div className="home relative">
        <Carousel slides={slides} />
        <More  />
        <Parution />
        <Pricing />
        <Aside />
        <Agenda />
        <Auteur />
        <News />
        <Newsletter />
      </div>
    );
}

export default Home
