import { useState, useEffect } from 'react';
import { apiClient } from '../services/api';

/**
 * Custom Hook para abstração de Data Fetching com suporte a cancelamento
 * @param {string} endpoint 
 */
export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Instancia o controlador de aborto
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      // Reseta os estados ao mudar de endpoint
      setLoading(true);
      setError(null);

      try {
        const result = await apiClient(endpoint, { signal });
        setData(result);
      } catch (err) {
        // Ignora o erro se a requisição foi cancelada intencionalmente
        if (err.name !== 'AbortError') {
          setError(err.message || 'Ocorreu um erro inesperado.');
        }
      } finally {
        // Verifica se a requisição não foi cancelada antes de mudar o loading
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // 2. Função de limpeza (Cleanup): cancela a requisição se o componente desmontar
    return () => {
      controller.abort();
    };
  }, [endpoint]); // Executa novamente se o endpoint mudar

  return { data, loading, error };
};