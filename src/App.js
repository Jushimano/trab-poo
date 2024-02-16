import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Telalogin from './Telas/Telalogin/Telalogin';
import Telacadastro from './Telas/Telacadastro/Telacadastro.js'; // Importe o componente de tela de cadastro

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Telalogin />} />
          <Route path="/cadastro" element={<Telacadastro />} />
          <Route path="/" element={<Telacadastro />} />
          <Route path="/login" element={<Telalogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

