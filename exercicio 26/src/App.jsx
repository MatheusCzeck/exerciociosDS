// src/App.jsx
import { useState } from 'react';
import { Buscador } from './components/Buscador';
import { GifGrid } from './components/GifGrid';
import './App.css'

export default function App() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);

  // Função orquestradora que lida com o evento de submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valorInput.trim().length <= 1) return;

    const apiKey = 'sjckuQ1ZWfnsYfqoubGdWJlETZASSyth'; // Obter no portal de desenvolvedores do Giphy
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(valorInput)}&limit=4`;

    try {
      const resposta = await fetch(url);
      const { data } = await resposta.json();

      // Mapeia a estrutura da API do Giphy exatamente como nossa árvore espera
      const gifsFormatados = data.map(img => ({
        id: img.id,
        title: img.title,
        images: {
          original: {
            url: img.images.original.url
          }
        }
      }));

      setGifs(gifsFormatados);
      setValorInput('');
    } catch (error) {
      console.error("Erro ao buscar dados na API do Giphy:", error);
    }
  };
  return (
    <main className="app-container">
      <h1>Gif App - Enterprise Architecture</h1>
      
      {/* 1. Componente de Captura (Stateless) */}
      <Buscador 
        valorInput={valorInput} 
        onChange={(e) => setValorInput(e.target.value)}
        onSubmit={handleSubmit}
      />
      
      {/* 2. Componente de Apresentação (Iterador) */}
      <GifGrid gifs={gifs} />
    </main>
  );
}