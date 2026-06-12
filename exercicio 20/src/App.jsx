// src/App.jsx
import { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { searchMovies } from './services/movieService';

export default function App() {
  // Estados locais para controle do fluxo de dados e interface
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pilar III: Orquestração do fluxo assíncrono disparado pelo formulário filho
  const handleSearch = async (query) => {
    if (!query) return;

    // Reseta estados de controle e ativa o feedback visual de loading
    setLoading(true);
    setError(null);

    try {
      // Invoca a camada de serviço desacoplada
      const results = await searchMovies(query);
      
      // Atualiza o estado com a nova lista de elementos retornada
      setMovies(results);
    } catch (err) {
      setError('Não foi possível carregar os filmes. Tente novamente.');
    } finally {
      // Garante a desativação do loading independente do sucesso ou falha da Promessa
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎬 MovieFinder - Studio Ghibli</h1>
      <p style={{ color: '#666' }}>Demonstração prática de Interceptação de Eventos e Requisições Assíncronas.</p>
      
      {/* Injeção do componente de formulário passando a referência da função manipuladora */}
      <SearchForm onSearchSubmit={handleSearch} />

      {/* Renderização Condicional de Feedbacks e Estados da UI */}
      {loading && <p style={{ fontStyle: 'italic', color: '#0070f3' }}>Buscando filmes na API...</p>}
      
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p style={{ color: '#888' }}>Nenhum filme listado. Use o campo acima para pesquisar.</p>
      )}

      {/* Renderização Dinâmica da Lista de Resultados */}
      <div style={{ marginTop: '20px' }}>
        {movies.map((movie) => (
          <article 
            key={movie.id} 
            style={{ 
              borderBottom: '1px solid #eee', 
              paddingBottom: '15px', 
              marginBottom: '15px' 
            }}
          >
            <h3 style={{ margin: '0 0 5px 0', color: '#111' }}>{movie.title}</h3>
            <h4 style={{ margin: '0 0 10px 0', color: '#666', fontWeight: 'normal' }}>
              Título Original: {movie.original_title} ({movie.release_date})
            </h4>
            <p style={{ margin: '0', color: '#444', lineHeight: '1.5', fontSize: '14px' }}>
              {movie.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
