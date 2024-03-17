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
    creci: '',
    cpf: '',
  }

  //objeto cliente
  const cliente = {
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    senha: '',
  };

  //objeto agente
  const agente = {
    nome: '',
    celular: '',
    email: '',
    creci: '',
    senha: '',
  };


  //useState
  const [consultorias, setConsultoria] = useState([]);
  const [objConsultoria, setObjConsultoria] = useState(consultoria);

  // Estado para armazenar os clientes cadastrados
  const [clientes, setCliente] = useState([]);
  const [objCliente, setObjCliente] = useState(cliente);

  // Estado para armazenar os agentes imobiliarios cadastrados
  const [agentes, setAgente] = useState([]);
  const [objAgente, setObjAgente] = useState(agente);

  // Cria outro só para listagem de agentes da tela de consultoria?
  const [listaagentes, setListaAgente] = useState([]);

  // Cria outro só para listagem de agentes da tela de consultoria?
  const [listaclientes, setListaClientes] = useState([]);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/consultoria/todos") //colocar aqui a url da aplicação backend que retorna a lista
      .then(retorno => retorno.json())
      .then(retorno_convertido => setConsultoria(retorno_convertido));
  }, []);

  //UseEffect para pegar a lista dos agente cadastrados
  useEffect(() => {
    fetch("http://localhost:8080/listarAgentes") // Rota do backend para listar os agentes cadastrados
      .then(retorno => retorno.json())
      .then(listaagentes => setListaAgente(listaagentes));
  }, []);

  //UseEffect para pegar a lista dos clientes cadastrados
  useEffect(() => {
    fetch("http://localhost:8080/cliente/todos") // Rota do backend para listar os agentes cadastrados
      .then(retorno => retorno.json())
      .then(listaclientes => setListaClientes(listaclientes));
  }, []);

  //cadastrar cliente
  const cadastrarCliente = () => {
    fetch('http://localhost:8080/cliente', {
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

  //cadastrar agente
  const cadastrarAgente = () => {
    fetch('http://localhost:8080/agente/cadastrar', {
      method: 'post',
      body: JSON.stringify(objAgente),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }) //colocar aqui url do backend
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        //colocar no back mensagens de erro! Conforme o video
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mesagem);
        } else {
          setAgente([...agentes, retorno_convertido]);
          alert('Cliente cadastrado com sucesso!');
          limparFormularioAgente();
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

  //obtendo os dados do formulario cadastro agente
  const aoDigitar2 = (e) => {
    setObjAgente({ ...objAgente, [e.target.name]: e.target.value });
  }

  //cadastrar consultoria
  const cadastrar = () => {
    fetch('http://localhost:8080/consultoria', {
      method: 'post',
      body: JSON.stringify(objConsultoria),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }) //colocar aqui url do backend
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        //colocar no back mensagens de erro! Conforme o video
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mesagem);
        } else {
          setConsultoria([...consultorias, retorno_convertido]);
          alert('Consultoria cadastrada com sucesso!');
          limparFormulario();
        }

      })
  }

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/consultoria/' + objConsultoria.codigo, {
      method: 'patch',
      body: JSON.stringify(objConsultoria),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
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
        }

      })
  }

  //remover produto
  const remover = () => {
    fetch('http://localhost:8080/consultoria/' + objConsultoria.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }) //colocar aqui url do backend
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        // Mensagem
        alert(retorno_convertido.mensagem);

        //copia do vetor de consultorias
        let vetorTemp = [...consultorias];

        // indice 
        let indice = vetorTemp.findIndex((c) => {
          return c.codigo === objConsultoria.codigo;
        });

        // Remover consultoria do vetorTemp
        vetorTemp.splice(indice, 1);

        // Atualizar o veto de consultorias
        setConsultoria(vetorTemp);

        // Limpar formulário
        limparFormulario();

      })
  }

  //limpar formulario
  const limparFormulario = () => {
    setObjConsultoria(consultoria);
  }

  //limpar formulario cliente
  const limparFormularioCliente = () => {
    setObjCliente(cliente);
  }

  //limpar formulario agente
  const limparFormularioAgente = () => {
    setObjAgente(agente);
  }

  //selecionar consultoria
  const selecionarConsultoria = (indice) => {
    setObjConsultoria(consultorias[indice]);
  }

  //selecionar consultoria
  const selecionarCliente = (indice) => {
    setObjConsultoria(clientes[indice]);
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
            <Route path="/cadastroAgente" element={<CadastroAgente eventoTeclado={aoDigitar2} cadastrarAgente={cadastrarAgente} obj={objAgente} />} />
            <Route path="/login" element={<Telalogin />} />
            <Route path="/logincel" element={<Logincel />} />
            <Route path="/telaprincipal" element={<Telaprincipal />} />
            <Route path="/noah" element={<Telanoah />} />
            <Route path="/telaprincipalAg" element={<TelaprincipalAg />} />
            <Route path="/telaprincipalImob" element={<TelaprincipalImob />} />
            <Route path="/telaprincipaladm" element={<Telaprincipaladm />} />
            <Route path="/formulario" element={<Telaconsultoria vetor={consultorias} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} remover={remover} alterar={alterar} agentes={listaagentes} />} />
            <Route path="/formularioAgente" element={<TelaconsultoriaAg vetor={consultorias} eventoTeclado={aoDigitar} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} remover={remover} clientes={listaclientes} />} />
            <Route path="/todosclientes" element={<Telatodosclientes clientes={listaclientes} obj={objCliente} selecionar={selecionarCliente} cancelar={limparFormularioCliente}/>} />
            <Route path="/todasconsultorias" element={<Telatodasconsultorias vetor={consultorias} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} agentes={listaagentes} clientes={listaclientes}/>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
