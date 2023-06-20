import React from 'react'
import imag1 from '../../home/assets/9782266320726ORI.jpg'

function Card({ data, imag }) {
  return (
    <div className='w-2/12 border'>
      <a href="#" class="w-2/12 border border-gray-500">
        <div class="">
          <img
            className='img-produits w-60 h-56'
            src={imag1}
            alt="Olive drab green ."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{data.type}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">{data.author}</p>
        <p class="mt-1 text-lg font-medium text-gray-900">{data.title}</p>
      </a>
      
    </div>
  );
}

export default Card