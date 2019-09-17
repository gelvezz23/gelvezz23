import React, {Component} from 'react';
import Profile from './../../assets/img/profile.jpg';


class Quiensoy extends Component {
    render() {


        return (
            <div className="">
                <div className="row">
                    <div className="siseñor col s5 grey darken-4">
                        <div className="card grey darken-4">
                            <div className="waves-effect waves-block waves-light">
                                <img src={Profile} alt="" className=" circle profile responsive-img"/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-white">Carlos Mario Gomez Gelvez
                                   <i className="material-icons right">info</i>

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
                    <div className="col s7">
                        <h4 className="valign-wrapper animated fadeIn delay-1s">
                         <i className="fas fa-calendar-alt"></i>

                            22 de Febrero 1997
                        </h4>
                        <h4 className="valign-wrapper animated fadeIn delay-2s">
                            <i className="fas fa-map-marker-alt"></i>
                            Cucuta - Norte de santander
                        </h4>
                        <h4 className="valign-wrapper animated fadeIn delay-3s">
                            <i className="fas fa-birthday-cake"></i>
                            22 años
                        </h4>
                        <h4 className="valign-wrapper animated fadeIn delay-4s">
                            <i className="fas fa-mobile-alt"></i>
                            311 4831 157
                        </h4>
                        <h4 className="valign-wrapper animated fadeIn delay-5s">
                            <i className="fas fa-at"></i>
                            Mao_23_@hotmail.com
                        </h4>

                        <h4 className="animated fadeIn delay-6s"><h5>Mas sobre mi</h5>
                            <i className="material-icons large">
                                subdirectory_arrow_left
                            </i></h4>
                    </div>
                </div>


                <div className="section white">
                    <div className="row container">
                        <blockquote>
                            <h2 className="header">Formacion</h2>
                        </blockquote>


                        <h4 className="header">Ingenieria de sistemas</h4>
                        <p className="grey-text text-darken-3 lighten-3">Universidad francisco de paula santander
                            <br/>en proceso
                            <br/>6to semestre</p>



                        <h4 className="header right-align">Tecnico en programacion de software</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align">Servicio nacional de aprendizaje
                            SENA
                            <br/>2014</p>


                        <h4 className="header ">Marketing mix</h4>
                        <p className="grey-text text-darken-3 lighten-3">Servicio nacional de aprendizaje SENA
                            <br/>2014</p>

                        <h4 className="header right-align">Bachiller tecnico en gestion de redes y sistemas</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align">Instituto tecnico guaimaral
                            <br/>2013</p>

                        <h4 className="header">Modelado, materiales y texturas;
                            <br/>Esenarios y animacion 2
                            <br/>Creacion de juegos en blender</h4>
                        <p className="grey-text text-darken-3 lighten-3">Comfanorte
                            <br/>2015</p>

                        <h4 className="header right-align">Curso de programacion basica</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header">Curso de fundamentos de ingenieria de software</h4>
                        <p className="grey-text text-darken-3 lighten-3 ">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header right-align">Curso de profesional de Git y Github</h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header">Curso de fundamentos de ingenieria de software</h4>
                        <p className="grey-text text-darken-3 lighten-3 ">Platzi - apps.co
                            <br/>2019</p>

                        <h4 className="header right-align">Curso de 0 a experto en React JS + Redux + ES6 </h4>
                        <p className="grey-text text-darken-3 lighten-3 right-align "> Udemy
                            <br/>en proceso
                            <br/>2019</p>

                        <div className="chip"><i className="fas fa-laptop-code"></i></div>
                        <div className="chip"><i className="fab fa-dev"></i></div>
                        <div className="chip"><i className="fas fa-code"></i></div>
                        <div className="chip"><i className="fas fa-file-code"></i></div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Quiensoy;