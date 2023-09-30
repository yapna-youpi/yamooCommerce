import React,{useState, useEffect} from 'react'
import KiosqueCard from './card/KiosqueCard'
import produits from '../../Data/products'

const Kiosque = () => {

  const [productPopular, setProductPopular] = useState([])
  const [productPress, setProductPress] = useState([])
  // const [productBestSeller, setProductBestSeller] = useState([])
  
  useEffect(() => {

    const filteredPopular = () => produits.filter(item => item.category == "magazine")
    const filteredPress = () => produits.filter(item => item.category == "press")
    // const filteredBestSeller = () => produits.filter(item => item.category == "bestSeller")

    // setProductBestSeller(filteredBestSeller)
    setProductPopular(filteredPopular)
    setProductPress(filteredPress)
  }, [])
  


  return (
    <div className='mt-8'>
      <div tabindex="0" class="focus:outline-none">
        {/* <!-- Remove py-8 --> */}
        <div class="w-full mx-auto container sm:flex">
          <div className='w-full'>
            <h2 className='text-xl md:text-3xl pl-10 font-bold'>Vos magazines Populaires</h2>
            <div class="w-full px-7 md:px-12 sm:flex flex-wrap justify-around pb-10 md:mt-16">
              {productPopular.map((item, index) => (
                <KiosqueCard data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div class="w-full mx-auto container sm:flex">
          <div className='w-full'>
            <h2 className='text-xl md:text-3xl pl-10 font-bold'>Vos magazines Populaires</h2>
            <div class="w-full px-7 md:px-12 sm:flex flex-wrap justify-around pb-10 md:mt-16">
              {productPress.map((item, index) => (
                <KiosqueCard data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kiosque
