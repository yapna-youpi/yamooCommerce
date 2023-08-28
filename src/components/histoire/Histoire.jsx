import React from "react";

function Histoire() {
  return (
    <div className="histoire py-16 ">
      <section className=" md:container md:w-9/12 md:mx-auto bg-slate-200 py-16 px-36 my-15 mx-12">
        <h2 className="font-bold sm:text-2xl pb-7">Qui sommes Nous</h2>
        <div>
          Gribouillage-Press est un groupe d’édition et de presse qui compte en
          son sein quatre maisons d’édition spécialisés chacune dans un domaine
          précis :
          <ul className="list-none mt-3">
            <li>
              - Griboui’age Editions pour la littérature générale et pour
              enfants.
            </li>
            <li>- Polar Editions pour les thrillers et le roman noir.</li>
            <li>- Le Crabe Enchanté pour la poésie et opinions.</li>
            <li>- La Bibliothèque Africaine pour le Théâtre.</li>
          </ul>
        </div>
        <br />
        <p>
          G-Kiosque est un espace dédié à l’édition de presse, magazine et
          revues.
        </p>
        <p>
          Gribouillage – Librairie de la Toile est l’espace marchand entièrement
          dédié aux professionnels de la chaine du livre (Editeurs, Diffuseurs,
          Distributeurs, Libraires, Bibliothèques, Institutionnels et Lecteurs).
          Nous nous mettons au service des uns et des autres pour leurs
          acquisitions quelques soient leurs lieux d’exercice et les quantités
          sollicitées. Livres numériques, en papier ou brochés, nous pouvons les
          avoir pour vous.
        </p>
        <br />

        <div>
          <h2 className="font-bold sm:text-2xl pb-7">Nos autres services :</h2>
        </div>
        <ul className="list-item list ">
          <li className="md:pl-5">
            -  Organisation des Ateliers d’écriture en groupe ou personnalisés.
          </li>
          <li className="md:pl-5">
            -  Organisation des Résidences d’écriture avec les professionnels en
            vue de renforcer leurs capacités.
          </li>
          <li className="md:pl-5">
            -  Les Caravanes du livre dans les établissements scolaires et lors des
            foires et salons.
          </li>
          <li className="md:pl-5"> 
            -  Promotion de la littérature en générale et particulièrement la
            littérature de jeunesse.
          </li>
          <li className="md:pl-5">-  Publication de Revues et Magazines spécialisés</li>
        </ul>
      </section>
    </div>
  );
}

export default Histoire;
