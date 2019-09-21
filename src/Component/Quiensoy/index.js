import React, {Component} from 'react';
import Profile from './../../assets/img/profile.jpg';


class Quiensoy extends Component {
    render() {


        return (
            <div className="col s12">
                <div className="row">
                    <div className="siseñor col s12 m6 l6  grey darken-4">
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
                                <p></p>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6 l6 amber">
                        <h3 className="valign-wrapper animated fadeIn delay-1s">
                            <i className="fas fa-calendar-alt"></i>
                            22 de Febrero 1997
                        </h3>
                        <h3 className="valign-wrapper animated fadeIn delay-2s">
                            <i className="fas fa-map-marker-alt"></i>
                            Cucuta - Norte de santander
                        </h3>
                        <h3 className="valign-wrapper animated fadeIn delay-3s">
                            <i className="fas fa-birthday-cake"></i>
                            22 años
                        </h3>
                        <h3 className="valign-wrapper animated fadeIn delay-4s">
                            <i className="fas fa-mobile-alt"></i>
                            311 4831 157
                        </h3>
                        <h3 className="valign-wrapper animated fadeIn delay-5s">
                            <i className="fas fa-at"></i>
                            Mao_23_@hotmail.com
                        </h3>

                        <h3 className="animated fadeIn delay-6s"><h5>Mas sobre mi</h5>
                            <i className="fas fa-arrow-down"></i>
                        </h3>
                    </div>
                </div>


                <div className="section container white col s12">
                    <div className="row col s12">
                        <blockquote>
                            <h2 className="header col s12">Formacion</h2>
                        </blockquote>


                        <h4 className="header col s12 ">Ingenieria de sistemas</h4>
                        <p className="grey-text text-darken-3 lighten-3 col s12">Universidad francisco de paula
                            santander
                            <br/>en proceso
                            <br/>6to semestre</p>


                        <h4 className="header right-align col s12">Tecnico en programacion de software</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align col s12">Servicio nacional de
                            aprendizaje
                            SENA
                            <br/>2014</p>


                        <h4 className="header col s12">Marketing mix</h4>
                        <p className="grey-text text-darken-3 lighten-3 col s12">Servicio nacional de aprendizaje SENA
                            <br/>2014</p>

                        <h4 className="header right-align col s12">Bachiller tecnico en gestion de redes y sistemas</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align col s12">Instituto tecnico guaimaral
                            <br/>2013</p>

                        <h4 className="header col s12">Modelado, materiales y texturas;
                            <br/>Esenarios y animacion 2
                            <br/>Creacion de juegos en blender</h4>
                        <p className="grey-text text-darken-3 lighten-3 col s12">Comfanorte
                            <br/>2015</p>

                        <h4 className="header right-align col s12">Curso de programacion basica</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align col s12">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header col s12">Curso de fundamentos de ingenieria de software</h4>
                        <p className="grey-text text-darken-3 lighten-3 col s12">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header right-align col s12">Curso de profesional de Git y Github</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align col s12">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header col s12">Curso de 0 a experto en React JS + Redux + ES6 </h4>
                        <p className="grey-text text-darken-3 lighten-3 col s12"> Udemy
                            <br/>en proceso
                            <br/>2019</p>
                        <div className="col s12">
                            <div className="chip"><i className="fas fa-laptop-code"></i></div>
                            <div className="chip"><i className="fab fa-dev"></i></div>
                            <div className="chip"><i className="fas fa-code"></i></div>
                            <div className="chip"><i className="fas fa-file-code"></i></div>
                        </div>
                    </div>

                    <div className="section amber accent-3">
                        <div className="row container">
                            <h2 className="header">Parallax</h2>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background
                                content or image in this case, is moved at a different speed than the foreground content
                                while scrolling.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiensoy;