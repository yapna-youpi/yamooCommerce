import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay, Pagination  } from 'swiper'

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'

function Banner( { slides, Logo, data }) {
  console.log(data,"les data")
  return (
    <div className='banner'>
        <Swiper
        modules={[Pagination,Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={data}
        loop={true}
        autoplay={{delay: 2200}}
          huy  hgbh
      >
        {
        slides.map( (item, index) => (
            <SwiperSlide key={index}>
                <img className='image-banner' src={Logo} alt={item.title} />
                <p>{slides.title}</p>
            </SwiperSlide>
        ))
        }

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Banner