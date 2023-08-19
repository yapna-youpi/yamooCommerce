import React, { useState, Link } from "react";
import User from './User'
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


// import Logo from "./assets/Logo.png";
import MobileLogo from "./assets/mobileLogo.png";
import { useHistory } from "react-router-dom";
import Banner from "../home/slider1/Banner";
import slides from '../../info.json'
import LogoBooks from "./assets/book2.png"

function Header() {
  const [closeBtn, setCloseBtn] = useState(false);
  const menuref = React.createRef();
  let History = useHistory();

  const handleClose = () => {
    setCloseBtn(!closeBtn);
    if (setCloseBtn) {
      menuref.current.classList.toggle("show");
    }
  };
  const nav = (route) => {
    History.push(route);
    menuref.current.classList.toggle("show");
    setCloseBtn(!closeBtn);
  };
  const choseImage = () => window.innerWidth <= 700;
  console.log(choseImage());

  const data = {
    element: 1
  }

  return (
    <div className="header ">

      <div className="header-top p-6 md:p-0 w-full  text-white md:rounded-b-3xl   px-5 md:relative md:px-10 flex justify-between items-center ">
        <div className="logo md:h-16 md:-translate-y-7 md:translate-x-10 md:w-2/12">
          <img className="logo-polar w-32 h-16 md:w-24 md:h-24" src={MobileLogo} alt="la maison du polar" />
        </div>
        <div className="hidden md:block md:w-7/12">
          <Banner data={1} Logo={LogoBooks} slides={slides} />
        </div>
        <div onClick={() => nav("/login")} className="hidden md:block cursor-pointer  text-gray-200 py-7  md:w-1/12 items-center flex-col">
        {/* s */}
          <UilUser size="60" color="#ffffff"  />
          <h3>Compte</h3>
        </div>
      </div>
         

      <div className="header-bottom flex w-full justify-between pt-5">
        <nav className="md:w-5/12 pl-5">
          <div
            id="menu"
            ref={menuref}
            className="menu flex h-full pt-20 md:pt-0  md:h-10 fixed z-40 top-0 left-0  justify-center mx-auto  ml-0 md:relative w-full text-white bg-darkorange 
                      hover:bg-contain md:bg-inherit py-7 md:py-0 px-15"
          >
            <ul className="md:flex md:text-darker font-bold md:justify-between items-center w-96">
              <li
                onClick={() => nav("/")}
                className="menu-li"
              >
                ACCEUIL
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilHome />
                </div>
              </li>
              <li
                onClick={() => nav("librairie")}
                className="menu-li"
              >
                LIBRAIRIE
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilShoppingCartAlt />
                </div>
              </li>
              <li
                onClick={() => nav("contact")}
                className="menu-li"
              >
                CONTACT
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilMapPin />
                </div>
              </li>
              <li
                onClick={() => nav("/login")}
                className="menu-li"
              >
                COMPTE
                <div className="rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden">
                  <UilUser />
                </div>
              </li>
            </ul>
          </div>

          <div
            className="close-btn absolute top-10 right-5  z-40 md:hidden"
            onClick={() => handleClose()}
          >
            {closeBtn ? (
              <UilMultiply size="45" color="#ffffff" />
            ) : (
              <UilBars size="45" color="#ffffff" />
            )}
          </div>
        </nav>
        <section className=" flex  z-10 md:text-darker md:font-bold md:pr-10">
          <div className="message flex  py-4 first:pt-0 last:pb-0 ">
            <span className="m-2">
              <UilEnvelope size="20" color="#ff8c00" />
            </span>
            <a href="mailto:kboudjeka@gmail.com" target='_blank'>
              <div>
                {/* <p className="text-darker cursor-pointer">
                  kboudjeka@gmail.com
                </p> */}
                <p className="text-indigo-700">Écrivez-nous</p>
              </div>
            </a>
          </div>
          <div className="call  flex  py-0 first:pt-0 last:pb-0 ">
            <span className="m-2">
              <UilPhone size="20" color="#ff8c00" />
            </span>
            <a
              className="link-whatsapp" 
              target='_blank'
              href="https://api.whatsapp.com/send?phone=678551893"
            >
              <div>
                {/* <p className="text-darker cursor-pointer">678 55 18 93</p> */}
                <p className="text-indigo-700">Appelez le service client.</p>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div className="header-bottom">
      {/* <User /> */}
      </div>
    </div>
  );
}

export default Header;
