import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Logincel.css';

function Logincel() {
    const navigate = useNavigate();

    const [accountType, setAccountType] = useState('cliente');

    const handleLogin = () => {
        if (accountType === 'cliente') {
            navigate('/telaprincipal');
        } else if (accountType === 'imobiliaria') {
            navigate('/telaprincipalimob');
        }
        // Adicione mais condições aqui se houver mais tipos de conta
    };
    return (
        <div className='container'>
            <p className="texto_login">Login com número<br></br> de celular/telefone</p>
            <p className="texto_add">Por favor, adicione corretamente o número:<br></br>Exemplo: (44)988269459</p>
            <input type="text" className="box_cel" /><br></br>
            <p className="texto_senha">Digite sua senha:<br></br></p>
            <input type="password" className="box_senha1" /><br></br>
            <p className = "conta">Conta:</p>
            <select value={accountType} onChange={(e) => setAccountType(e.target.value)} className = "opcao">
                <option value="cliente">Cliente</option>
                <option value="agente">Agente Imobiliário</option>
                <option value="imobiliaria">Imobiliária</option>
            </select><br></br>
            <button onClick={handleLogin} type="button" className="botao_login">Login</button>
            <p className="text">Não possui uma conta? <Link to="/cadastro" className="cadastro">Cadastre-se</Link></p>
        </div>
    )
}

export default Logincel;