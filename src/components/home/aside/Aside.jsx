import React from 'react'
import image from "../assets/magap.png"

function Aside() {
  return (

<section class="relative py-16 bg-blueGray-50">
<div class="items-center flex flex-wrap">
  <div class="w-full flex justify-center md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." class="max-w-9/12 max-h-96 md:max-h-full rounded-lg shadow-lg" src={image} />
  </div>
  <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div class="md:pr-12">
      <div class="text-darkorange p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-darkorange mt-8">
        <i class="fas fa-rocket text-xl"></i>
      </div>
      <h3 class="text-3xl font-semibold">“Etoiles de l'edition Camerounaise 2023”</h3>
      <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
      # Remise Des Prix Par Theme à l'esplanade du palais
      </p>
      <ul class="list-none mt-6">
        <li class="py-2">
          <div class="flex items-center">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-darkorange mr-3"><i class="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 class="text-blueGray-500">
                Meilleurs Auteurs et Associations
              </h4>
            </div>
          </div>
        </li>
        <li class="py-2">
          <div class="flex items-center">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-darkorange mr-3"><i class="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 class="text-blueGray-500">Meilleurs Livres</h4>
            </div>
          </div>
        </li>
        <li class="py-2">
          <div class="flex items-center">
            <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-darkorange mr-3"><i class="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 class="text-blueGray-500">Meilleures Bibliothèques</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</section>
  )
}

export default Aside