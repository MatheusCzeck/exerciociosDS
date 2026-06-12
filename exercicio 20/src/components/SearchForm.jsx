// src/components/SearchForm.jsx
import { useState } from 'react';

export function SearchForm({ onSearchSubmit }) {
  // Estado local e isolado para controlar o valor do input em tempo real
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    // Pilar I: Inibe o comportamento nativo de page reload do formulário HTML
    event.preventDefault();

    // Sanitiza a string removendo espaços em branco extras nas pontas
    const cleanTerm = searchTerm.trim();

    // Dispara o callback herdado via props passando o termo atualizado
    onSearchSubmit(cleanTerm);

    // Boa prática de UX: Limpa o campo após a submissão do formulário
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={searchTerm}
        // Atualização do componente controlado a cada caractere digitado
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Digite o nome do filme (ex: Totoro)..."
        style={{
          padding: '10px',
          width: '300px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginRight: '10px'
        }}
      />
      <button 
        type="submit"
        style={{
          padding: '10px 20px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Buscar
      </button>
    </form>
  );
}
