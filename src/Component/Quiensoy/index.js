import React, {Component} from 'react';
import Profile from './../../assets/img/profile.jpg';
import './style.css';


class Quiensoy extends Component {
    render() {


        return (
            <div className="col s12">
                <div className="row">
                    <div className="bg"/>
                    <div className="bg bg2"/>
                    <div className="bg bg3"/>

                    <div className="col s12 m6 l6">
                        <div className="card grey darken-4 center">
                            <div className="waves-effect waves-block waves-light">
                                <img src={Profile} alt="" className=" circle profile responsive-img"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-white">Carlos Mario Gomez Gelvez
                                   <i className="material-icons right">menu</i>

                                </span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4"><i
                                    className="material-icons right">close</i><small>mi nombre es</small><br/>
                                Carlos Mario Gomez Gelvez<br/><br/>
                                <h4>Soy un amante de la tecnologia, me gusta diseñar, codificar sitios web y aplicaciones,
                                    ser el responsable de definir un bozquejo para que resulte atractivo al usuario
                                    con un alto nivel de proactividad y etica profesional</h4>
                                    </span>
                                <p/>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l6">
                        <h3 className="col s12 valign-wrapper font-vive animated fadeIn delay-1s">
                            <i className="fas fa-calendar-alt"/>
                            22 de Febrero 1997
                        </h3>
                        <h3 className="col s12 valign-wrapper animated fadeIn delay-1s">
                            <i className="fas fa-map-marker-alt"/>
                            Cucuta - Norte de santander
                        </h3>
                        <h3 className="col s12 valign-wrapper animated fadeIn delay-1s">
                            <i className="fas fa-birthday-cake"/>
                            22 años
                        </h3>
                        <h3 className="col s12 valign-wrapper animated fadeIn delay-1s">
                            <i className="fas fa-mobile-alt"/>
                            311 4831 157
                        </h3>
                        <h3 className="col s6 valign-wrapper animated fadeIn delay-1s">
                            <i className="fas fa-at"/>
                            Mao_23_@<br/>hotmail.com
                        </h3>

                        <h3 className="col s6 animated fadeIn delay-1s">
                            <i className="fas fa-arrow-down"/>
                        </h3>
                    </div>
                </div>

                <div className="section white">
                    <div className="section container white col s12">
                        <div className="row col s12">
                            <blockquote>
                                <h2 className="header col s12">Formacion</h2>
                            </blockquote>


                            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                                <h4 className="header col s12 ">Ingenieria de sistemas</h4>
                                <p className="grey-text text-darken-3 lighten-3 col s12">Universidad francisco de paula
                                    santander
                                    <br/>en proceso
                                    <br/>6to semestre</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                                <h4 className="header right-align col s12">Tecnico en programacion de software</h4>
                                <p className="grey-text text-darken-3 lighten-3 right-align col s12">Servicio nacional
                                    de
                                    aprendizaje
                                    SENA
                                    <br/>2014</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                                <h4 className="header col s12">Marketing mix</h4>
                                <p className="grey-text text-darken-3 lighten-3 col s12">Servicio nacional de
                                    aprendizaje SENA
                                    <br/>2014</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                                <h4 className="header right-align col s12">Bachiller tecnico en gestion de redes y
                                    sistemas</h4>
                                <p className="grey-text text-darken-3 lighten-3 right-align col s12">Instituto tecnico
                                    guaimaral
                                    <br/>2013</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                                <h4 className="header col s12">Modelado, materiales y texturas;
                                    <br/>Esenarios y animacion 2
                                    <br/>Creacion de juegos en blender</h4>
                                <p className="grey-text text-darken-3 lighten-3 col s12">Comfanorte
                                    <br/>2015</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                                <h4 className="header right-align col s12">Curso de programacion basica</h4>
                                <p className="grey-text text-darken-3 lighten-3 right-align col s12">Platzi - apps.co
                                    <br/>2019</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                                <h4 className="header col s12">Curso de fundamentos de ingenieria de software</h4>
                                <p className="grey-text text-darken-3 lighten-3 col s12">Platzi - apps.co
                                    <br/>2019</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
                                <h4 className="header right-align col s12">Curso de profesional de Git y Github</h4>
                                <p className="grey-text text-darken-3 lighten-3 right-align col s12">Platzi - apps.co
                                    <br/>2019</p>
                            </div>
                            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                                <h4 className="header col s12">Curso de 0 a experto en React JS + Redux + ES6 </h4>
                                <p className="grey-text text-darken-3 lighten-3 col s12"> Udemy
                                    <br/>en proceso
                                    <br/>2019</p>
                            </div>
                            <div className="col s12">
                                <div className="chip"><i className="fas fa-laptop-code"/></div>
                                <div className="chip"><i className="fab fa-dev"/></div>
                                <div className="chip"><i className="fas fa-code"/></div>
                                <div className="chip"><i className="fas fa-file-code"/></div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="section accent-3 transparent">
                    <div className="row col s12 ">
                        <blockquote>
                            <h2 className="header">Participacion</h2>
                        </blockquote>
                        <div className="col s12 m4 ">
                            <div className="card horizontal z-depth-4 ">
                                <div className="card-image purple darken-2">

                                </div>
                                <div className="card-stacked ">
                                    <div className="card-content">
                                        <p>XI Semana de ciencia, tecnologia e innovacion. </p>
                                    </div>
                                    <div className="card-action ">
                                        <a href="#" className="black-text">Var mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card horizontal z-depth-4">
                                <div className="card-image purple darken-2">

                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>XIII Semana de la comunicacion</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#" className="black-text">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card horizontal z-depth-4">
                                <div className="card-image purple darken-2">

                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>3ra Y 4PT National transport hackaton colombia</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#" className="black-text">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card horizontal z-depth-4">
                                <div className="card-image purple darken-2">

                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>Hacktober Fest 2018</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#" className="black-text">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="card horizontal z-depth-4">
                                <div className="card-image  purple darken-2">

                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>Apss.co 8va Jornada</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#" className="black-text">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
}

export default Quiensoy;
