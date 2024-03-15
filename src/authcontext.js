import React, { createContext, useState } from 'react';

// Criação do contexto de autenticação
export const useAuth = () => React.useContext(AuthContext);

const AuthContext = createContext();

// Provedor de contexto de autenticação
function AuthProvider({ children }) {
  // Estado para armazenar informações de autenticação
  const [user, setUser] = useState(null);

  // Função para fazer login do usuário
  const login = (userData) => {
    // Lógica para fazer login do usuário
    setUser(userData);
  };

  // Função para fazer logout do usuário
  const logout = () => {
    // Lógica para fazer logout do usuário
    setUser(null);
  };

  // Retorna o provedor de contexto com os valores e funções necessários
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
