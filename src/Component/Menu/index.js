import React, {Component} from 'react';
import logo from './../../assets/img/LogoPersonal2.png';

import Home from './../Body';
import Quiensoy from './../Quiensoy';
import Sobremi from './../sobremi';
import Anexos from './../Anexos';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './style.css';

class Menu extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div className="navbar-fixed">
                        <nav>
                            <div className="nav-wrapper navbg-color z-depth-3">
                                <Link to="/home" className="brand-logo"><img className="logo" src={logo}/></Link>
                                <a href="#" data-target="mobile-demo"
                                   className="sidenav-trigger ">
                                    <i className="large material-icons">menu</i></a>

                                <ul className="right hide-on-med-and-down">
                                    <li className="waves-effect waves-orange">
                                        <Link className="font-style" to="/home">
                                            <i className="material-icons right medium">home</i>Inicio</Link>
                                    </li>

                                    <li className="waves-effect waves-orange">
                                        <Link className="font-style " to="/quiensoy">
                                            <i className="material-icons right medium">live_help</i>¿Quien soy?</Link>
                                    </li>
                                    <li className="waves-effect waves-orange">
                                        <Link className="font-style" to="/sobremi">
                                            <i className="material-icons right medium">favorite</i>Sobre mi </Link></li>
                                    <li className="waves-effect waves-orange">
                                        <Link className="font-style" to="/anexos">
                                            <i className="material-icons right medium">library_books</i>Anexos</Link>
                                    </li>

                                </ul>

                            </div>

                        </nav>
                    </div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><Link to="/home"> Inicio </Link></li>
                        <li><Link to="/quiensoy"> Quien soy </Link></li>
                        <li><Link to="/sobremi"> Sobre mi </Link></li>
                        <li><Link to="/anexos"> Anexos </Link></li>
                    </ul>

                    <Route exact path="/gelvezz23" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/quiensoy" component={Quiensoy}/>
                    <Route exact path="/sobremi" component={Sobremi}/>
                    <Route exact path="/anexos" component={Anexos}/>


                </Router>


            </div>

        )

    }

}

export default Menu
