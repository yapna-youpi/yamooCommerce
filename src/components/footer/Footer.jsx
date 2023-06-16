import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import './footer.css'

function Footer() {
    const { t } = useTranslation();
    // const History = useHistory();

    let AmList={
        en: ["http://ipercash.fr/politiques/aml_en.pdf","http://ipercash.fr/politiques/policy_en.pdf" , "http://ipercash.fr/politiques/terms_en.pdf"],
        fr: ["http://ipercash.fr/politiques/aml_fr.pdf","http://ipercash.fr/politiques/policy_fr.pdf" , "http://ipercash.fr/politiques/terms_fr.pdf" ]
    }
    let lang=JSON.parse(localStorage.getItem("lang")||'{"lang":"fr"}').lang

    return (
        <div className="footer">
            <footer>
                
            </footer>
        </div>
    )
}

export default Footer
