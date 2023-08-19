import React from 'react'

const BoutiqueCard = () => {
  return (
    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
      <div>
        <img
          alt="person capturing an image"
          src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
          tabindex="0"
          class="focus:outline-none w-full h-44"
        />
      </div>
      <div class="bg-white">
        <div class="flex items-center justify-between px-4 pt-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              tabindex="0"
              class="focus:outline-none"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
            </svg>
          </div>
          <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">
              Featured
            </p>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center">
            <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">
              iphone XS
            </h2>
            <p
              tabindex="0"
              class="focus:outline-none text-xs text-gray-600 pl-5"
            >
              4 days ago
            </p>
          </div>
          <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">
            The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot
            amazing videos
          </p>
          <div class="flex mt-4">
            <div>
              <p
                tabindex="0"
                class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                12 months warranty
              </p>
            </div>
            <div class="pl-2">
              <p
                tabindex="0"
                class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
              >
                Complete box
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <h2
              tabindex="0"
              class="focus:outline-none text-indigo-700 text-xs font-semibold"
            >
              Bay Area, San Francisco
            </h2>
            <h3
              tabindex="0"
              class="focus:outline-none text-indigo-700 text-xl font-semibold"
            ></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoutiqueCard
