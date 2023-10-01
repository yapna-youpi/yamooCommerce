import React,{useState, useEffect} from 'react'
import BoutiqueCard from './card/BoutiqueCard'
import produits from '../../Data/products'

const Boutique = () => {

  const [productPopular, setProductPopular] = useState([])
  const [productBestSeller, setProductBestSeller] = useState([])
  
  useEffect(() => {
    window.scrollTo(0,0)

    const filteredPopular = () => produits.filter(item => item.category == "populaire")
    const filteredBestSeller = () => produits.filter(item => item.category == "bestSeller")

    setProductBestSeller(filteredBestSeller)
    setProductPopular(filteredPopular)
  }, [])
  


  return (
    <div>
      <div tabindex="0" class="focus:outline-none">
        {/* <!-- Remove py-8 --> */}
        <div class="mx-auto container py-8 mx-15">
          <div>
            <h2 className='text-xl md:text-3xl pl-16 font-bold'>Catégories Populaires</h2>
            <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-10 md:mt-5">
              {productPopular.map((item, index) => (
                <BoutiqueCard data={item} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-xl md:text-3xl font-bold'>A paraître bientôt</h2>
            <div class="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
              {productBestSeller.map((item, index) => (
                <BoutiqueCard data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boutique
