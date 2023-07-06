import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectFade, Autoplay, Pagination } from "swiper";
import logo0 from "../assets/la_voiture.PNG"
import logo1 from "../assets/le_petit_remi.PNG"
import logo2 from "../assets/Couverture_chambre.png"
import logo3 from "../assets/Couverture_kiti.png"
import logo4 from "../assets/Couverture_lula.png"
import logo5 from "../assets/foguien.PNG"
import logo6 from "../assets/le_porc_et_la_tortue.PNG"
import logo7 from "../assets/le_tamtam_magique.PNG"
import logo8 from "../assets/magloire.PNG"
// import logo7 from "../assets/le_tamtam_magique.PNG"

import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";

function More() {
  return (
    <div>
       <h2 className="font-semibold px-4 mt-4  text-4xl md:mt-16 md:pl-14 md:ml-1 ">Notre Catalogue</h2>
      <p className='py-5 px-4 md:px-0 md:pl-14 md:ml-1 font-semibold'>Choisissez le livre de votre lecture et de votre imaginaire!</p>
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2200 }}
      >
        <div data-aos="zoom-in">
          <SwiperSlide >
            <img  className="image-banner cursor-pointer" src={logo0} alt="la voiture" />
          </SwiperSlide>
        </div>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo1} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo2} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo3} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo4} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo5} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo6} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo7} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo8} alt="la voiture" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="image-banner cursor-pointer" src={logo7} alt="la voiture" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default More;