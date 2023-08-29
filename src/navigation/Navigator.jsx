import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

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

function Main({ User, Country }) {


    const checkUser = C => User.userId ? C : () => <Redirect to="/login" />
    const checkAccount = C => User.userEmail.includes('') ? C : () =><> </>

    // console.log("the User ", User)
    return (
        <div className="main">
            <Router>
                { <Header />}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/librairie' exact component={Boutique} />
                    <Route path='/librairie/:id' exact component={LivreDetail} />
                    <Route path='/histoire' exact component={Histoire} />
                    <Route path='/kiosque' exact component={Kiosque} />
                    <Route path='*' component={Error} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Main