import React from 'react';

function Imovel({ foto, tipo, nome, localizacao }) {
  // Se alguma das informações não for fornecida, não renderize o componente
  if (!foto || !tipo || !nome || !localizacao) {
    return null;
  }

  return (
    <div className="imovel">
      <img src={foto} alt={nome} />
      <div className="tipo">{tipo}</div>
      <div className="nome">{nome}</div>
      <div className="localizacao">{localizacao}</div>
    </div>
  );
}

export default Imovel;
