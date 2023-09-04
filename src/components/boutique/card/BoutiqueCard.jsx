import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Modals from '../../addons/modal/Modals';

const BoutiqueCard = ({data}) => {

  const [open, setOpen] = useState(false)
  const handleClose = ()=>{
    setOpen(false)
  }

  const history = useHistory()

  return (
    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 md:mt-8">
      <Modals open={open} onCloseModal={handleClose} center>
        <img
          alt={data.productName}
          src={data.imgUrl}
          tabindex="0"
          class="focus:outline-none w-full h-72 cursor-pointer"
        />
        <div class="pl-2">
          <div class="flex items-center mt-3">
            <h2 tabindex="0" class="focus:outline-none text-xl font-bold">
              {data.productName}
            </h2>
            <p
              tabindex="0"
              class="focus:outline-none text-xs text-gray-600 pl-5"
            >
              {data.years} days ago
            </p>
          </div>
          <p tabindex="0" class="md:w-96  focus:outline-none text-xs text-gray-600 mt-2">
            {data.shortDesc}
          </p>
          <p
            onClick={() => history.push(`/librairie/${data.id}`)}
            tabindex="0"
            class="cursor-pointer bg-orange-400 hover:bg-orange-300 text-yellow-700 py-1.5 px-6 rounded-full w-4/12 text-center my-3 focus:outline-none text-xs  font-bold  md:px-3 md:py-2"
          >
            Lecture
          </p>
        </div>
      </Modals>

      <div>
        <img
          onClick={() => setOpen(true)}
          alt={data.productName}
          src={data.imgUrl}
          tabindex="0"
          class="focus:outline-none w-full h-44 cursor-pointer"
        />
      </div>
      <div class="bg-white shadow-lg hover:shadow-2xl">
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
          <div class="bg-orange-400 hover:bg-orange-300 cursor-pointer py-1.5 px-6 rounded-full">
            <p
              tabindex="0"
              class=" focus:outline-none text-xs  text-yellow-700"
            >
              Acquérir
            </p>
          </div>
        </div>
        <div class="p-4">
          <div class="flex items-center">
            <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">
              {data.productName}
            </h2>
            <p
              tabindex="0"
              class="focus:outline-none text-xs text-gray-600 pl-5"
            >
              {data.years} days ago
            </p>
          </div>
          <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">
            {data.shortDesc}
          </p>
          <div class="flex mt-4">
            <div>
              <p
                tabindex="0"
                class="cursor-pointer focus:outline-none text-xs hover:bg-gray-100  font-bold  text-orange-600 px-2 py-1 md:px-3 bg-gray-200 md:py-2"
              >
                S'abonner et lire
              </p>
            </div>
            <div class="pl-2">
              <p
                onClick={() => setOpen(true)}
                tabindex="0"
                class="cursor-pointer focus:outline-none text-xs hover:bg-gray-100 font-bold  text-orange-600 px-2 py-1 md:px-3 bg-gray-200 md:py-2"
              >
                Description
              </p>
            </div>
          </div>
          <div class="flex items-center justify-between py-4">
            <h2
              tabindex="0"
              class="focus:outline-none text-indigo-700 text-xs font-semibold"
            >
              {data.author}
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
