import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Telalogin.css';

function Telalogin() {
  const navigate = useNavigate();

  const handleContinueWithNumber = () => {
    navigate('/logincel');
  };
  return (
    <div className="container">
      <img src={logo} alt="Logo" className='logo' />
      <button onClick={handleContinueWithNumber} className="botao_marrom">Continue com número de celular</button>
      <button className="botao_google">Login com Google</button>
      <button className="botao_facebook">Login com Facebook</button>
      <p className="text">Não possui uma conta? <Link to="/cadastro" className="cadastro">Cadastre-se</Link></p>
    </div>
  );
}

export default Telalogin;
