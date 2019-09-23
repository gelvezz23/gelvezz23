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



                    <ul className="sidenav grey darken-4 col s12" id="mobile-demo">
                        <li className="col s12 waves-effect waves-orange white-text">
                            <Link className="font-style sidenav-close" to="/home">
                                <h5 className="white-text">
                                    <i className="material-icons left medium">home</i>
                                    Inicio</h5>
                            </Link>
                        </li>

                        <li className="col waves-effect waves-orange">
                            <Link className="font-style sidenav-close" to="/quiensoy">
                                <h5 className="white-text">
                                    <i className="material-icons left medium">live_help</i>
                                    ¿Quien soy?</h5>
                            </Link>
                        </li>
                        <li className="col waves-effect waves-orange">
                            <Link className="font-style sidenav-close" to="/sobremi">
                                <h5 className="white-text">
                                    <i className="material-icons left medium">favorite</i>
                                    Sobre mi</h5>
                            </Link>
                        </li>
                        <li className="col waves-effect waves-orange">
                            <Link className="font-style sidenav-close" to="/anexos">
                                <h5 className="white-text">
                                    <i className="material-icons left medium">library_books</i>
                                    Anexos</h5>
                            </Link>
                        </li>
                    </ul>



                    <Route exact path="/" component={Home}/>
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
