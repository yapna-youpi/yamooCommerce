import React from 'react'
import Card from '../../../addons/cards/Card'

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
        <Card data={data} imag="https://picsum.photos/400/484" />
        <Card data={data} imag="https://picsum.photos/400/484" />
        <Card data={data} imag="https://picsum.photos/400/484"/>
        <Card data={data} imag="https://picsum.photos/400/484" />
        <Card data={data} imag="https://picsum.photos/400/484" />
      </div>
    </>
  );
}

export default Produits