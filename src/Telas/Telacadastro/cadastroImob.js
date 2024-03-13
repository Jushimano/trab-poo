import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastroImob.css';

function CadastroImob() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/telaprincipalImob');
    };
    return (
        <div className="container">
            <p className="Texto_inicio">PRIMEIROS PASSOS</p>
            <p className="texto_crie">Crie sua conta de maneira rápida e fácil</p>
            <form>
                <label className="razao">
                    Razão social:<br></br>
                    <input type="text" className="box_razao" /><br></br>
                </label>
                <label className="telefone">
                    Telefone (DDD)xxxxxxxx:<br></br>
                    <input type="text" className="box_telefone" /><br></br>
                </label>
                <label className="email">
                    E-mail:<br></br>
                    <input type="text" className="box_email" /><br></br>
                </label>
                <label className="cnpj">
                    CNPJ:<br></br>
                    <input type="text" className="box_cnpj" /><br></br>
                </label>
                <label className="senha">
                    Senha:<br></br>
                    <input type="password" className="box_senha" /><br></br>
                </label>
                <button onClick={handleLogin} type="button" className="botao_signUp">Sign Up</button>
            </form>
        </div>
    )
}

export default CadastroImob;