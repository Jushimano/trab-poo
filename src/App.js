import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telalogin from './Telas/Telalogin/Telalogin';
import Telacadastro from './Telas/Telacadastro/Telacadastro';
import CadastroCliente from './Telas/Telacadastro/cadastrocliente';
import CadastroImob from './Telas/Telacadastro/cadastroImob';
import CadastroAgente from './Telas/Telacadastro/cadastroAgente';
import Logincel from './Telas/Telalogin/Logincel';
import Telaprincipal from './Telas/Telaprincipal/Telaprincipal'
import Telanoah from './Telas/noah/noah'
import Telaconsultoria from './Telas/consultorias/formulario'
import TelaprincipalAg from './Telas/Telaprincipal/TelaprincipalAg'
import TelaprincipalImob from './Telas/Telaprincipal/TelaprincipalImob'
import TelaconsultoriaAg from './Telas/consultorias/formularioAgente'
import Telaprincipaladm from './Telas/Telaprincipal/Telaprincipaladm'
import Telatodosclientes from './Telas/adm/todosclientes'
import Telatodasconsultorias from './Telas/adm/todasconsultorias'
import { AuthProvider } from './authcontext'

function App() {

    //objeto consultoria
    const consultoria = {
        id: 0,
        data: '',
        hora: '',
        creciAgente: '',
        cpfCliente: '',
    }

    //objeto cliente
    const cliente = {
        nome: '',
        telefone: '',
        email: '',
        cpf: '',
        senha: '',
    };

    //useState
    const [consultorias, setConsultoria] = useState([]);
    const [objConsultoria, setObjConsultoria] = useState(consultoria);

    // Estado para armazenar os clientes cadastrados
    const [clientes, setCliente] = useState([]);
    const [objCliente, setObjCliente] = useState(cliente);

    // Cria outro só para listagem de agentes da tela de consultoria?
    const [listaagentes, setListaAgente] = useState([]);

    // Cria outro só para listagem de agentes da tela de consultoria?
    const [listaClientes, setListaClientes] = useState([]);

    const [listaConsultorias, setListaConsultorias] = useState([]);

    //UseEffect
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/consultoria", {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            });

            if (!response.ok) {
                console.error("Error:", response.status);
            } else {
                const consultorias = await response.json();
                setConsultoria(consultorias);
            }
        }

        fetchData();
    }, []);

    //UseEffect para pegar a lista dos agente cadastrados
    useEffect(() => {
        fetch("http://localhost:8080/agente/todos") // Rota do backend para listar os agentes cadastrados
            .then(retorno => retorno.json())
            .then(listaagentes => setListaAgente(listaagentes));
    }, []);

    //UseEffect para pegar a lista dos clientes cadastrados
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/cliente/todos", {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });

                if (!response.ok) {
                    // Handle 403 and other non-OK status codes
                    if (response.status === 403) {
                        console.error("Error: Access denied (403)");
                        // Handle the 403 error specifically (e.g., display error message, redirect)
                        // Your specific actions here (replace with your desired logic)
                    } else {
                        console.error("Error:", response.status);
                        // Handle other non-OK status codes (e.g., display generic error message)
                    }
                } else {
                    const listaclientes = await response.json();
                    setListaClientes(listaclientes);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle network or other errors
            }
        };

        fetchData();
    }, []);

    //UseEffect para pegar a lista das consultorias cadastrados
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/consultoria/todos", {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });

                if (!response.ok) {
                    // Handle 403 and other non-OK status codes
                    if (response.status === 403) {
                        console.error("Error: Access denied (403)");
                        // Handle the 403 error specifically (e.g., display error message, redirect)
                        // Your specific actions here (replace with your desired logic)
                    } else {
                        console.error("Error:", response.status);
                        // Handle other non-OK status codes (e.g., display generic error message)
                    }
                } else {
                    const listaConsultorias = await response.json();
                    setListaConsultorias(listaConsultorias);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle network or other errors
            }
        };

        fetchData();
    }, []);

    //cadastrar cliente
    const cadastrarCliente = () => {
        fetch('http://localhost:8080/auth/registrar', {
            method: 'post',
            body: JSON.stringify(objCliente),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }) //colocar aqui url do backend
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                //colocar no back mensagens de erro! Conforme o video
                if (retorno_convertido.mensagem !== undefined) {
                    console.log("1");
                    alert(retorno_convertido.mensagem);
                } else {
                    setCliente([...clientes, retorno_convertido]);
                    console.log("2");
                    alert('Cliente cadastrado com sucesso!');
                    limparFormularioCliente();
                }

            })
    }

    //obtendo os dados do formulario
    const aoDigitar = (e) => {
        setObjConsultoria({ ...objConsultoria, [e.target.name]: e.target.value });
    }

    //obtendo os dados do formulario cadastro cliente
    const aoDigitar1 = (e) => {
        setObjCliente({ ...objCliente, [e.target.name]: e.target.value });
    }

    //cadastrar consultoria
    const cadastrar = () => {
        fetch('http://localhost:8080/consultoria', {
            method: 'post',
            body: JSON.stringify(objConsultoria),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }) //colocar aqui url do backend
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                //colocar no back mensagens de erro! Conforme o video
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mesagem);
                } else {
                    setConsultoria([...consultorias, objConsultoria]);
                    alert('Consultoria cadastrada com sucesso!');
                    limparFormulario();
                    window.location.reload();
                }
            })
    }

    //Alterar produto
    const alterar = () => {
        fetch('http://localhost:8080/consultoria/' + objConsultoria.id, {
            method: 'put',
            body: JSON.stringify(objConsultoria),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }) //colocar aqui url do backend
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                //colocar no back mensagens de erro! Conforme o video
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mesagem);
                } else {
                    //mensagem
                    alert('Consultoria alterado com sucesso!');

                    //copia do vetor de consultorias
                    let vetorTemp = [...consultorias];

                    // indice 
                    let indice = vetorTemp.findIndex((c) => {
                        return c.codigo === objConsultoria.codigo;
                    });

                    // Alterar consultoria do vetorTemp
                    vetorTemp[indice] = objConsultoria;

                    // Atualizar o veto de consultorias
                    setConsultoria(vetorTemp);

                    //liparformulario
                    limparFormulario();

                    window.location.reload();
                }

            })
    }

    //remover produto
    const remover = () => {
        fetch('http://localhost:8080/consultoria/' + objConsultoria.id, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        window.location.reload();
    }

    //limpar formulario
    const limparFormulario = () => {
        setObjConsultoria(consultoria);
    }

    //limpar formulario cliente
    const limparFormularioCliente = () => {
        setObjCliente(cliente);
    }

    //selecionar consultoria
    const selecionarConsultoria = (indice) => {
        setObjConsultoria(listaConsultorias[indice]);
    }

    //selecionar consultoria
    const selecionarConsultoria1 = (indice) => {
        setObjConsultoria(consultorias[indice]);
    }

    //selecionar cliente
    const selecionarCliente = (indice) => {
        setObjCliente(listaClientes[indice]);
    }

    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Telalogin />} />
                        <Route path="/cadastro" element={<Telacadastro />} />
                        <Route path="/cadastrocliente" element={<CadastroCliente eventoTeclado={aoDigitar1} cadastrarCliente={cadastrarCliente} obj={objCliente} />} />
                        <Route path="/cadastroImob" element={<CadastroImob />} />
                        <Route path="/cadastroAgente" element={<CadastroAgente />} />
                        <Route path="/login" element={<Telalogin />} />
                        <Route path="/logincel" element={<Logincel />} />
                        <Route path="/telaprincipal" element={<Telaprincipal />} />
                        <Route path="/noah" element={<Telanoah />} />
                        <Route path="/telaprincipalAg" element={<TelaprincipalAg />} />
                        <Route path="/telaprincipalImob" element={<TelaprincipalImob />} />
                        <Route path="/telaprincipaladm" element={<Telaprincipaladm />} />
                        <Route path="/formulario" element={<Telaconsultoria vetor={consultorias} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objConsultoria} selecionar={selecionarConsultoria1} cancelar={limparFormulario} remover={remover} alterar={alterar} agentes={listaagentes} />} />
                        <Route path="/formularioAgente" element={<TelaconsultoriaAg vetor={consultorias} eventoTeclado={aoDigitar} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} remover={remover} clientes={listaClientes} />} />
                        <Route path="/todosclientes" element={<Telatodosclientes clientes={listaClientes} obj={objCliente} selecionar={selecionarCliente} cancelar={limparFormularioCliente} />} />
                        <Route path="/todasconsultorias" element={<Telatodasconsultorias vetor={listaConsultorias} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} agentes={listaagentes} clientes={listaClientes} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
