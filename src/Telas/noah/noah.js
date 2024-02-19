import React from 'react';
import './noah.css'
import apartamento from "./apartamento1 3.png"
import home1 from "./Barra de opçoes (1).png"
import './noah.css'

function Noah() {
    return (
        <div className="container">
            <img src={apartamento} alt="Apartamento" className='apartamento' />
            <button className="apartamento-button">apartamentos</button>
            <div className="rating">★ 4.0</div>
            <div className="rating2">360 avaliações</div>
            <p className="location">Noah</p>
            <p className="endereco_apto">Tiradentes- zona 1, Maringá - PR</p>
        </div>
    )
}

export default Noah;
