import React from 'react'
import affiche from "../assets/magap.png"

function Agenda() {
  return (
    <div>
      <figure class="md:flex w-11/12 mx-auto my-24 sm:px-20 bg-darkorange rounded-xl p-8  dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={affiche}
          alt="magapche pere et fille"
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-bold md:text-3xl">
              “Etoiles de l'edition Camerounaise 2023” : # Remise Des Prix Par Theme
            </p>
          </blockquote>
          <figcaption class="md:pt-3">
            <div class= "text-violet-700 font-extrabold md:py-1">Etoiles De l'Edition</div>
            <div class="text-slate-700 dark:text-slate-500">
              Dès le 27 octobre 2023 dans la ville de Yaoundé
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
    // <div className='agenda w-full mt-28 sm:py-5 sm: px-20 md:h-32 bg-lightorange '>
    //   <h2>Agenda</h2>
    //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate tempore sunt expedita iusto nobis, atque quis sapiente, ratione quo facere possimus ex laborum commodi minus, consectetur aliquid laudantium quas deleniti?</p>
    // </div>
  );
}

export default Agenda