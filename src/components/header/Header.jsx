import React, { useState, Link } from "react";
import {
  UilEnvelope,
  UilPhone,
  UilHome,
  UilBars,
  UilMultiply,
  UilShoppingCartAlt,
  UilUser,
  UilMapPin,
} from "@iconscout/react-unicons";

import Logo from "./assets/Logo.png";
import MobileLogo from './assets/mobileLogo.png'
import { useHistory } from "react-router-dom";

function Header() {
  const [closeBtn, setCloseBtn] = useState(false);
  const menuref = React.createRef();
  let History = useHistory()

  const handleClose = () => {
    setCloseBtn(!closeBtn);
    if (setCloseBtn) {
      menuref.current.classList.toggle("show");
    }
  };
  const nav = (route) => {
    History.push(route)
    menuref.current.classList.toggle("show");
    setCloseBtn(!closeBtn);
  };
  const choseImage = ()=> window.innerWidth <= 700
console.log(choseImage())
  
  return (
    <div className="header ">
      <div className="header-top w-full  bg-darker text-white md:rounded-b-3xl  py-2 px-5 md:relative md:px-10 flex justify-between items-center ">
        <nav className="md:w-5/12 ">
          <div className="logo">
            <img
              className=""
              src={choseImage ? Logo : MobileLogo}
              alt="la maison du polar"
            />
          </div>
   
          <div
            id="menu"
            ref={menuref}
            className="menu flex h-screen pt-28 md:pt-0  md:h-10 fixed z-40 top-0 left-0  justify-center mx-auto  ml-0 md:relative w-full text-white bg-darker 
                                hover:bg-contain md:bg-inherit py-7 md:py-0 px-15"
          >
            <ul className="md:flex   md:justify-between items-center ">
              <li
                onClick={() => nav("/")}
                className="md:text-bleur focus:text-white flex mx-auto mt-8 md:mt-0 items-center justify-between w-28  md:w-24"
              >
                Maison 
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilHome />
                </div>
              </li>
              <li
                onClick={() => nav("librairie")}
                className="md:text-bleur focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24"
              >
                Librairie
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilShoppingCartAlt />
                </div>
              </li>
              <li
                onClick={() => nav("contact")}
                className="md:text-bleur focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24"
              >
                Contact
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilMapPin />
                </div>
              </li>
              <li
                onClick={() => nav("/connexion")}
                className="md:text-bleur focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24"
              >
                Compte
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilUser />
                </div>
              </li>
            </ul>
          </div>

          <div
            className="close-btn absolute top-12 right-5  z-50 md:hidden"
            onClick={() => handleClose()}
          >
            {closeBtn ? (
              <UilMultiply size="40" color="#ffffff" />
            ) : (
              <UilBars size="40" color="#ffffff" />
            )}
          </div>
        </nav>
        <section className="hidden md:flex">
          <div className="message flex py-4 first:pt-0 last:pb-0 ">
            <span className="m-2">
              <UilEnvelope size="20" color="#fff" />
            </span>
            <a href='mailto:kboudjeka@gmail.com'>
              <div>
                <p className="text-bleur cursor-pointer">
                  kboudjeka@gmail.com
                </p>
                <p>Écrivez-nous</p>
              </div>
            </a>
          </div>
          <div className="call  flex py-0 first:pt-0 last:pb-0 ">
            <span className="m-2">
              <UilPhone size="20" color="#fff" />
            </span>
            <a className='link-whatsapp' href="https://api.whatsapp.com/send?phone=678551893">
              <div>
                <p className="text-bleur cursor-pointer">678 55 18 93</p>
                <p>Appelez le service client.</p>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div className="header-bottom"></div>
    </div>
  );
}

export default Header;
