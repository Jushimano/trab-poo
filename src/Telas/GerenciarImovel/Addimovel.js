import React from 'react';
import './Addimovel.css';
import flecha from "./arrow-back-outline.png";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para a navegação

function Addimovel() {
    const navigate = useNavigate(); // Utilize useNavigate para a navegação

    // Função para voltar para a tela de gerenciamento
    const handleVoltar = () => {
        navigate('/gerenciar'); // Navega para a rota '/gerenciar'
    };

    // Função para ir para a tela Addimovel2
    const handleContinuar = () => {
        navigate('/Addimovel2'); // Navega para a rota '/Addimovel2'
    };

    return (
        <div className="container">
            <p className="texto_novo">Novo imóvel</p>
            <form>
                <label className="texto_1">
                    Nome do imóvel<br></br>
                    <input type="text" className="box_texto1" /><br></br>
                </label>
                <label className="texto_2">
                    Área privada (m²)<br></br>
                    <input type="text" className="box_texto2" /><br></br>
                </label>
                <label className="texto_3">
                    N° de quartos:<br></br>
                    <select className="box_texto3">
                        {[...Array(11).keys()].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select><br></br>
                </label>
                <label className="texto_4">
                    N° de vagas na garagem:<br></br>
                    <select className="box_texto4">
                        {[...Array(11).keys()].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select><br></br>
                </label>
                <label className="texto_5">
                    Tipo de imóvel:<br></br>
                    <select className="box_texto5">
                        <option value="apartamento">Apartamento</option>
                        <option value="casa">Casa</option>
                        <option value="comercial">Comercial</option>
                    </select><br></br>
                </label>
                <label className="texto_6">
                    Imagem do imóvel:<br></br>
                    <input type="file" accept="image/*" className="box_texto6" /><br></br>
                </label>
            </form>
            <img src={flecha} alt="" className="voltar" onClick={handleVoltar}></img>
            <button type="button" className="botao_continuar" onClick={handleContinuar}>
                Continuar
            </button>
        </div>
    )
}

export default Addimovel;