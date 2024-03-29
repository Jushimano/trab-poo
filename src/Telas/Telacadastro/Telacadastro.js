import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Telacadastro.css';
import Voltar from '../arrow-back-outline.png';

function Telacadastro() {
    const [accountType, setAccountType] = useState('');

    const navigate = useNavigate();

    const handleRadioChange = (event) => {
        setAccountType(event.target.value);
    };

    const handleContinueClick = () => {
        if (accountType === 'Cliente') {
            navigate('/cadastrocliente');
        }
    };
    
    const handleVolteClick = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <p className="Texto_inicio">SEJA BEM VINDO!</p>
            <p className="texto_crie">Crie sua conta de maneira rápida e fácil</p>
            <p className="texto_tipo">Selecione o tipo de conta que deseja<br></br>criar:</p>
            <label className="radio1">
                <input type="radio" name="accountType" value="Cliente" checked={accountType === 'Cliente'} onChange={handleRadioChange} />
                Cliente
            </label>
            <label className="radio2">
                <input type="radio" name="accountType" value="Imobiliária" checked={accountType === 'Imobiliária'} onChange={handleRadioChange} />
                Imobiliária
            </label>
            <label className="radio3">
                <input type="radio" name="accountType" value="Agente Imobiliário" checked={accountType === 'Agente Imobiliário'} onChange={handleRadioChange} />
                Agente Imobiliário
            </label>
            <button onClick={handleContinueClick} className = "botao_continue">Continue</button>
            <p className="text">Já possui uma conta? <Link to="/login" className="login">Login</Link></p>
            <img src={Voltar} onClick = {handleVolteClick} className = "voltar1"alt="Descrição da imagem" />
        </div>
    );
}

export default Telacadastro;

