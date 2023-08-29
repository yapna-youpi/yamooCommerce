import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { ReactReader } from 'react-reader'
import products from "../../Data/products";

import lula from '../../Data/livres/epub/Lula.epub'
import kiti from '../../Data/livres/epub/kiti.epub'
import muna from '../../Data/livres/epub/Muna.epub'

const livre_epub = [0,0,0,lula,0,0,0,0,0,0,kiti,muna]

const LivreDetail = (props) => {
  const locat = useLocation().pathname.substr(11);

  const [location, setLocation] = useState(null);
  const [livre, setlivre] = useState("");
  const [isLivre, setIsLivre] = useState(true);

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
  };

  
  useEffect(() => {
    const filteredProduct = products.filter(item => item.id == locat)
    setlivre(filteredProduct[0])
    window.scrollTo(0,0)
  }, [])
  
  return (
    <div>
      {livre.epub ? (
        <div style={{ height: "100vh" }}>
          <ReactReader
            location={location}
            locationChanged={locationChanged}
            // url="https://react-reader.metabits.no/files/alice.epub"
            url={livre_epub[locat]}
          />
        </div>
      ) : (
        <h2 className="text-center font-bold my-10 md:text-2xl">
          {" "}
          Le livre E-pub n'est pas encore disponible veuillez choisir un autre!
        </h2>
      )}
    </div>
  );
};

export default LivreDetail;
