// src/services/movieService.js

/**
 * Busca filmes de forma dinâmica filtrando pelo termo de pesquisa.
 * @param {string} query - Termo de busca inserido pelo usuário.
 * @returns {Promise<Array>} Lista de filmes filtrados.
 */
export const searchMovies = async (query) => {
    // Caso o usuário envie um termo vazio, evitamos a chamada de rede desnecessária
    if (!query.trim()) return [];
  
    try {
      const url = 'https://ghibliapi.vercel.app/films';
      
      // Executa a requisição assíncrona para o endpoint
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      // Desestruturação e conversão do payload para JSON
      const data = await response.json();
  
      // Filtra dinamicamente os filmes cujo título contenha o termo digitado (case-insensitive)
      const filteredMovies = data.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
  
      return filteredMovies;
    } catch (error) {
      console.error('Erro na camada de serviço (searchMovies):', error);
      throw error; // Propaga o erro para ser tratado pela UI se necessário
    }
  };
  