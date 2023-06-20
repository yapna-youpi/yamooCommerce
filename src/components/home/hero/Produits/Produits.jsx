import React from 'react'
import Card from '../../../addons/cards/Card'
import { imag1, imag2, imag3, imag4 } from "../../Images"

function Produits() {

    const data = {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "Père et Fille"
    }


  return (
    <>
      <h2 className="font-semibold text-4xl md:pl-36 md:ml-1 ">Nos livres</h2>
      <p className='py-5 md:pl-36 md:ml-1 font-semibold'>Pour ne rien manquer des dernières sorties et celles à venir !</p>
      <div className="flex flex-col md:flex-row w-10/12 mx-auto justify-around">
        <Card data={data} imag={imag1} />
        <Card data={data} imag={imag2} />
        <Card data={data} imag={imag3} />
        <Card data={data} imag={imag4} />
      </div>
    </>
  );
}

export default Produits