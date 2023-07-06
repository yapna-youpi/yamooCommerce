import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import MobileLogo from "./assets/Logo.png"
import { UilFacebookF, UilWhatsappAlt , UilTwitter , UilLinkedin  } from '@iconscout/react-unicons'

import './footer.css'

function Footer() {
    const { t } = useTranslation();
    // const History = useHistory();

    let AmList={
        en: ["http://ipercash.fr/politiques/aml_en.pdf","http://ipercash.fr/politiques/policy_en.pdf" , "http://ipercash.fr/politiques/terms_en.pdf"],
        fr: ["http://ipercash.fr/politiques/aml_fr.pdf","http://ipercash.fr/politiques/policy_fr.pdf" , "http://ipercash.fr/politiques/terms_fr.pdf" ]
    }
    let lang=JSON.parse(localStorage.getItem("lang")||'{"lang":"fr"}').lang

    return (
      <div className="footer relative font-bold">
        <footer>
          <div className="footer-content pl-5 pr-4 md:pl-0 md:pr-0 md:pb-5 flex flex-col w-full md:rounded-t-3xl  text-darker md:flex-row md:justify-around  ">
            <div className=" md:w-5/12  text-left md:px-10 md:py-5 text-darker">
              <div className="py-5">
                <img src={MobileLogo} alt="la maison du polar" />
              </div>
              <p className=" md:mt-2">
                mets un point d’honneur sur la littérature pour enfant
                qui doit être le socle de toutes les littératures
                GribouillageEditions, nous embrassons également les domaines
                moins vulgarisés que sont le Théâtre à travers la Bibliothèque
                Africaine du Théâtre, la poésie chez Les éditions du Crabe
                Enchanté et enfin le roman noir et policier chez Polar-Editions.
              </p>
              <br />
            </div>
            <div className=" md:w-3/12 mt-4 md:mt-0  md:px-5 md:pt-16 ">
              <b>Les coups de cœur du mois</b>
              <ul className="footer-list2 mt-2 md:mt-0 text-left text-darker md:pt-8">
                <li>
                  Young adult : les romans qui abordent des sujets de société
                </li>
                <li>Koh-lanta - pochette - l'île au totem</li>
                <li>Fort boyard - pochette - la quête des boyards</li>
                <li>Le chant d’Achille et Circé </li>
                <li>Les 40 secrets du bonheur intime</li>
              </ul>
            </div>
            <div className=" md:w-2/12 mt-4 md:mt-0  md:px-5 md:pt-16 ">
              <b>À propos</b>
              <ul className="footer-list3 mt-2 md:mt-0 text-left text-darker md:pt-8">
                <p>Qui sommes-nous ?</p>
                <p>Créer mon compte</p>
                <p>Questions fréquentes</p>
                <p>Mentions légales</p>
                <p>Nous contacter</p>
              </ul>
            </div>
            <div className="md:w-2/12  mt-4 md:mt-0 md:px-5 md:pt-16">
              <b>Suivez-nous</b>
                <div>
                  <a href='https://web.facebook.com/gribouilage.agencelitteraire' target='_blank'><div className='icon sm:hover:text-blue-600 '>< UilFacebookF  /></div></a>
                  <a href='https://api.whatsapp.com/send?phone=678551893' target='_blank'><div className='icon sm:hover:text-green-600'>< UilWhatsappAlt   /></div></a>
                  <a href='#' ><div className='icon sm:hover:text-blue-600' >< UilTwitter  /></div></a>
                  <a href='#' ><div className='icon sm:hover:text-blue-950'>< UilLinkedin  /></div></a>
                </div>
              <ul className="footer-list4 mt-2 md:mt-0 text-left text-darker md:pt-8 pb-5 md:pb-0"></ul>
            </div>
          </div>
          <div className="footer-bottom flex justify-between pl-4 pr-0 md:px-8 py-4 text-slate-500 ">
            <p>© 2023 Maison polar-edition. Tous droits réservés.</p>
            <p>Designer par <a href='https://api.whatsapp.com/send?phone=678719650' target='_blank'>Will-turner</a></p>
          </div>
        </footer>
      </div>
    );
}

export default Footer
