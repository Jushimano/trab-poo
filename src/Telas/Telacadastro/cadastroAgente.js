import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastroAgente.css';

function CadastroAgente({ eventoTeclado, cadastrarAgente, obj }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/telaprincipalAg');
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
                    Número de celular (DDD)xxxxxxxx:<br></br>
                    <input type="text" value={obj.celular} onChange={eventoTeclado} name='celular' className="box_celular" /><br></br>
                </label>
                <label className="email">
                    E-mail:<br></br>
                    <input type="text" value={obj.email} onChange={eventoTeclado} name='email' className="box_email" /><br></br>
                </label>
                <label className="creci">
                    CRECI:<br></br>
                    <input type="text" value={obj.creci} onChange={eventoTeclado} name='creci' className="box_creci" /><br></br>
                </label>
                <label className="senha">
                    Senha:<br></br>
                    <input type="password" value={obj.senha} onChange={eventoTeclado} name='senha' className="box_senha" /><br></br>
                </label>
                <button onClick={() => { handleLogin(); cadastrarAgente(); }} type="button" className="botao_signUp">Sign Up</button>
            </form>
        </div>
    )
}

export default CadastroAgente;