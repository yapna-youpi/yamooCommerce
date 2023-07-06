import React from 'react'
import img from "../assets/Couverture_chambre.png"

function News() {
  return (
    <div className="bg-slate-100 py-5">
      <h2 className="text-center text-xl md:text-3xl py-5 md:py-0 md:mt-20 font-bold ">
        À Ne Pas Manquer Chez Nos Editeurs Partenaires !
      </h2>
      <div className="flex flex-row justify-around pt-7  sm:flex-row sm:flex-wrap sm:justify-between sm:w-6/12 mx-auto md:my-5 md:px-5 md:py-5">
        <p className="w-3/12">
          <img src={img} alt="le lieon" />
        </p>
        <p className="w-3/12">
          <img src={img} alt="le lieon" />
        </p>
      </div>
      <div className="flex flex-row justify-around pt-7 pb-4 md:pb-0  sm:flex-row sm:flex-wrap sm:justify-between sm:w-6/12 mx-auto md:my-5 md:px-5 md:py-5">
        <p className="w-3/12">
          <img src={img} alt="le lieon" />
        </p>
        <p className="w-3/12">
          <img src={img} alt="le lieon" />
        </p>
      </div>
    </div>
  );
}

export default News