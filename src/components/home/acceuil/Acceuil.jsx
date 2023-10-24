import React, { useEffect } from "react";
import UseAuthe from "../../../custom-hooks/UseAuthe";
import { useHistory, Link } from "react-router-dom";
import Agenda from "../agenda/Agenda";
import LoginAcceuil from "./LoginAceuil";
import FooterAcceuil from "./FooterAcceuil";
import log from "../../../Data/images/Logo.png"
import Aside from "../aside/Aside";
import Auteur from "../auteur/Auteur";
import News from "../hero/News";

const Acceuil = () => {
  const { currentUser } = UseAuthe();
  const navigate = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home w-full absolute top-0 z-50 left-0 md:p-8">
      <div className="w-11/12 mx-auto md:w-full ">
        <div className="bgfi w-full relative h-80 md:h-screen">
          <span>
            <img
              className="w-48 h-20 absolute top-0 left-0 md:w-48 md:h-24 cursor-pointer"
              src={log}
              alt="logo gribouillage"
            />
          </span>
          <h3 className="zig text-center pt-24 md:pt-36 text-lg md:text-3xl w-full font-bold">
            Plongez dans l'univers de Gribouillage-press et passez <br /> des
            instants inoubliables avec vos familles
          </h3>
          <div className="absolute w-full top-56 md:top-72 text-center">
            <a href="#connect">
              <button className="btn_go mx-2">Se connecter</button>
            </a>
            <button
              className="btn_po mx-2"
              onClick={() => navigate.push("/login/1")}
            >
              S'inscrire
            </button>
          </div>
          <div className="bg_argo absolute bottom-0 w-full h-20 md:h-80 bg-gray-400"></div>
        </div>
        <h3 className="text-center pt-12 text-xl md:px-32">
          Des contenus africains pour les enfants Livres illustrés, livres
          audios, jeux, coloriages, fiches éducatives et fiches-parents
        </h3>
        <h1 className="text-center py-2 text-4xl font-bold">
          Livres africains pour toute la famille.
        </h1>
        {/* login de acceuil */}
        <LoginAcceuil />

        <h2 className="text-center text-2xl mt-24">
          Nouveau sur la plate-forme s'inscrire en un click{" "}
        </h2>
        <div className=" btnacceuil text-center mx-auto mb-4">
          <button onClick={() => navigate.push("/login/1")}>S'inscrire</button>
        </div>

        <hr className="bg-orange-300 h-1 mx-6 translate-y-8" />
        <div className="place">
        <Aside />
        <Agenda />
        <Auteur />
        <News />
          {/* <Agenda /> */}
        </div>
        <hr className="bg-orange-300 h-1 mx-6 translate-y-8 mb-20" />
        <FooterAcceuil />
      </div>
    </div>
  );
};

export default Acceuil;
