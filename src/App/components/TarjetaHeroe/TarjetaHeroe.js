import React from 'react'

const TarjetaHeroe = ({heroe}) => {
    return (
        <div className="card animated fadeIn fast">
        <img src={heroe.img} alt={heroe.nombre} className="card-img-top img-fluid" />
        <div className="card-body">
        <h4 className="card-title">{heroe.nombre}</h4>
        <p className="card-text">{heroe.bio}}</p>
        <p className="card-text">
            <small className="text-muted">{heroe.aparicion}}</small>
        </p>
        <button type="button" className="btn btn-outline-primary btn-block">
            Ver más...
        </button>
    </div>
</div>
    )
}

export default TarjetaHeroe;