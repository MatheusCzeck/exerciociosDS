import React, { useState } from 'react' // 1. Importamos o Hook useState
import ReactDOM from 'react-dom/client'
import './index.css'

function Contador() {
  // 2. Declaramos o estado
  // 'cliques' é a variável que guarda o valor atual (começa em 0)
  // 'setCliques' é a função exclusiva que usaremos para atualizar esse valor
  const [cliques, setCliques] = useState(0)

  // 3. Função que será disparada no clique do botão
  function incrementar() {
    setCliques(cliques + 1)
  }

  return (
    <div style={{ textAlign: 'center', border: '1px solid #444', padding: '40px', borderRadius: '12px' }}>
      <h2>Contador Acadêmico</h2>
      
      {/* Exibindo o valor do estado em tempo real */}
      <p style={{ fontSize: '48px', margin: '20px 0', fontWeight: 'bold' }}>
        {cliques}
      </p>

      {/* Vinculando o evento de clique à nossa função */}
      <button 
        onClick={incrementar}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Incrementar Contador
      </button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>
)
