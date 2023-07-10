import React from 'react'
import Card from '../../addons/cards/Card'

import tof1 from "../assets/auteur1.jpg"
import tof2 from "../assets/auteur2.jpg"
function Auteurs() {

    const data = [
      {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "Père et Fille",
        tof: tof1
      },
      {
        type: "polar serein",
        author: "GNYNDON TAYI ",
        title: "Lydie Danielle",
        tof: tof2
      },
      {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "Père et Fille",
        tof: tof1
      },
    ];


  return (
    <>
      <h2 className="font-semibold px-4 mt-4  text-4xl md:mt-16 md:pl-14 md:ml-1 ">
        Nos auteurs
      </h2>
      <p className="py-5 px-4 md:px-0 md:pl-14 md:ml-1 font-semibold">
        Nos auteurs vous renseignent et vous offrent le meilleur de la
        litterature africaine.
      </p>
      <div className="flex flex-wrap md:flex-row w-11/12 mx-auto justify-around">
        { data.map((item,index) => (
            <Card data={item} key={index} imag={item.tof} value={1} />
          ))
        }
        {/* <Card data={data} imag="https://picsum.photos/400/484" value={0} /> */}
        {/* <Card data={data} imag="https://picsum.photos/400/484" /> */}
      </div>
    </>
  );
}

export default Auteurs