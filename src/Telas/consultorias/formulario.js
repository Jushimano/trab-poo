import React from "react";
import './formulario.css';

function Formulario({ vetor, eventoTeclado, cadastrar, obj, selecionar, cancelar, remover, alterar, agentes}) {
    return (
        <div className="container1">
            <text className="titulo_con">CONSULTORIAS</text>
            <form>
                {/*<input type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Seu nome' className="texto_info " />*/}
                <select value={obj.agente} onChange={eventoTeclado} name='agente' className="texto_info">
                    <option value="">Selecione o agente</option>
                    {agentes.map((agente, index) => (
                        <option key={index} value={agente}>{agente}</option>
                    ))}
                </select>
                <input type='date' value={obj.data} onChange={eventoTeclado} name='data' placeholder='Data' className="texto_info " />
                <input type='time' value={obj.horario} onChange={eventoTeclado} name='horario' placeholder='Horario' className="texto_info " />

                <div className="button-wrapper">
                    <input type='button' value='Cadastrar' onClick={cadastrar} className="botao_con" />
                    <input type='button' value='Alterar' onClick={alterar} className="botao_con" />
                    <input type='button' value='Remover' onClick={remover} className="botao_con" />
                    <input type='button' value='Cancelar' onClick={cancelar} className="botao_con" />
                </div>
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
                                <td className="coluna2">{obj.nome}</td>
                                <td className="coluna3">
                                    <button onClick={() => { selecionar(indice) }} className='botao_selecionar'>Selecionar</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Formulario;

