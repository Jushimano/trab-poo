import React from "react";
import './todosclientes.css';

function todosclientes({ clientes, obj, selecionar, cancelar }) {

    return (
        <div className="container1">
            <text className="titulo_con1">CLIENTES</text>
            <form>
                <input type='text' value={obj.nome || 'nome'} readOnly name='nome' className="texto_info2" />
                <input type='text' value={obj.telefone || 'telefone'} readOnly name='telefone' className="texto_info2" />
                <input type='text' value={obj.email || 'email'} readOnly name='email' className="texto_info2" />
                <input type='text' value={obj.cpf || 'cpf'} readOnly name='cpf' className="texto_info2" />
                
                
                <input type='button' value='Cancelar' onClick={cancelar} className="botao_con1" />
     
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

export default todosclientes;
