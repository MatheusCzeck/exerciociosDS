import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// O Componente Dinâmico
// Ele recebe um objeto chamado 'props'. Tudo que passarmos para o componente vai estar aqui dentro.
function Saudacao(props) {
  return (
    <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2>Olá, {props.nome}!</h2>
      <p>Sua função atual é: <strong>{props.cargo}</strong></p>
    </div>
  )
}

// O Componente Principal que organiza a tela
// Aqui nós reusamos o componente 'Saudacao' passando dados diferentes (props) para cada um
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Painel Acadêmico - Props</h1>
      
      {/* Passando propriedades como se fossem atributos HTML */}
      <Saudacao nome="Arthur" cargo="Desenvolvedor Frontend" />
      <Saudacao nome="Beatriz" cargo="Engenheira de Dados" />
      <Saudacao nome="Carlos" cargo="Analista de Sistemas" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
