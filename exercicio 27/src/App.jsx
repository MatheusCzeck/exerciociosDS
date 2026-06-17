import { useBuscadorUsuarios } from './hooks/useBuscadorUsuarios';

export function App() {
  // Consumindo o contrato estruturado do Custom Hook
  const { busca, setBusca, usuarios, isLoading, erro, executarBusca } = useBuscadorUsuarios();

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px' }}>
      <h1>Buscador de Usuários</h1>
      
      <form onSubmit={executarBusca} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={busca} 
          onChange={(e) => setBusca(e.target.value)} 
          placeholder="Digite um nome..."
          disabled={isLoading} // UX: Evita que o usuário altere o texto durante a busca
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {/* Exibição condicional de erro estruturado se a API falhar */}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {/* Operador Ternário para controle de UX (Loading vs Lista) */}
      {isLoading ? (
        <p style={{ color: '#666', fontStyle: 'italic' }}>⏳ Carregando usuários...</p>
      ) : (
        <ul>
          {usuarios.map(user => (
            <li key={user.id}>{user.nome}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
