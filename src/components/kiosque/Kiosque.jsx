import React,{useState, useEffect} from 'react'
import KiosqueCard from './card/KiosqueCard'
import produits from '../../Data/products'

const Kiosque = () => {

  const [productPopular, setProductPopular] = useState([])
  // const [productBestSeller, setProductBestSeller] = useState([])
  
  useEffect(() => {

    const filteredPopular = () => produits.filter(item => item.category == "magazine")
    // const filteredBestSeller = () => produits.filter(item => item.category == "bestSeller")

    // setProductBestSeller(filteredBestSeller)
    setProductPopular(filteredPopular)
  }, [])
  


  return (
    <div className='mt-8'>
      <div tabindex="0" class="focus:outline-none">
        {/* <!-- Remove py-8 --> */}
        <div class="w-full mx-auto container sm:flex">
          <div className='w-full'>
            <h2 className='text-xl md:text-3xl pl-10 font-bold'>Vos magazines Populaires</h2>
            <div class="w-full px-7 md:px-12 sm:flex justify-around pb-10 md:mt-16">
              {productPopular.map((item, index) => (
                <KiosqueCard data={item} index={index} />
              ))}
            </div>
          </div>

          {/* <div>
            <h2 className='text-xl md:text-3xl font-bold'>A paraître bientôt</h2>
            <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
              {productBestSeller.map((item, index) => (
                <KiosqueCard data={item} index={index} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Kiosque
