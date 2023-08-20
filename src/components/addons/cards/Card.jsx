import React from 'react'
// import {UisStar } from "@iconscout/react-unicons-solid  "
import { powerTable } from '../../../Utils'

function Card({ data, imag, value,url }) {

  return (
    <div className="carte shadow-lg md:shadow-none md:hover:shadow-lg sm:w-full md:w-6/12 lg:w-3/12  mx-auto border cursor-pointer">
      <a target="_blank" href={url}>
        <img
          className="img-produits w-full  h-64  lg:w-70 md:bject-cover md:object-center md:group-hover:opacity-75"
          src={imag}
          alt="Olive drab green ."
        />
      </a>
      <h3 class="mt-4 text-sm text-gray-700">{data.type}</h3>
      <div className="flex flex-row">
        {powerTable(value).map((item, index) => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              id="star"
            >
              <path
                fill="#ff8c00"
                d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
              ></path>
            </svg>
          );
        })}
      </div>
      <p class="mt-1 text-2xl font-serif font-medium text-gray-900">
        {data.author}
      </p>
      <p class="mt-1 text-lg font-medium text-gray-900">{data.title}</p>
    </div>
  );
}

export default Card