import React from 'react'
import {useHistory} from 'react-router-dom'
import './404.css'


function Error() {
    let H = useHistory()
    return (
        <div id="notfound" className="notfound">
            <div id="error">
                <div class="error">
                    <div class="first">
                        <div class="image"></div>
                    </div>
                    <div class="second">
                        <h1>404</h1>
                        <h3>OOPS ! QUELQUE CHOSE S'EST MAL PASSÉ</h3>
                        <p>
                            Désolé, la page que vous recherchez n'existe pas.
                        </p>
                        <span onClick={()=>H.push("/")} className='error-link' >Retour à la page d'accueil</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Error