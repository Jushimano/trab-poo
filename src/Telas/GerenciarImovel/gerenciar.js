import React from 'react';
import { useNavigate } from 'react-router-dom';
import flecha from "./arrow-back-outline.png"
import apartamento from "./apartamento1 3.png"
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
        <div className="container1">
            <p className="texto_imoveis">Seus imóveis</p>
            <button onClick={handleAdd} type="button" className="botao_adicionar">
                Adicionar novo imóvel
            </button>
            <img src={flecha} alt="" className="voltar3" onClick={handleVoltar}></img>

            <div className="card_imoveis_primeiro">
                <img src={apartamento} alt="Imóvel" className="img_imo"></img>
                <button className="classif">Apartamento</button>
                <p className="nome_imo">Noah</p>
                <div className='end_imo'>
                    <p>Rua Tiradentes - Zona 1</p>
                    <p>Maringá - PR</p>
                </div>
                <button className="botao-editar">Editar</button>
                <button className="botao-excluir">Excluir</button>
            </div>
        </div>
    );
}

export default Gerenciar;