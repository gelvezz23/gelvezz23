import React, {Component} from 'react';

import './style.css';

class Body extends Component {

    render() {
        return (
            <div className="col s12">
                <div className="col s12 center algo section">
                    <h3 className="animated fadeIn delay-1s">Bienvenidos a mi mundo.</h3>
                    <div className="divider"></div>

                    <div className="container center col s12">
                        <div className="col s12"><br/><br/></div>

                        <div className="row">

                            <div className="col s12 m10 l2 animated bounceIn delay-2s">
                                <a href="https://www.facebook.com/carlosmario.gomezgelvez">
                                    <img className="icon-social " src="https://cdn.svgporn.com/logos/facebook.svg"/>
                                </a>
                                <h5>Facebook</h5>
                            </div>
                            <div className="col s12 m10 l2 animated bounceIn delay-2s">
                                <a href="https://www.instagram.com/carlosmariogomezgelvez/">
                                    <img className="icon-social" src="https://cdn.svgporn.com/logos/instagram-icon.svg"/>
                                </a>
                                <h5>Instagram</h5>
                            </div>
                            <div className="col s12 m10 l2 animated bounceIn delay-2s">
                                <a href="https://www.youtube.com/user/gelvez21">
                                    <img className="icon-social" src="https://cdn.svgporn.com/logos/youtube.svg"/>
                                </a>
                                <h5>Youtube</h5>
                            </div>
                            <div className="col s12 m10 l2 animated bounceIn delay-2s">
                                <a href="https://twitter.com/23_mao">
                                    <img className="icon-social" src="https://cdn.svgporn.com/logos/twitter.svg"/>
                                </a>
                                <h5>Twitter</h5>
                            </div>
                            <div className="col s12 m10 l2 animated bounceIn delay-2s">
                                <a href="https://github.com/gelvezz23">
                                    <img className="icon-social" src="https://cdn.svgporn.com/logos/github-icon.svg"/>
                                </a>
                                <h5>Github</h5>
                            </div>
                            <div className="col s12 m10 l2 animated bounceIn delay-2s ">
                                <a href="https://www.linkedin.com/in/carlos-mario-gomez-gelvez-07888a116/" >
                                    <img className="icon-social" src="https://cdn.svgporn.com/logos/linkedin.svg"/>
                                </a>
                                <h5>Linkedin</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="page-footer grey darken-4 section">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text animated fadeIn delay-4s">DeveloperMan</h5>
                                <p className="grey-text text-lighten-4 animated fadeIn delay-4s">Un heroe sin capa</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <ul className="left-align">
                                    <li>
                                        <h5 className="white-text s2 animated fadeIn delay-4s">
                                            <i className="material-icons">emoji_emotions</i>
                                            se feliz
                                        </h5>
                                    </li>
                                    <li>
                                        <h5 className="grey-text text-lighten-3 animated fadeIn delay-4s">
                                            <i className="material-icons ">thumb_up_alt</i>
                                            si te gusta
                                        </h5>
                                    </li>
                                    <li>
                                        <h5 className="grey-text text-lighten-3 animated fadeIn delay-4s">
                                            <i className="material-icons">share</i>
                                            comparte
                                        </h5>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright grey darken-3">
                        <div className="container">
                            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                                <img alt="Licencia Creative Commons"
                                     src="https://i.creativecommons.org/l/by/4.0/88x31.png"/>
                            </a><br/>Esta obra está bajo una -
                            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                                Licencia Creative Commons Atribución 4.0 Internacional</a>.
                            <a className="grey-text text-lighten-4 right" href="#"></a>
                        </div>
                    </div>
                </footer>
            </div>

        )

    }

}

export default Body