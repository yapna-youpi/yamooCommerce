import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import MobileLogo from "./assets/Logo.png"
import { UilFacebookF, UilWhatsappAlt , UilTwitter , UilLinkedin, UilArrowUp } from '@iconscout/react-unicons'
import './footer.css'

function Footer() {
    const { t } = useTranslation();
    
    // useEffect(() => {
    //   let nav = document.querySelector("nav");
    //   window.addEventListener("scroll", () => {
    //     if (window.scrollY >= 30) {
    //       document.querySelector("#nav").classList.add("bg-visible");
    //     } else document.querySelector("#nav").classList.remove("bg-visible");
    //   });
    // }, []);

    const History = useHistory();

    const handleTop = ()=>{
      window.scrollTo(0, 0)
    }

    let AmList={
        en: ["http://ipercash.fr/politiques/aml_en.pdf","http://ipercash.fr/politiques/policy_en.pdf" , "http://ipercash.fr/politiques/terms_en.pdf"],
        fr: ["http://ipercash.fr/politiques/aml_fr.pdf","http://ipercash.fr/politiques/policy_fr.pdf" , "http://ipercash.fr/politiques/terms_fr.pdf" ]
    }
    let lang=JSON.parse(localStorage.getItem("lang")||'{"lang":"fr"}').lang

    return (
      <div className="footer relative font-bold">
        <footer>
          <div className="footer-content pl-5 pr-4 md:pl-0 md:pr-0 md:pb-5 flex flex-col w-full md:rounded-t-3xl  text-leight md:flex-row md:justify-around  ">
            <div className=" md:w-5/12  text-left md:px-10 md:py-5 ">
              <div className="py-5 pl-12">
                <img
                  className="w-32 h-32 md:w-48 md:h-36 cursor-pointer"
                  src={MobileLogo}
                  alt="la maison du polar"
                  onClick={()=>History.push("/home")}
                />
              </div>
              <p className=" md:mt-2">
                Gribouillage-Press est un groupe d’édition et de presse qui
                compte en son sein quatre maisons d’édition spécialisés chacune
                dans un domaine précis : - Griboui’age Editions pour la
                littérature générale et pour enfants. - Polar Editions pour les
                thrillers et le roman noir. - Le Crabe Enchanté pour la poésie
                et opinions. - La Bibliothèque Africaine pour le Théâtre.
              </p>
              <br />
            </div>
            <div className=" md:w-3/12 mt-4 md:mt-0  md:px-5 md:pt-16 ">
              <b>Les coups de cœur du mois</b>
              <ul className="footer-list2 mt-2 md:mt-0 text-left text-leight md:pt-8">
                <li>
                  Young adult : les romans qui abordent des sujets de société
                </li>
                <li>Koh-lanta - pochette - l'île au totem</li>
                <li>Fort boyard - pochette - la quête des boyards</li>
                <li>Le chant d’Achille et Circé </li>
                <li>Les 40 secrets du bonheur intime</li>
              </ul>
            </div>
            <div className=" md:w-3/12 mt-4 md:mt-0  md:px-5 md:pt-16 ">
              <b>À propos</b>
              <ul className="footer-list3 mt-2 md:mt-0 text-left text-leight md:pt-8 event:cursor-pointer">
                <p onClick={() => History.push("/histoire")}>
                  Qui sommes-nous ?
                </p>
                <p onClick={() => History.push("/login")}>Créer mon compte</p>
                <p>Questions fréquentes</p>
                <p>Mentions légales</p>
                <p onClick={() => History.push("/contact")}>Nous contacter</p>
              </ul>
            </div>
            <div className="md:w-2/12 relative mt-4 md:mt-0 md:px-5 md:pt-16">
              <b>Suivez-nous</b>
              <div className="w-10 flex md:flex-col my-3 md:my-0">
                <a
                  href="https://web.facebook.com/gribouilage.agencelitteraire"
                  target="_blank"
                >
                  <span className="mt-3 mx-2 md:mx-0 py-2 px-2 rounded-lg flex justify-center items-center sm:hover:text-blue-600 bg-gray-600">
                    <UilFacebookF />
                  </span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=678551893"
                  target="_blank"
                >
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-green-600 bg-gray-600">
                    <UilWhatsappAlt />
                  </div>
                </a>
                <a href="#">
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-blue-600 bg-gray-600">
                    <UilTwitter />
                  </div>
                </a>
                <a href="#">
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-blue-800 bg-gray-600">
                    <UilLinkedin />
                  </div>
                </a>
              </div>
              <ul
                onClick={handleTop}
                className=" absolute bg-orange-400 bottom-3 right-3  cursor-pointer lg:right-10 text-white w-10 h-10 rounded-md text-3xl "
              >
                <UilArrowUp size="45" />
              </ul>
            </div>
          </div>
          <div className="footer-bottom  flex justify-between pl-4 pr-0 md:px-8 py-4 text-slate-500 ">
            <p>
              © {new Date().getFullYear()} Gribouillage-Press. Tous droits
              réservés.
            </p>
            <p>
              Designer par{" "}
              <a
                className="text-white"
                href="https://api.whatsapp.com/send?phone=678719650"
                target="_blank"
              >
                Will-turner
              </a>
            </p>
          </div>
        </footer>
        {/* <div>bg-visible</div> */}
      </div>
    );
}

export default Footer
