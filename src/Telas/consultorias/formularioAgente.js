import React from "react";
import './formularioAgente.css';

function Formulario({ vetor, eventoTeclado, obj, selecionar, cancelar, remover}) {
    return (
        <div className="container1">
            <text className="titulo_con">CONSULTORIAS</text>
            <form>
                <input type='text' value={obj.nome} readOnly placeholder='Nome cliente' className="texto_info" />
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
