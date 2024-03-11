import React from "react";
import './formulario.css';

function Formulario() {
    return (
        <div className="container1">
            <text className="titulo_con">CONSULTORIAS</text>
            <form>
                <input type='text' placeholder='Seu nome' className="texto_info " />
                <input type='text' placeholder='Nome agente' className="texto_info " />
                <input type='text' placeholder='Data' className="texto_info " />
                <input type='text' placeholder='Horario' className="texto_info " />

                <div className="button-wrapper">
                    <input type='button' value='Cadastrar' className="botao_con" />
                    <input type='button' value='Alterar' className="botao_con" />
                    <input type='button' value='Remover' className="botao_con" />
                    <input type='button' value='Cancelar' className="botao_con" />
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
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="coluna1">1</td>
                        <td className="coluna2">Julia Shimano Saitoooooooooooooooooooooooo</td>
                        <td className="coluna3">
                            <button className='botao_selecionar'>Selecionar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Formulario;

