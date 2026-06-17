// src/App.jsx
import { useState } from 'react';
import BuscadorDeProdutos from './components/BuscadorDeProdutos';

export default function App() {
  const [produtoInput, setProdutoInput] = useState('');
  const [produtos, setProdutos] = useState([]);

  // Função que simula a submissão e busca na API
  const handlePesquisa = (evento) => {
    evento.preventDefault();
    if (produtoInput.trim().length <= 1) return;
    
    // Simula a adição de produtos encontrados
    setProdutos([...produtos, `Resultado para: ${produtoInput}`]);
    setProdutoInput(''); // Limpa o campo
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Gestão de Produtos</h1>
      
      {/* Injeção do novo componente refatorado.
        Passamos o estado e os manipuladores de eventos através do contrato de props.
      */}
      <BuscadorDeProdutos 
        valorInput={produtoInput}
        onChange={(evento) => setProdutoInput(evento.target.value)}
        onSubmit={handlePesquisa}
      />

      {/* Renderização da lista */}
      <ul>
        {produtos.map((prod, index) => (
          <li key={index}>{prod}</li>
        ))}
      </ul>
    </main>
  );
}