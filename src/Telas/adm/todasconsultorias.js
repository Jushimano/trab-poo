import React from "react";
import './todasconsultorias.css';
import { useNavigate } from 'react-router-dom'
import Voltar from '../arrow-back-outline.png';

function Todasconsultorias({ vetor, obj, selecionar, cancelar, agentes, clientes }) {
    const navigate = useNavigate();

    // Função para encontrar o nome do cliente pelo CPF
    const encontrarNomeCliente = (cpf) => {
        const cliente = clientes.find(cliente => cliente.cpf === cpf);
        return cliente ? cliente.nome : 'Cliente não encontrado';
    };

    // Função para encontrar o nome do agente pelo CRECI
    const encontrarNomeAgente = (creci) => {
        const agente = agentes.find(agente => agente.creci === creci);
        return agente ? agente.nome : 'Agente não encontrado';
    };

    const handleVolteClick = () => {
        navigate('/telaprincipaladm');
    };

    return (
        <div className="container1">
            <text className="titulo_con">CONSULTORIAS</text>
            <form>
                <input type='text' value={encontrarNomeCliente(obj.cpfCliente)} readOnly name='cpf' className="texto_info1" />
                <input type='text' value={encontrarNomeAgente(obj.creciAgente)} readOnly name='creci' className="texto_info1" />
                <input type='date' value={obj.data } readOnly name='data' placeholder='Data' className="texto_info1" style={{ textAlign: 'center' }}/>
                <input type='time' value={obj.hora} readOnly name='hora' placeholder='Horario' className="texto_info1" />
                <input type='button' value='Cancelar' onClick={cancelar} className="botao_con1" />

                <img src={Voltar} onClick = {handleVolteClick} className = "voltar4"alt="Descrição da imagem" />
     
            </form>
            <table className="tabela_con">
                <thead>
                    <tr>
                        <th className="coluna1">#</th>
                        <th className="coluna2" >Nome agente</th>
                        <th className="coluna3">Selecionar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vetor.map((obj, indice) => (
                                <tr key={indice}>
                                    <td className="coluna1">{indice + 1}</td>
                                    <td className="coluna2">
                                        {encontrarNomeAgente(obj.creciAgente)}
                                    </td>
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

export default Todasconsultorias;
