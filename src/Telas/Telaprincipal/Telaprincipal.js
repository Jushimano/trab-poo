import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Telaprincipal.css'
import notificacao from './notificação.png'
import noah from './Noah.png'
import atrium from './Atrium.png'
import casa from './Casa brenner (1).png'
import home from './Barra de opçoes.png'


function Telaprincipal() {
    const [activeButton, setActiveButton] = useState('apartamentos');
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/noah');
    };

    const handleSairClick = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleConsultoriaClick = () => {
       navigate('/formulario')
        console.log("Botão de consultoria clicado!");
    };

    return (
        <div className="container">
            <p className="texto_encontre1">Encontre seu<br></br>imóvel dos sonhos</p>
            <img src={notificacao} alt="notificacao" className="notificacao1" />
            <input type="text" className="pesquisa" placeholder="Qual região você procura? " /><br></br>
            <p className="pop">Populares</p>
            <div className="button-container">
                <button className={activeButton === 'apartamentos' ? 'active' : ''} onClick={() => setActiveButton('apartamentos')}>Apartamentos</button>
                <button className={activeButton === 'casas' ? 'active' : ''} onClick={() => setActiveButton('casas')}>Casas</button>
                <button className={activeButton === 'comercial' ? 'active' : ''} onClick={() => setActiveButton('comercial')}>Comercial</button>
            </div>
            {activeButton === 'apartamentos' && <img src={noah} alt="Imagem Apartamento" className="noah" onClick={handleImageClick}/>}
            {activeButton === 'casas' && <img src={casa} alt="Imagem Casas" className="noah" />}
            {activeButton === 'comercial' && <img src={atrium} alt="Imagem Comercial" className="noah" />}
            <button  className = 'consultoria1' onClick={handleConsultoriaClick}>Consultoria</button>
            <button  className = 'sair1' onClick={handleSairClick}>Sair</button>
            <img src={home} alt = "" className="home1"></img>
        </div>
    )
}

export default Telaprincipal;

