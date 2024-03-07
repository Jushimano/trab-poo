import React from 'react';
import { useNavigate } from 'react-router-dom';
import flecha from "./arrow-back-outline.png"
import './gerenciar.css';

function Gerenciar({ vetor }) {
    const navigate = useNavigate(); // Utilize useNavigate para a navegação

    const handleAdd = () => {
        navigate('/Addimovel');
    };

    const handleVoltar = () => {
        navigate('/TelaprincipalImob');
    };

    return (
        <div className="container">
            <div className='C2'>
                <p className="texto_imoveis">Seus imóveis</p>
                <button onClick={handleAdd} type="button" className="botao_adicionar">
                    Adicionar novo imóvel
                </button>
                <img src={flecha} alt="" className="voltar3" onClick={handleVoltar}></img>
            </div>
            {vetor.map((imovel, index) => (
                <div key={index} className={index === 0 ? "card_imoveis_primeiro" : "card_imoveis"}>
                    <img src={imovel.imagem} alt="Imóvel" className="img_imo"></img>
                    <button className="classif">{imovel.tipo}</button>
                    <p className="nome_imo">{imovel.nome}</p>
                    <div className='end_imo'>
                        <p>{imovel.rua} - {imovel.bairro}</p>
                        <p>{imovel.complemento}</p>
                        <p>{imovel.cidade} - {imovel.estado}</p>
                    </div>
                    <button className="botao-excluir">Excluir</button>
                    <button className="botao-editar">Editar</button>
                </div>
            ))}
        </div>
    );
}

export default Gerenciar;

