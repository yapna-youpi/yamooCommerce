import React from 'react'
import Card from '../../addons/cards/Card'
import tof1 from "../../../Data/livres/lula.png"
import tof2 from "../../../Data/livres/main.png"
import tof3 from "../../../Data/livres/magapche.png"
import tof4 from "../../../Data/livres/lula.png"

function Auteurs() {

    const LivreParu = [
      {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "Lula aime les livres",
      },
      {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "La Main tendue",
      },
      {
        type: "Magapche",
        author: "Boudjeka Kamto",
        title: "père et fille",
      },
      {
        type: "polar serein",
        author: "Boudjeka Kamto",
        title: "Lula aime les livres",
      },
    ];

  return (
    <>
      <h2 className="font-semibold px-4 mt-4  text-4xl md:mt-16 md:pl-14 md:ml-1 ">
        Dernières Parutions
      </h2>
      <p className="py-5 px-4 md:px-0 md:pl-14 md:ml-1 font-semibold">
        Pour ne rien manquer des dernières sorties et celles à venir !
      </p>
      <div className="flex flex-wrap md:flex-row w-11/12 mx-auto justify-around">
        <Card data={LivreParu[0]} imag={tof1} value={5} url="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" />
        <Card url="https://amzn.eu/d/5iLlP6Z" data={LivreParu[1]} imag={tof2} value={4} />
        <Card url="https://www.amazon.fr/Lombre-dun-doute-Boudjeka-KAMTO/dp/9956515035/ref=mp_s_a_1_1?keywords=Boudjeka+KAMTO&qid=1691393857&sr=8-1" target="_blank" data={LivreParu[2]} imag={tof3} value={4} />
        <Card data={LivreParu[0]} imag={tof1} value={5} url="https://www.amazon.fr/LULA-aime-livres-Boudjeka-KAMTO-ebook/dp/B0CFB452MP/ref=mp_s_a_1_1?crid=3GBS56R5YQAT3&keywords=lula+aime+les+livres&qid=1692008040&sprefix=%2Caps%2C215&sr=8-1" />
        {/* <Card data={LivreParu[3]} imag={tof4} value={5} /> */}
        {/* <Card data={data} imag="https://picsum.photos/400/484" /> */}
      </div>
    </>
  );
}

export default Auteurs