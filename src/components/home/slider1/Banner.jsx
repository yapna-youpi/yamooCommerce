import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay, Pagination  } from 'swiper'
import Logo0 from "../../header/assets/book0.png"
import Logo1 from "../../header/assets/book1.png"
import Logo2 from "../../header/assets/book2.png"
import Logo3 from "../../header/assets/book3.png"

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'

function Banner( { slides, Logo, data }) {
  console.log(data,"les data")
  console.log(Logo,"les images")

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
          <img className="image-banner" src={Logo0} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={Logo1} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={Logo2} alt={slides.title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner" src={Logo3} alt={slides.title} />
        </SwiperSlide>
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