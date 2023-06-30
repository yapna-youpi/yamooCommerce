import React from 'react'
import {
  UilMultiply,
} from "@iconscout/react-unicons";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import img from "../../image/9782266320726ORI.jpg"
import { Input } from '../addons/input/Input';

import "./contact.css"

function Contact() {
  const history = useHistory();
  return (
    <div className="contact absolute w-full md:flex bg-gray-50 z-50 top-0 py-3">
      <div
        onClick={() => history.push("/")}
        className="close-btn absolute top-2 right-5  z-50 cursor-pointer"
      >
        <UilMultiply size="40" color="#ff8c00" />
      </div>
      <div className="contact-left hidden bg-darkorange md:block md:w-4/12">
        <div className="icone"></div>
        <img src={img} alt="allez les gars" />
        <h2>Contacer La Maison Polar</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          obcaecati soluta itaque maxime beatae nemo voluptatem aliquam
          consequatur aliquid! Consequuntur vel repellat rem nemo! Ins
          perferendis soluta maiores sequi est.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          dignissimos nostrum. Debitis, alias. Praesentium neque veritatis
          eaque, quis cupiditate minima quasi ad possimus, minus nesciunt facere
          culpa. Tempore, quidem incidunt. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Maiores commodi iusto nam adipisci.
          Magni, temporibus nobis dolore, neque suscipit architecto voluptas
          eaque nesciunt itaque veritatis adipisci facilis excepturi atque unde.
        </p>
      </div>

      <div className="contact-right w-11/12 px-4 md:w-8/12 md:px-32 md:py-24">
        <hr />
        <h3>information personnelle</h3>
        <form>
          <div style={{ marginBottom: "5px" }} className="form-group">
            <input
              id="name"
              className="w-full p-3 border active:border-emerald-400 rounded-md focus:border-sky-500"
              type="text"
              placeholder="First and Last Name"
            />
          </div>
        </form>
        <div style={{ marginBottom: "5px" }} className="form-group">
          <Input
            required
            className="name"
            label="First and Last Name"
            id="name"
            name="name"
            type="text"
            value=""
          />
        </div>
        <div className="form-groupe">
          <form>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" class="peer ..." />
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>
          </form>
        </div>
        <div>
          <fieldset>
            <input
              id="draft"
              class="peer/draft"
              type="radio"
              name="status"
              checked
            />
            <label for="draft" class="peer-checked/draft:text-sky-500">
              Draft
            </label>

            <input
              id="published"
              class="peer/published"
              type="radio"
              name="status"
            />
            <label for="published" class="peer-checked/published:text-sky-500">
              Published
            </label>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Contact