import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastrocliente.css';
import Voltar from '../arrow-back-outline.png'

function Cadastrocliente({ eventoTeclado, cadastrarCliente, obj }) { // Use a sintaxe de desestruturação para receber as propriedades
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/logincel');
    };

    const handleVolteClick = () => {
        navigate('/cadastro');
    };

    return (
        <div className="container">
            <p className="Texto_inicio">PRIMEIROS PASSOS</p>
            <p className="texto_crie">Crie sua conta de maneira rápida e fácil</p>
            <form>
                <label className="nome">
                    Nome completo:<br></br>
                    <input type="text" value={obj.nome} onChange={eventoTeclado} name='nome' className="box_nome" /><br></br>
                </label>
                <label className="celular">
                    Número de celular DDD9xxxxxxx:<br></br>
                    <input type="text" value={obj.telefone} onChange={eventoTeclado} name='telefone' className="box_celular" /><br></br>
                </label>
                <label className="email">
                    E-mail:<br></br>
                    <input type="text" value={obj.email} onChange={eventoTeclado} name='email' className="box_email" /><br></br>
                </label>
                <label className="cpf">
                    CPF:<br></br>
                    <input type="text" value={obj.cpf} onChange={eventoTeclado} name='cpf' className="box_cpf" /><br></br>
                </label>
                <label className="senha">
                    Senha:<br></br>
                    <input type="password" value={obj.senha} onChange={eventoTeclado} name='senha' className="box_senha" /><br></br>
                </label>
                <button onClick={() => { handleLogin(); cadastrarCliente(); }} type="button" className="botao_signUp">Sign Up</button>
                <img src={Voltar} onClick = {handleVolteClick} className = "voltar2"alt="Descrição da imagem" />
            </form>
        </div>
    );
}

export default Cadastrocliente;
