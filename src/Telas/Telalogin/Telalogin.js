import React from 'react';
import logo from './logo.png'; // Verifique se o caminho da imagem está correto
import './Telalogin.css';

function Telalogin() {
    return (
      <div className="container">
        <img src={logo} alt="Logo" className = 'logo' />
        <div className="content">
            <button className = "botao_marrom">Continue com número de celular</button>
            <button ClassName = "botao_google">Login com Google</button>
        </div>
      </div>
    );
  }

export default Telalogin; // Adicione esta linha para exportar o componente como padrão
