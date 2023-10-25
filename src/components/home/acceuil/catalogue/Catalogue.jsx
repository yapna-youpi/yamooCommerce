import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,A11y, EffectFade, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import logo0 from "../../../../Data/livre_affiche/chambre.jpeg"
import logo1 from "../../../../Data/livre_affiche/magloire.jpeg"
import logo2 from "../../../../Data/livre_affiche/porc.jpeg"
import logo3 from "../../../../Data/livre_affiche/remi.jpeg"
import logo4 from "../../../../Data/livre_affiche/tamtam.jpeg"
import logo5 from "../../../../Data/livre_affiche/voiture.jpeg"
import logo6 from "../../../../Data/livre_affiche/lula.png"
import logo7 from "../../../../Data/livre_affiche/main.jpg"
import logo8 from "../../../../Data/livre_affiche/magapche.png"

// Import Swiper styles
import "swiper/css";
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay'
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./catalogue.css";

const Catalogue = () => {

  const {t} = useTranslation()
  const year = new Date().getFullYear();

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination,Autoplay, A11y]}
        slidesPerView={3}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo0} alt="tof catalogue" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo1} alt="tof catalogue" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="tof catalogue" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="tof catalogue" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo4} alt="tof catalogue" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo5} alt="tof catalogue" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Catalogue;
