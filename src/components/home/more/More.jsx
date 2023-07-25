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
import logo9 from "../assets/la_main.jpeg"
// import logo7 from "../assets/le_tamtam_magique.PNG"

import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Container } from "@mui/material";

function More() {
  return (
    <div className="md:container md:mx-auto">
      <h2 className="font-semibold px-4 mt-4  text-4xl md:mt-16 md:pl-14 md:ml-1 ">
        Notre Catalogue
      </h2>
      <p className="py-5 px-4 md:px-0 md:pl-14 md:ml-1 font-semibold">
        Choisissez le livre de votre lecture et de votre imaginaire!
      </p>
      <Container>
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2200 }}
          center={true}
        >
          <div data-aos="zoom-in" className="carouss">
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo0}
                alt="la voiture"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo1}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo2}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo3}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo4}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo5}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo6}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo7}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo8}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo7}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo9}
                alt="la voiture"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
}

export default More;
