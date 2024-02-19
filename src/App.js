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
        </Routes>
      </div>
    </Router>
  );
}

export default App;


