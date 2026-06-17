import { useState } from 'react';

// Função simulada da API (mantida conforme o enunciado)
const fetchUsuarios = async (nome) => {
  await new Promise(r => setTimeout(r, 2500)); // Simula rede lenta
  return [{ id: 1, nome: `${nome} Silva` }, { id: 2, nome: `${nome} Santos` }];
};

export function useBuscadorUsuarios() {
  const [busca, setBusca] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(null); // Tratamento de erro estruturado

  const executarBusca = async (e) => {
    e.preventDefault();
    if (busca.trim() === '') return;

    setIsLoading(true);
    setErro(null); // Reseta erros de buscas anteriores

    try {
      const resultados = await fetchUsuarios(busca);
      setUsuarios(resultados);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      setErro("Não foi possível carregar os usuários. Tente novamente.");
    } finally {
      setIsLoading(false); // Sempre executa, garantindo a desativação do loading
    }
  };

  // Contrato devolvido pelo Hook
  return {
    busca,
    setBusca,
    usuarios,
    isLoading,
    erro,
    executarBusca
  };
}