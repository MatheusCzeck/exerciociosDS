import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Evita buscas vazias ou apenas com espaços
    if (!query.trim()) return; 
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar mídias..."
        aria-label="Campo de busca"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}