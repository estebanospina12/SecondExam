import React, { Component } from 'react'
import heroeService from '../../services/heroeService'
import fondo from '../../../assets/img/fondo.png';
import './secondExam.css';


export class Heroes extends Component {

    state = {
        heroes: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            heroes: heroeService.getHeroes()
        });
    }

    render() {
        const heroes = this.state.heroes;
        return (
            <React.Fragment>
                <h1><img src={fondo} alt="fondo" />Regional Score Soccer</h1>

                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los héroes*/}

                    {heroes.map(heroe => {
                        return (
                            <div className="card animated fadeIn fast">
                            <div style={{ display: 'flex', justifyContent: 'center'}}>
                                    <div> <img src={heroe.img} alt={heroe.nombre} className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h4 className="card-title">{heroe.nombre}</h4>
                                    <p className="card-text">{heroe.bio}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{heroe.aparicion}</small>
                                    </p>
                                </div>
                            </div></div>
                                </div>
                        )
                    })}
                    <div>
                        <button type="button" className="btn btn-outline-primary btn-block">
                            Inicio
                            </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Heroes
