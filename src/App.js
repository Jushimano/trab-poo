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

function App() {

  //objeto consultoria
  const consultoria = {
    codigo: 0,
    nome: '',
    agente: '',
    data: null, //será que é null?
    horario: null,
  }

  //useState
  const [consultorias, setConsultoria] = useState([]);
  const [objConsultoria, setObjConsultoria] = useState(consultoria);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar") //colocar aqui a url da aplicação backend que retorna a lista
      .then(retorno => retorno.json())
      .then(retorno_convertido => setConsultoria(retorno_convertido));
  }, []);

  //obtendo os dados do formulario
  const aoDigitar = (e) => {
    setObjConsultoria({ ...objConsultoria, [e.target.name]: e.target.value });
  }

  //cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
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
    fetch('http://localhost:8080/alterar', {
      method: 'put',
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
    fetch('http://localhost:8080/remover' + objConsultoria.codigo, {
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

  //selecionar consultoria
  const selecionarConsultoria = (indice) => {
    setObjConsultoria(consultorias[indice]);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Telalogin />} />
          <Route path="/cadastro" element={<Telacadastro />} />
          <Route path="/cadastrocliente" element={<CadastroCliente />} />
          <Route path="/cadastroImob" element={<CadastroImob />} />
          <Route path="/cadastroAgente" element={<CadastroAgente />} />
          <Route path="/login" element={<Telalogin />} />
          <Route path="/logincel" element={<Logincel />} />
          <Route path="/telaprincipal" element={<Telaprincipal />} />
          <Route path="/noah" element={<Telanoah />} />
          <Route path="/formulario" element={<Telaconsultoria vetor={consultorias} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objConsultoria} selecionar={selecionarConsultoria} cancelar={limparFormulario} remover={remover} alterar={alterar} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


