import React from 'react';
import './Addimovel2.css';
import flecha from "./arrow-back-outline.png"
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para a navegação

function Addimovel2(){
    const navigate = useNavigate(); // Inicializa o useNavigate

    // Função para voltar para a tela "Addimovel"
    const handleVoltar = () => {
        navigate('/Addimovel'); // Navega para a tela "Addimovel"
    };

    // Função para ir para a tela "gerenciar.js"
    const handleConcluir = () => {
        navigate('/gerenciar'); // Navega para a tela "gerenciar.js"
    };

    return(
        <div className= 'container'>
            <p className="texto_novo2">Novo imóvel</p>
            <form>
                <label className="Rua">
                    Rua<br></br>
                    <input type="text" className="box_rua" /><br></br>
                </label>
                <label className="bairro">
                    Bairro<br></br>
                    <input type="text" className="box_bairro" /><br></br>
                </label>
                <label className="complemento">
                    Complemento<br></br>
                    <input type="text" className="box_complemento" /><br></br>
                </label>
                <label className="cidade">
                    Cidade<br></br>
                    <input type="text" className="box_cidade" /><br></br>
                </label>
                <label className="estado">
                    Estado<br></br>
                    <input type="text" className="box_estado" /><br></br>
                </label>
            </form>
            <img src={flecha} alt="" className="voltar2" onClick={handleVoltar}></img>
            <button type="button" className="botao_concluir" onClick={handleConcluir}>
                Concluir
            </button>
        </div>
    )
}

export default Addimovel2;

