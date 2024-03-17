import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '/home/julia/POO/imobilearea_poo/src/authcontext'; // Importe o hook useAuth
import './Logincel.css';

function Logincel() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Use o hook useAuth para obter a função de login

    const [accountType, setAccountType] = useState('cliente');
    const [info, setInfo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Enviar as credenciais para o backend
            const response = await fetch('URL_DO_BACKEND/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ info, password, accountType }), // Adiciona o accountType
            });

            const data = await response.json();

            // Verificar se as credenciais foram autenticadas com sucesso
            if (response.ok) {
                // Credenciais válidas, chamar a função de login do contexto de autenticação
                login(data); // Passa os dados do usuário autenticado para o contexto de autenticação

                // Redirecionar para a página apropriada com base no tipo de conta
                if (data.accountType === 'cliente') {
                    navigate('/telaprincipal');
                } else if (data.accountType === 'adm') {
                    navigate('/telaprincipaladm');
                }
            } else {
                // Credenciais inválidas, exibir uma mensagem de erro
                alert('Número de telefone ou senha inválidos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className='container'>
            <p className="texto_login">Login com número<br></br> de celular/telefone</p>
            <p className="texto_add">Por favor, adicione corretamente o seu<br></br>CPF ou CNPJ ou CRECI:</p>
            <input type="text" className="box_cel" value={info} onChange={(e) => setInfo(e.target.value)} /><br></br>
            <p className="texto_senha">Digite sua senha:<br></br></p>
            <input type="password" className="box_senha1" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
            <p className="conta">Conta:</p>
            <select value={accountType} onChange={(e) => setAccountType(e.target.value)} className="opcao">
                <option value="cliente">Cliente</option>
                <option value="adm">Administrador</option>
            </select><br></br>
            <button onClick={handleLogin} type="button" className="botao_login">Login</button>
            <p className="text">Não possui uma conta? <Link to="/cadastro" className="cadastro">Cadastre-se</Link></p>
        </div>
    )
}

export default Logincel;
