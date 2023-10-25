import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectFade, Autoplay, Pagination } from "swiper";
import logo0 from "../../../Data/livre_affiche/chambre.jpeg"
import logo1 from "../../../Data/livre_affiche/magloire.jpeg"
import logo2 from "../../../Data/livre_affiche/porc.jpeg"
import logo3 from "../../../Data/livre_affiche/remi.jpeg"
import logo4 from "../../../Data/livre_affiche/tamtam.jpeg"
import logo5 from "../../../Data/livre_affiche/voiture.jpeg"
import logo6 from "../../../Data/livre_affiche/lula.png"
import logo7 from "../../../Data/livre_affiche/main.jpg"
import logo8 from "../../../Data/livre_affiche/magapche.png"
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
              <a href="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" target="_blank">
              <img
                className="image-banner cursor-pointer"
                src={logo8}
                alt="la voiture"
              />
              </a>
              
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" target="_blank">
              <img
                className="image-banner cursor-pointer"
                src={logo7}
                alt="la voiture"
              />
              </a>
              
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo3}
                alt="la voiture"
              />
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" target="_blank">
              <img
                className="image-banner cursor-pointer"
                src={logo4}
                alt="la voiture"
              />
              </a>
              
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" target="_blank">
              <img
                className="image-banner cursor-pointer"
                src={logo6}
                alt="la voiture"
              />
              </a>
              
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo5}
                alt="la voiture"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                className="image-banner cursor-pointer"
                src={logo6}
                alt="la voiture"
              />
            </SwiperSlide> */}
          </div>
        </Swiper>
      </Container>
    </div>
  );
}

export default More;
