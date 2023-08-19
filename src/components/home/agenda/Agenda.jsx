import React from 'react'
import tablette from './tablette.png'

const Agenda = () => {
  return (
    <div class="flex flex-col justify-center h-auto mt-6 md:mt-20">
      <div class="relative flex flex-col bg-orange-400 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3  md:max-w-6xl mx-auto border border-white md:px-16 md:py-12">
        <div class="w-full bg-orange-400 md:w-2/3 flex flex-col space-y-2 p-3">
          <div class="flex justify-between item-center">
            <p class="text-white font-medium hidden md:block">Vacations</p>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p class="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span class="text-white font-normal">(76 reviews)</span>
              </p>
            </div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              Suivez-nous
            </div>
          </div>
          <h3 class="font-black text-gray-800 md:text-3xl text-xl">
            Lisez Sur tous les supports Tablettes, desktop et Telephones
          </h3>
          <p class="md:text-lg text-white text-base">
            La plate-forme des ecrivains africains pour 'editions des oeuvres originales'
          </p>
          {/* <p class="text-xl font-black text-gray-800">
            $110
            <span class="font-normal text-gray-600 text-base">/night</span>
          </p> */}
        </div>
        <div class="w-2/3 mx-auto md:w-1/3 bg-orange-400 grid place-items-center">
          <img
            src={tablette}
            alt="tailwind logo"
            class="rounded-xl "
          />
        </div>
      </div>
      
    </div>
  );
}

export default Agenda
