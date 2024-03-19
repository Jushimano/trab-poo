import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authcontext'; // Importe o hook useAuth
import './Logincel.css';
import Voltar from '../arrow-back-outline.png'

function Logincel() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Use o hook useAuth para obter a função de login

    const [accountType, setAccountType] = useState('cliente');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            // Enviar as credenciais para o backend
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telefone, senha }), // Adiciona o accountType
            });

            const data = await response.json();

            // Verificar se as credenciais foram autenticadas com sucesso
            if (response.ok) {
                // Credenciais válidas, chamar a função de login do contexto de autenticação
                localStorage.setItem('token', data.token); // Passa os dados do usuário autenticado para o contexto de autenticação

                // Redirecionar para a página apropriada com base no tipo de conta
                if (accountType === 'cliente') {
                    navigate('/telaprincipal');
                } else if (accountType === 'adm') {
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

    const handleVolteClick = () => {
        navigate('/login');
    };

    return (
        <div className='container'>
            <p className="texto_login">Login com número<br></br> de celular/telefone</p>
            <p className="texto_add">Por favor, adicione corretamente o seu número<br></br>de telefone:</p>
            <input type="text" className="box_cel" value={telefone} onChange={(e) => setTelefone(e.target.value)} /><br></br>
            <p className="texto_senha">Digite sua senha:<br></br></p>
            <input type="password" className="box_senha1" value={senha} onChange={(e) => setSenha(e.target.value)} /><br></br>
            <p className="conta">Conta:</p>
            <select value={accountType} onChange={(e) => setAccountType(e.target.value)} className="opcao">
                <option value="cliente">Cliente</option>
                <option value="adm">Administrador</option>
            </select><br></br>
            <button onClick={handleLogin} type="button" className="botao_login">Login</button>
            <p className="text">Não possui uma conta? <Link to="/cadastro" className="cadastro">Cadastre-se</Link></p>
            <img src={Voltar} onClick = {handleVolteClick} className = "voltar"alt="Descrição da imagem" />
        </div>
    )
}

export default Logincel;
