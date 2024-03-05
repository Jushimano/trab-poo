import React from 'react';
import { useNavigate } from 'react-router-dom';
import flecha from "./arrow-back-outline.png"
import home1 from "./Barra de opçoes (1).png";
import './gerenciar.css';

function Gerenciar() {
    const navigate = useNavigate(); // Utilize useNavigate para a navegação

    const handleAdd = () => {
        navigate('/Addimovel');
    };

    const handleVoltar = () => {
        navigate('/TelaprincipalImob');
    };

    return (
        <div className="container">
            <p className="texto_imoveis">Seus imóveis</p>
            <button onClick={handleAdd} type="button" className="botao_adicionar">
                Adicionar novo imóvel
            </button>
            <img src={home1} alt="" className="home1"></img>
            <img src={flecha} alt="" className="voltar3" onClick={handleVoltar}></img>
        </div>
    );
}

export default Gerenciar;
