import React from 'react';
import GreetingCard from './components/GreetingCard';

export default function App() {
  return (
    <div style={{ padding: '4px', textAlign: 'center', backgroundColor: '#1a1a2e', minHeight: '100vh', color: '#fff', paddingTop: '40px' }}>
      <h1>Laboratório de Componentes</h1>
      <p style={{ marginBottom: '30px', color: '#8fa0c4' }}>Altere as propriedades (props) no código para ver a mudança</p>

      {/* Exemplo 1: Passando dados normais */}
      <GreetingCard name="Lucas Silva" group="A" themeColor="#e94560" />

      {/* Exemplo 2: Outro aluno, outra turma e outra cor (Reutilização) */}
      <GreetingCard name="Beatriz Souza" group="B" themeColor="#0f3460" />

      {/* Exemplo 3: Sem passar a cor para testar o valor padrão (Fallback) */}
      <GreetingCard name="Carlos Eduardo" group="A" />
    </div>
  );
}
