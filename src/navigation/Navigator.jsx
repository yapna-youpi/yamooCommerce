import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './main.css'

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';
import Boutique from '../components/boutique/Boutique';
import Error from '../components/Error/404';

function Main({ User, Country }) {


    const checkUser = C => User.userId ? C : () => <Redirect to="/login" />
    const checkAccount = C => User.userEmail.includes('@ipercash.') ? C : () =><> </>

    // console.log("the User ", User)
    return (
        <div className="main">
            <Router>
                { <Header />}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' exact component={Home} />
                    <Route path='/librairie' exact component={Boutique} />
                    <Route path='*' component={Error} />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default Main