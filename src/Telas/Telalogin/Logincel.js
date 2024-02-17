import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Logincel.css';

function Logincel() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/telaprincipal');
    };
    return (
        <div className='container'>
            <p className="texto_login">Login com número<br></br> de celular/telefone</p>
            <p className="texto_add">Por favor, adicione corretamente o número<br></br>Exemplo: (44)988269459</p>
            <input type="text" className="box_cel" /><br></br>
            <button onClick={handleLogin} type="button" className="botao_login">Login</button>
            <p className="text">Não possui uma conta? <Link to="/cadastro" className="cadastro">Cadastre-se</Link></p>
        </div>
    )
}

export default Logincel;