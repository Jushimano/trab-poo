import React from "react";
import './todosclientes.css';
import { useNavigate } from 'react-router-dom';
import Voltar from '../arrow-back-outline.png';

function Todosclientes({ clientes, obj, selecionar, cancelar }) {

    const navigate = useNavigate();

    const handleVolteClick = () => {
        navigate('/telaprincipaladm');
    };

    return (
        <div className="container1">
            <text className="titulo_con1">CLIENTES</text>
            <form>
                <input type='text' value={obj.nome || 'nome'} readOnly name='nome' className="texto_info2" />
                <input type='text' value={obj.telefone || 'telefone'} readOnly name='telefone' className="texto_info2" />
                <input type='text' value={obj.email || 'email'} readOnly name='email' className="texto_info2" />
                <input type='text' value={obj.cpf || 'cpf'} readOnly name='cpf' className="texto_info2" />
                
                
                <input type='button' value='Cancelar' onClick={cancelar} className="botao_con1" />

                <img src={Voltar} onClick = {handleVolteClick} className = "voltar5"alt="Descrição da imagem" />
     
            </form>
            <table className="tabela_con">
                <thead>
                    <tr>
                        <th className="coluna1">#</th>
                        <th className="coluna2" >Nome cliente</th>
                        <th className="coluna3">Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((obj, indice) => (
                                <tr key={indice}>
                                    <td className="coluna1">{indice + 1}</td>
                                    <td className="coluna2">{obj.nome}</td>
                                    <td className="coluna3">
                                        <button onClick={() => { selecionar(indice) }} className='botao_selecionar'>Selecionar</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todosclientes;
