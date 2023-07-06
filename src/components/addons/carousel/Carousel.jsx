import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectFade, Autoplay  } from 'swiper'
import 'swiper/swiper-bundle.css';
import "swiper/css/effect-fade";
import 'swiper/css/autoplay'

import image1 from "../../home/assets/magapche.png"
import image2 from "../../home/assets/Couverture_kiti.png"
import image3 from "../../home/assets/Couverture_lula.png"
import image4 from "../../home/assets/Couverture_chambre.png"
import image5 from "../../home/assets/book.jpg"

function Carousel({slides}) {
  return (
    <div className="carouss pt-2 md:pt-20" data-aos="zoom-in-up">
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        // autoplay={{delay: 2000}}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={image1} alt="pere et fille " />
        </SwiperSlide>
          
      </Swiper>
    </div>
  );
}

export default Carousel