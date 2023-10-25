import React, { useEffect } from "react";
import UseAuthe from "../../../custom-hooks/UseAuthe";
import { useHistory, Link } from "react-router-dom";
import Agenda from "../agenda/Agenda";
import LoginAcceuil from "./LoginAceuil";
import FooterAcceuil from "./FooterAcceuil";
import log from "../../../Data/images/Logo.png";
import Aside from "../aside/Aside";
import Auteur from "../auteur/Auteur";
import News from "../hero/News";

import img1 from "../../../Data/livre_affiche/lula.png";
import img2 from "../../../Data/livre_affiche/main.jpg";
import img3 from "../../../Data/livre_affiche/chambre.jpeg";
import img4 from "../../../Data/livre_affiche/voiture.jpeg";

import img5 from "../assets/Logo_Gribou_Edition_1.png";
import img6 from "../assets/logo-polar.png";
import img7 from "../assets/Logo_Le-Crabe-Enchanté_1.png";
import img8 from "../assets/Logo_Bibliothèque-Africaine-du-Théâtre.png";
import Catalogue from "./catalogue/Catalogue";

import tof1 from "../assets/magapche.png"

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
          <span className="position-relative ">
            <img
              className="img_acceuil absolute top-0 left-0  cursor-pointer"
              src={log}
              alt="logo gribouillage"
            />
          </span>
          <div className="bg_argo absolute bottom-0 w-full h-20 md:h-80 bg-gray-400"></div>
        </div>
        <div className="secon_acceuil">
          <div className="text_accueil flex justify-between">
            <h4 className="rounded-lg py-2 px-8 md:py-5 md:px-20 text-2xl cursor-pointer bg-blue-900 text-darkorange font-bold">
              Abonnement gratuit
            </h4>
            <h4 className="rounded-lg py-2 px-8 md:py-5 md:px-20 text-2xl cursor-pointer bg-blue-900 text-darkorange font-bold">
              Service Client
            </h4>
          </div>
          <h3 className="zig text-center pt-24 md:pt-36 text-lg md:text-3xl w-full font-bold">
            Entrez dans l'univers 100% numérique de Gribouillage-press <br />
            (Une autre façon de concevoir l'edition.)
          </h3>
          <div className=" w-full mt-10 text-center">
            <a href="#connect">
              <button className="btn_go  text-sm sm:w-3/12 md:w-2/12 xs:px-7 mx-5">
                Se connecter
              </button>
            </a>
            <button
              className="btn_po text-sm sm:w-3/12 md:w-2/12 xs:px-7 mx-5"
              onClick={() => navigate.push("/login/1")}
            >
              S'inscrire
            </button>
          </div>
        </div>
        <h3 className="text_acceuil bg-slate-200 text-4xl mt-12 font-semibold  py-28 text-center md:px-32">
          Les littératures d'Afrique et de la Diasporas.
          <br />
          Littérature Générale et pour Enfants <br />
          Théatre - Poésie - Essai - Polar <br />
          Revues - Magazines - Journaux etc ...
        </h3>
        <div className="classeur_acceuil flex justify-between">
          <div className="img1_classeur sm:flex">
            <img className="w-full sm:w-6/12" src={img1} alt="classeur 1" />
            <img className="w-full sm:w-6/12" src={img2} alt="classeur 2" />
          </div>
          <div className="img1_classeur sm:flex">
            <img className="w-full sm:w-6/12" src={img3} alt="classeur 3" />
            <img className="w-full sm:w-6/12" src={img4} alt="classeur 4" />
          </div>
        </div>
        {/* <h1 className="text-center py-2 text-4xl font-bold">
          Livres africains pour toute la famille.
        </h1> */}
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
          <h3 className="zig text-center pt-12 pb-12 md:pt-36 text-lg md:text-3xl w-full font-bold">
            Ils nous ont fait confiance...
          </h3>
          <div className="classeur_acceuil flex justify-between">
            <div className="img1_classeur sm:flex">
              <img
                className="w-full sm:w-5/12 md:mx-14"
                src={img5}
                alt="classeur 1"
              />
              <img className="w-full sm:w-5/12" src={img6} alt="classeur 2" />
            </div>
            <div className="img1_classeur sm:flex">
              <img
                className="w-full sm:w-5/12 md:mx-14"
                src={img7}
                alt="classeur 3"
              />
              <img className="w-full sm:w-5/12" src={img8} alt="classeur 4" />
            </div>
          </div>
        </div>
        <h3 className="zig text-center pt-12 pb-12  text-sm md:text-3xl w-full font-bold">
          Vous aussi vous pouvez nous confiez la version numérique de votre
          ouvrage pour diffusion.
        </h3>
        <hr className="bg-orange-300 h-1 mx-6 translate-y-8 mb-20" />
        <h2 className="zig text-center pt-12 pb-12  text-sm md:text-3xl w-full font-bold">
          Notre Catalogue
        </h2>

        <Catalogue />

        <h3 className="zig text-center pt-12 pb-12  text-sm md:text-3xl w-full font-bold">
          Des livres pour tous les gouts , pour tous les ages et pour toutes les
          sensibilites.
        </h3>
        <hr className="bg-orange-300 h-1 mx-6 translate-y-8" />
        <h2 className="zig text-center pt-12 pb-12  text-sm md:text-3xl w-full font-bold">
          Nos dernieres parutions
        </h2>
        
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full m-3">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class=" w-full object-cover md:w-72"
                src={tof1}
                alt="Doctor's image"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                Auteur: Boudjeka Kamto
              </div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">
                Editeur: Polar Editions
              </p>
              <p class="mt-2 text-gray-500 text-lg">
                <b>Résumé:</b> Une gamine de 15 ans a disparu depuis plusieurs jours. Sa mere, une jeune dame qui l'eleve seule est inconsolable.<br/> Surtout qu'un vent mauvais souffle sur la ville...
              </p>
              
              <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full m-3">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class=" w-full object-cover md:w-72"
                src={img2}
                alt="Doctor's image"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                Auteur: Boudjeka Kamto
              </div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">
                Editeur: Le Crabe Enchante Editeur
              </p>
              <p class="mt-2 text-gray-500 text-lg">
                <b>Résumé: </b> Apres les tenors de la Negritude, le monde noir voit aujourd'hui naitre une nouvelle generation amoureuse d'humanitude.
              </p>
              
              <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full m-3">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img
                class=" w-full object-cover md:w-72"
                src={img1}
                alt="Doctor's image"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                Illustratrice: Ylarie Tiomasta
              </div>
              <div>
                Auteur: Boudjeka Kamto
              </div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">
                Editeur: Gribouillage Editions.
              </p>
              <p class="mt-2 text-gray-500 text-lg">
                <b>Résumé:</b> 
              </p>
              
              <button class="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <Agenda />
        <FooterAcceuil />
      </div>
    </div>
  );
};

export default Acceuil;

{
  /* <Aside /> */
}
{
  /* <Agenda />
          <Auteur />
        <News /> */
}
{
  /* <Agenda /> */
}
