import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from "react-helmet";

import './home.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';


function Home() {
    React.useEffect(() => {
        AOS.init({
            scrollContainer: "#approot",
            duration: 1000,
        })
    }, [])

    return (
        <div className='home'>
            
        </div>
    )
}

export default Home
