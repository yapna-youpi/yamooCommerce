import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import MobileLogo from "../../../Data/images/Logo.png"
import { UilFacebookF, UilWhatsappAlt , UilTwitter , UilLinkedin, UilArrowUp } from '@iconscout/react-unicons'

function Footer() {
    const { t } = useTranslation();
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
          <div className="footer-content md:h-56 pl-5 pr-4 md:pl-0 md:pr-0 md:pb-7 flex flex-col w-full md:rounded-t-3xl  text-leight md:flex-row md:justify-around  ">
            <div className=" md:w-/12  text-left md:px-10 md:py-5 ">
              <div className="py-5 pl-12">
                <img
                  className="w-32 h-32 md:w-48 md:h-36 cursor-pointer"
                  src={MobileLogo}
                  alt="la maison du polar"
                  onClick={()=>History.push("/home")}
                />
                <b className='pt-3 block'>Gribouillage-press (Editions - Media - Services)</b>
              </div>
              <br />
            </div>
            <div className=" md:w-2/12 mt-4 md:mt-0  md:px-5 md:pt-16 ">
              <b>À propos</b>
            </div>
            <div className="md:w-3/12 relative mt-4 md:mt-0 md:px-5 md:pt-16">
              <b>Suivez-nous</b>
              <div className="w-10 flex my-3 md:my-0">
                <a
                    className='mx-2'
                  href="https://web.facebook.com/gribouilage.agencelitteraire"
                  target="_blank"
                >
                  <span className="mt-3 mx-2 md:mx-0 py-2 px-2 rounded-lg flex justify-center items-center sm:hover:text-blue-600 bg-gray-600">
                    <UilFacebookF />
                  </span>
                </a>
                <a
                className='mx-2'
                  href="https://api.whatsapp.com/send?phone=678551893"
                  target="_blank"
                >
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-green-600 bg-gray-600">
                    <UilWhatsappAlt />
                  </div>
                </a>
                <a href="#" className='mx-2'>
                    
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-blue-600 bg-gray-600">
                    <UilTwitter />
                  </div>
                </a>
                <a href="#" className='mx-2'>
                  <div className="mt-3 mx-2 md:mx-0 px-2 py-2 rounded-lg flex justify-center items-center sm:hover:text-blue-800 bg-gray-600">
                    <UilLinkedin />
                  </div>
                </a>
              </div>
              <ul
                onClick={handleTop}
                className=" absolute flex justify-center  bg-orange-400 bottom-3 md:-bottom-6 right-3  cursor-pointer lg:right-10 text-white w-10 h-10 rounded-md text-3xl "
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
