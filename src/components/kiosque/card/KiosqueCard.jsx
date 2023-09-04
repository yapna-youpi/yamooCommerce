import React,{useState} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Modals from '../../addons/modal/Modals';

function KiosqueCard({data, index}) {
    const [open, setOpen] = useState(false)
    const handleClose = ()=>{
      setOpen(false)
    }
    const history = useHistory()

  return (
    <div class="w-full sm:w-5/12 md:w-3/12   mx-auto pt-10 md:pt-1">
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
          <p
            tabindex="0"
            class="md:w-96  focus:outline-none text-xs text-gray-600 mt-2"
          >
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

      <div class="bg-white shadow-md border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            onClick={() => setOpen(true)}
            class="rounded-t-lg"
            src={data.imgUrl}
            alt={data.productName}
          />
        </a>
        <div class="p-5 w-full">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {data.productName}
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {data.shortDesc}
          </p>
          <a
            onClick={() => setOpen(true)}
            href="#"
            class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lire plus
            <svg
              class="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default KiosqueCard