import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay, Pagination  } from 'swiper'
// import Logo0 from "../../header/assets/book0.png"
// import Logo1 from "../../header/assets/book1.png"
// import Logo2 from "../../header/assets/book2.png"
// import Logo3 from "../../header/assets/book3.png"
// import Logo4 from "../../header/assets/book4.png"
// import Logo6 from "../../header/assets/book6.png"
// import Logo7 from "../../header/assets/book7.png"
// import Logo8 from "../../header/assets/book5.png"

import image1 from "../../../Data/images/maison_edition/ribou.jpeg"
import image2 from "../../../Data/images/maison_edition/crabe.jpeg"
import image3 from "../../../Data/images/maison_edition/polar.jpeg"
import image4 from "../../../Data/images/maison_edition/kiosque.jpeg"
import image5 from "../../../Data/images/maison_edition/toile.jpeg"
import image6 from "../../../Data/images/maison_edition/biblio.jpeg"

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'

function Banner( { slides, Logo, data }) {
  
  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={data}
        loop={true}
        autoplay={{ delay: 2200 }}
      >
        <SwiperSlide>
          <img className="image-banner" src={image1} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={image2} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={image3} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={image4} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={image5} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={image6} alt={slides.title} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className="image-banner" src={Logo8} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={Logo3} alt={slides.title} />
        </SwiperSlide> */}
        {/* {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <p>{item.title}</p>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
}

export default Banner