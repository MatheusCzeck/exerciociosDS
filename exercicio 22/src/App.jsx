import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import MediaGrid from './components/MediaGrid.jsx';

export default function App() {
  const [results, setResults] = useState([]);

  // Função que será passada via prop para o SearchBar
  const handleSearch = async (searchQuery) => {
    // Simulação de chamada de API (utilizando o searchQuery se necessário no futuro)
    const mockData = [
      { id: '1a', title: 'Cyberpunk City', url: 'https://via.placeholder.com/300x200' },
      { id: '2b', title: 'Neon Car', url: 'https://via.placeholder.com/300x200' },
      { id: '3c', title: 'Retro Synthwave', url: 'https://via.placeholder.com/300x200' },
      { id: '4d', title: 'Futuristic UI', url: 'https://via.placeholder.com/300x200' }
    ];
    
    setResults(mockData);
  };

  return (
    <div className="app-container">
      <h1>Buscador de Mídia</h1>
      
      {/* Componente de Busca */}
      <SearchBar onSearch={handleSearch} />
      
      {/* Componente de Exibição */}
      <MediaGrid items={results} />
    </div>
  );
}