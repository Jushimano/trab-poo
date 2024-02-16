import React from 'react';
import './cadastrocliente.css';

function cadastrocliente() {
    return (
        <div className="container">
            <p className="Texto_inicio">PRIMEIROS PASSOS</p>
            <p className="texto_crie">Crie sua conta de maneira rápida e fácil</p>
            <form>
                <label className = "nome">
                    Nome completo:<br></br>
                    <input type="text"className = "box_nome"/><br></br>
                </label>
                <label className = "celular">
                    Número de celular:<br></br>
                    <input type="text"className = "box_celular"/><br></br>
                </label>
                <button type="button">Sign Up</button>
            </form>
        </div>
    )
}

export default cadastrocliente;