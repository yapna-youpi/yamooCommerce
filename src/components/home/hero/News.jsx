import React from "react";

import img1 from "../assets/logo-polar.png";
import img2 from "../assets/Logo_Gribou_Edition_1.png";
import img3 from "../assets/Logo_Le-Crabe-Enchanté_1.png";
import img4 from "../assets/Logo_Bibliothèque-Africaine-du-Théâtre.png";

function News() {

  return (
    <div className="bg-lightorange pb-8 mb-20">
      <h2 className="text-center text-xl md:text-3xl py-0 md:pt-14 md:mt-20 font-bold ">
        À Ne Pas Manquer Chez Nos Editeurs Partenaires !
      </h2>
      <div className="flex flex-row justify-around pt-7  sm:flex-row sm:flex-wrap sm:justify-between sm:w-6/12 mx-auto md:my-5 md:px-5 md:py-5">
        <p className="w-3/12">
          <img src={img1} alt="maaison polar" />
        </p>
        <p className="w-3/12">
          <img src={img2} alt="Gribou_Edition" />
        </p>
      </div>
      <div className="flex flex-row justify-around pt-7 pb-4 md:pb-0  sm:flex-row sm:flex-wrap sm:justify-between sm:w-6/12 mx-auto md:my-5 md:px-5 md:py-5">
        <p className="w-3/12">
          <img src={img3} alt="Le-Crabe-Enchanté" />
        </p>
        <p className="w-3/12">
          <img src={img4} alt="Bibliothèque-Africaine-du-Théâtre" />
        </p>
      </div>
    </div>
  );
}

export default News;