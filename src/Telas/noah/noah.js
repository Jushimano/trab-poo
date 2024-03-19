import React from 'react';
import './noah.css'
import apartamento from "./apartamento1 3.png"
import { useNavigate } from 'react-router-dom';
import home1 from "./Barra de opçoes (1).png"
import './noah.css'

function Noah() {
    const navigate = useNavigate();

    const handleapart = () => {
        navigate('/Telaprincipal');
    };
    return (
        <div className="container">
            <img src={apartamento} alt="Apartamento" className='apartamento' />
            <button onClick={handleapart} className="apartamento-button" >apartamentos</button>
            <div className="rating">★ 4.0</div>
            <div className="rating2">360 avaliações</div>
            <p className="location">Noah</p>
            <p className="endereco_apto">Tiradentes- zona 1, Maringá - PR</p>
            <p className="quartos_apto">Suítes: 3</p>
            <p className="vagas_apto">Vagas na garagem: 2</p>
            <p className="area_apto">Área privada: 175m²</p>
            <button className="agente-button" >Conversar com agente imobiliário</button>
            <img src={home1} alt="" className="home1"></img>
        </div>
    )
}

export default Noah;
