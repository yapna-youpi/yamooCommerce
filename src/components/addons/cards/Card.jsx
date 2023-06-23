import React from 'react'
import imag1 from '../../home/assets/9782266320726ORI.jpg'

function Card({ data, imag }) {
  return (
    <div className="carte shadow-lg md:shadow-none md:hover:shadow-lg sm:w-full md:w-6/12 lg:w-2/12  mx-auto border cursor-pointer">
      <img
        className="img-produits w-full  h-56  lg:w-60 md:bject-cover md:object-center md:group-hover:opacity-75"
        src={imag}
        alt="Olive drab green ."
      />
      <h3 class="mt-4 text-sm text-gray-700">{data.type}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">{data.author}</p>
      <p class="mt-1 text-lg font-medium text-gray-900">{data.title}</p>
    </div>
  );
}

export default Card