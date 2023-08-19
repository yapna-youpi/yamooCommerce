import React from 'react'
import CardAutor from './CardAutor'
import {data} from "../../../Data/Autors"

const Auteur = () => {
  return (
    <div class="w-full ">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center pb-12">
            <h2 class="text-base font-bold text-darkorange">
                Nos auteurs vous offrent le meilleur de la litterature africaine
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-4xl font-heading text-gray-900">
                Découvrez les membres de notre équipe
            </h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                data.map((item,index) => (
                    <CardAutor author={item} index={index} />
                ))
            }
        </div>
    </section>
</div>
  )
}

export default Auteur