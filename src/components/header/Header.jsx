import React, {useState} from 'react'
import { UilEnvelope, UilPhone, UilHome, UilBars, UilMultiply ,
    UilShoppingCartAlt, UilUser , UilMapPin    } from '@iconscout/react-unicons'

import Logo from './assets/Logo.png'

function Header() {
    const [closeBtn, setCloseBtn] = useState(false)
    const menuref = React.createRef();

    const handleClose = ()=>{
        setCloseBtn(!closeBtn)
        if (setCloseBtn) {
            menuref.current.classList.toggle('show')
        }
        // document.getElementById('menu').classList.toggle("menu-visible")  
    }
    console.log(closeBtn)
  return (
    <div className='header w-full  bg-darker text-white md:rounded-b-3xl  py-2 px-10 '>
          <div className='header-top flex justify-between items-center '>
              <nav className='md:w-5/12 '>
                <div className="logo">
                    <img className="logo-lebon w-20 h-20" src={Logo}  alt="lebon vin d'alsace" />
                </div>
                
                <div id='menu' ref={menuref} className="menu flex h-screen pt-28 md:pt-0 md:mt-4 md:h-10 absolute z-40 top-0 left-0  justify-center mx-auto  ml-0 md:relative w-11/12 text-white bg-darker 
                                hover:bg-contain md:bg-inherit py-7 px-15">
                    <ul className='md:flex  md:justify-between items-center '>
                        <li className='md:text-slate-500 focus:text-white flex mx-auto mt-8 md:mt-0 items-center justify-between w-28  md:w-24'>
                            Acceuil 
                            <div className='rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden'>
                                <UilHome />
                            </div>
                        </li>
                        <li className='md:text-slate-500 focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24'>
                        Boutique  
                            <div className='rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden'>
                                <UilShoppingCartAlt  />
                            </div>
                        </li>
                        <li className='md:text-slate-500 focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24'>
                        Compte 
                            <div className='rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden'>
                                <UilUser  />
                            </div>
                        </li>
                        <li className='md:text-slate-500 focus:text-white flex mx-auto mt-8 md:mt-0  items-center justify-between w-28  md:w-24'>
                        Contact 
                        <div className='rounded-full w-10 h-10 flex justify-center items-center bg-cyan-600 md:hidden'>
                            <UilMapPin  />
                        </div>
                    </li>
                    </ul>
                </div> 

                <div className="close-btn absolute top-12 right-5  z-50 md:hidden"  onClick={()=>handleClose()} >
                   { closeBtn ? < UilMultiply size="40" color="#ffffff" />  :  < UilBars size="40" color="#ffffff" /> }
                </div>
              </nav>
              <section className='hidden md:flex'>
                <div className="message flex py-4 first:pt-0 last:pb-0">
                    <span className='m-2'><UilEnvelope size="20" color="#fff" /></span>
                    <div>
                        <p className='text-slate-500'>contact@eyamostore.com</p>
                        <p>Écrivez-nous</p>
                    </div>
                </div>
                <div className="call  flex py-0 first:pt-0 last:pb-0 ">
                    <span className='m-2'><UilPhone size="20" color="#fff" /></span>
                    <div>
                        <p className='text-slate-500'>696311887</p>
                        <p>Appelez le service client.</p>
                    </div>
                </div>
              </section>

          </div>
          <div className="header-bottom">

          </div>
    </div>
  )
}

export default Header