import React from "react";
import { useAuth } from '/home/julia/POO/imobilearea_poo/src/authcontext';
import './formularioAgente.css';

function Formulario({ vetor, eventoTeclado, obj, selecionar, cancelar, remover, clientes }) {
    const { user } = useAuth();
    const creciUsuarioAtivo = user && user.creci ? user.creci : '';
    const nomeCliente = clientes.find(cliente => cliente.cpf === obj.cpf)?.nome || 'Nome cliente';
    return (
        <div className="container1">
            <text className="titulo_con">CONSULTORIAS</text>
            <form>
                <input type='text' value={nomeCliente} readOnly placeholder='Nome cliente' className="texto_info" />
                <input type='date' value={obj.data} onChange={eventoTeclado} name='data' placeholder='Data' className="texto_info " />
                <input type='time' value={obj.horario} onChange={eventoTeclado} name='horario' placeholder='Horario' className="texto_info " />

                <div className="button-wrapper">
                    <input type='button' value='Remover' onClick={remover} className="botao_con1" />
                    <input type='button' value='Cancelar' onClick={cancelar} className="botao_con1" />
                </div>
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
                        vetor.map((obj, indice) => (
                            // Adicione esta verificação para filtrar apenas as consultorias com o mesmo CRECI do cliente ativo
                            (obj.creci === creciUsuarioAtivo) && (
                                <tr key={indice}>
                                    <td className="coluna1">{indice + 1}</td>
                                    <td className="coluna2">{
                                        clientes.find(cliente => cliente.cpf)?.nome||'cliente não encontrado'
                                    }</td>
                                    <td className="coluna3">
                                        <button onClick={() => { selecionar(indice) }} className='botao_selecionar'>Selecionar</button>
                                    </td>
                                </tr>
                            )
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Formulario;
