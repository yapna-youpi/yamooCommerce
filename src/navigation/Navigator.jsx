import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes';

import './main.css'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Boutique from '../components/boutique/Boutique';
import Contact from '../components/contact/Contact'
import Login from "../components/login/Login"
import Histoire from "../components/histoire/Histoire"
import Error from '../components/Error/404';
import Kiosque from '../components/kiosque/Kiosque';
import LivreDetail from '../components/livreDetail/LivreDetail';
import UseAuthe from "../custom-hooks/UseAuthe"
import Acceuil from "../components/home/acceuil/Acceuil"

function Main({ User, Country }) {
    
    const { currentUser } = UseAuthe()
    const checkUser = C => currentUser ? C : () => <Redirect to="/login" />
    const checkAccount = C => currentUser ? C : () => <Redirect to="/acceuil" />
    
    return (
        <div className="main">
            <Router>
                { <Header />}
                <Switch>
                    <Route path='/' exact component={Acceuil} />
                    <Route path='/acceuil' exact component={Acceuil} />
                    <Route path='/home' exact component={checkAccount(Home)} />
                    <Route path='/contact' exact component={checkAccount(Contact)} />
                    <Route path='/login/:id' exact component={Login} />
                    <Route path='/librairie' exact component={checkUser(Boutique)} />
                    <Route path='/librairie/:id' exact component={LivreDetail} />
                    <Route path='/histoire' exact component={checkUser(Histoire)} />
                    <Route path='/kiosque' exact component={checkUser(Kiosque)} />
                    <Route path='*' component={Error} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Main