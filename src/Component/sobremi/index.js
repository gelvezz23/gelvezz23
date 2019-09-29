import React, {Component} from 'react';
import './style.css';
import Profile from "../../assets/img/profile.jpg";

class Sobremi extends Component {

    render() {
        return (
            <div className="Sobremi">

                <div className="carousel carousel-slider center col s12">
                    <div className="carousel-fixed-item center">
                        <p>No se aqui va algo ...</p>
                    </div>
                    <div className="carousel-item red white-text col s12" ref="#one!">
                        <h2>Panel 1</h2>
                        <p className="white-text">Panel numero 1</p>
                    </div>
                    <div className="carousel-item amber white-text col s12" ref="#two!">
                        <h2>Panel 2</h2>
                        <p className="white-text">Panel numero 2</p>
                    </div>
                    <div className="carousel-item green white-text col s12" ref="#three!">
                        <h2>Panel 3</h2>
                        <p className="white-text">Panel numero 3</p>
                    </div>
                    <div className="carousel-item blue white-text col s12" ref="#four!">
                        <h2>Panel 4</h2>
                        <p className="white-text">Panel numero 4</p>
                    </div>
                </div>

            </div>
        )
    }
}


export default Sobremi;