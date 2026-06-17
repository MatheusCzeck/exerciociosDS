import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function GerenciadorEquipe() {
  // 1. Estado composto: Um array de strings representando a equipe
  const [membros, setMembros] = useState(['Arthur Silva', 'Beatriz Souza'])
  
  // 2. Estado do formulário: Controla o texto digitado no input
  const [novoNome, setNovoNome] = useState('')

  // 3. Manipulador do evento de submissão do formulário
  function adicionarMembro(event) {
    event.preventDefault() // Evita o comportamento padrão do HTML (recarregar a página)
    
    if (novoNome.trim() === '') return // Validação simples

    // CONCEITO CRUCIAL: Imutabilidade
    // Não podemos usar membros.push(). Devemos criar um array totalmente novo.
    // O operador spread (...) copia os membros atuais e adiciona o novoNome no final.
    setMembros([...membros, novoNome])
    
    setNovoNome('') // Reseta o campo de texto (Controlled Component)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #444', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Membros da Equipe</h2>

      {/* Formulário Capturando o Input */}
      <form onSubmit={adicionarMembro} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nome do desenvolvedor..."
          value={novoNome} // O valor do input é espelhado no estado
          onChange={(e) => setNovoNome(e.target.value)} // Atualiza o estado a cada tecla digitada
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #666',
            backgroundColor: '#222',
            color: '#fff'
          }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 16px', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Adicionar
        </button>
      </form>

      {/* Renderização da Lista Dinâmica */}
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {membros.map((membro, index) => (
          <li 
            key={index} // Identificador único obrigatório para o algoritmo do React
            style={{
              padding: '12px',
              backgroundColor: '#1a1a1a',
              marginBottom: '8px',
              borderRadius: '4px',
              borderLeft: '4px solid #646cff',
              display: 'flex',
              justifyContent: 'between'
            }}
          >
            {membro}
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GerenciadorEquipe />
  </React.StrictMode>
)
