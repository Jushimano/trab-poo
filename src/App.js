import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Telalogin from './Telas/Telalogin/Telalogin';
import Telacadastro from './Telas/Telacadastro/Telacadastro';
import CadastroCliente from './Telas/Telacadastro/cadastrocliente';
import CadastroImob from './Telas/Telacadastro/cadastroImob';
import CadastroAgente from './Telas/Telacadastro/cadastroAgente';
import Logincel from './Telas/Telalogin/Logincel';
import Telaprincipal from './Telas/Telaprincipal/Telaprincipal'
import TelaprincipalImob from './Telas/Telaprincipal/TelaprincipalImob'
import Telanoah from './Telas/noah/noah'
import Telagerenciar from './Telas/GerenciarImovel/gerenciar'
import Telaadd from './Telas/GerenciarImovel/Addimovel'
import Telaadd2 from './Telas/GerenciarImovel/Addimovel2'

function App() {
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
          <Route path="/telaprincipalimob" element={<TelaprincipalImob />} />
          <Route path="/noah" element={<Telanoah/>} />
          <Route path="/gerenciar" element={<Telagerenciar/>} />
          <Route path="/Addimovel" element={<Telaadd/>} />
          <Route path="/Addimovel2" element={<Telaadd2/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


