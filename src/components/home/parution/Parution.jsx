import React from 'react'
import Card from '../../addons/cards/Card'
import tof1 from "../assets/magap.png"
import tof2 from "../assets/9782266320726ORI.jpg"
import tof3 from "../assets/9782365697323ORI.jpg"
import tof4 from "../assets/9782749174686ORI.jpg"

function Auteurs() {

    const data = {
        type: "polar serein",
        author: "MAGAPCHE",
        title: "Père et Fille"
    }


  return (
    <>
      <h2 className="font-semibold px-4 mt-4  text-4xl md:mt-16 md:pl-14 md:ml-1 ">Dernières Parutions</h2>
      <p className='py-5 px-4 md:px-0 md:pl-14 md:ml-1 font-semibold'>Pour ne rien manquer des dernières sorties et celles à venir !</p>
      <div className="flex flex-wrap md:flex-row w-11/12 mx-auto justify-around">
        <Card data={data} imag={tof1} value={5} />
        <Card data={data} imag={tof2} value={4} />
        <Card data={data} imag={tof3} value={4}/>
        <Card data={data} imag={tof4} value={5} />
        {/* <Card data={data} imag="https://picsum.photos/400/484" /> */}
      </div>
    </>
  );
}

export default Auteurs