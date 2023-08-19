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
          <a href="https://www.amazon.fr/Lombre-dun-doute-Boudjeka-KAMTO/dp/9956515035/ref=mp_s_a_1_1?keywords=Boudjeka+KAMTO&qid=1691393857&sr=8-1" target='_blank'>
          <img src={image1} alt="pere et fille " />
          </a>
        </SwiperSlide>
          
      </Swiper>
    </div>
  );
}

export default Carousel