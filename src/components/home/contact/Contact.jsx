import React from 'react'
import {
  UilMultiply,
} from "@iconscout/react-unicons";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import img from "../../../image/9782266320726ORI.jpg"

function Contact() {
  const history = useHistory();
  return (
    <div className="contact absolute w-full md:flex bg-yellow-500 z-50 top-0 py-3 md:pt-10">
        <div onClick={()=>history.push('/')} className="close-btn absolute top-2 right-5  z-50 cursor-pointer">
          <UilMultiply size="40" color="#ffffff" />
        </div>
      <div className="contact-left hidden md:block md:w-4/12">
        <div className="icone"></div>
        <img src={img} alt="allez les gars" />
        <h2>Contacer La Maison Polar</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          obcaecati soluta itaque maxime beatae nemo voluptatem aliquam
          consequatur aliquid! Consequuntur vel repellat rem nemo! Ins
          perferendis soluta maiores sequi est.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dignissimos nostrum. Debitis, alias. Praesentium neque veritatis eaque, quis cupiditate minima quasi ad possimus, minus nesciunt facere culpa. Tempore, quidem incidunt.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores commodi iusto nam adipisci. Magni, temporibus nobis dolore, neque suscipit architecto voluptas eaque nesciunt itaque veritatis adipisci facilis excepturi atque unde.
        </p>
      </div>
      <div className="contact-right bg-red-600 w-11/12 px-4 md:w-8/12 md:px-20 md:py-24">
        <hr />
        <h3>information personnelle</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi, delectus praesentium vero laboriosam totam quo modi sed aliquam repellendus eligendi deserunt quaerat nulla quisquam atque libero fuga. Cupiditate, cum!</p>
      </div>
    </div>
  );
}

export default Contact