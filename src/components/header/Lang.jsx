import React, { useState } from 'react'
import i18n from 'i18next'

import './lang.css'

const flag=["https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg", "https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"]


let language=JSON.parse(localStorage.getItem('lang')) || {lang: 'fr', flag: 1}

function Lang() {
    const [state, setState]=useState({lang: language.lang, flag: language.flag})
    const myRef=React.createRef(null)
    const changeLanguage=(lang, flag)=>{
        i18n.changeLanguage(lang)
        setState({lang: lang, flag: flag})
        // console.log(lang,flag)
        localStorage.setItem('lang', JSON.stringify({lang: lang, flag: flag}))
        // console.log(localStorage.getItem('lang'),localStorage.getItem('flag'))
    }
    const click=(target)=>{
        myRef.current.classList.toggle("show")
    }
    const blur=()=>{
        myRef.current.classList.remove('show')
    }
//    console.log(language)
    return (
        <div className="lang" onClick={(e)=>click(e.target)} onBlur={blur} tabIndex="0">
            <div className="active-lang">
                <div className="lang-item"><img src={flag[state.flag]} alt="default-flat"/> <span>{state.lang}</span></div>
                
            </div>
            <div className="langs" ref={myRef}>
                <div className="lang-item" onClick={()=>changeLanguage("en", 0)}><img src={flag[0]} alt="flat-prim"/> <span>en</span></div>
                {/* <div className="lang-item" onClick={()=>changeLanguage("en", 0)}><img src={flag[1]} alt="flat-troisio"/> <span>it</span></div>
                <div className="lang-item" onClick={()=>changeLanguage("en", 0)}><img src={flag[2]} alt="flat-quatro"/> <span>de</span></div> */}
                <div className="lang-item" onClick={()=>changeLanguage("fr", 1)}><img src={flag[1]} alt="flat-second"/> <span>fr</span></div>
            </div>
        </div>
    )
}

export default Lang
