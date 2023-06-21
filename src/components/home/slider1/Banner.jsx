import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay, Pagination  } from 'swiper'

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'

function Banner( { slides }) {
  return (
    <div className='banner'>
        <Swiper
        modules={[Pagination,Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={7}
        pagination
        loop={true}
        autoplay={{delay: 2000}}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
        slides.map( (item, index) => (
            <SwiperSlide key={index}>
                <img className='image-banner' src={item.image} alt={item.title} />
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