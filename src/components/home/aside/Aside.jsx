import React from 'react'
import image from "./I_I_20210715181757_905_804_924-removebg-preview.png"

function Aside() {
  return (
    <div className='flex flex-col md:flex-row bg-marron h-24 md:h-80 w-full text-white'>
        <div className='w-full md:w-5/12'>
            <h3 className='px-4 pt-8 text-3xl md:text-4xl md:px-10 md:pt-8'>Lisez partout et sur tous les supports!</h3>
            <p className='text-2xl px-10 pt-4'>Accédez aux contenus en illimité sur téléphone, tablette, ordinateur et téléviseur sans payer plus</p>
        </div>
        <div className='w-full m-4 md:w-5/12'>
            <img src={image} alt="utiliser la maison polar" />
        </div>
    </div>
  )
}

export default Aside