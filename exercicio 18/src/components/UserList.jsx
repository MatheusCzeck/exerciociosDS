import { useFetch } from '../hooks/useFetch';

export const UserList = () => {
  // Consumindo o hook customizado
  const { data: users, loading, error } = useFetch('/users');

  // Estado 1: Carregamento (Loading)
  if (loading) {
    return (
      <div className="status-container">
        <p className="loading-text">Carregando usuários...</p>
      </div>
    );
  }

  // Estado 2: Tratamento de Erro (Error)
  if (error) {
    return (
      <div className="status-container error">
        <p>Não foi possível carregar a lista.</p>
        <small>{error}</small>
      </div>
    );
  }

  // Estado 3: Sucesso (Renderização dos dados)
  return (
    <div className="user-catalog">
      <h2>Catálogo de Usuários</h2>
      <ul className="user-list">
        {users && users.map((user) => (
          <li key={user.id} className="user-card">
            <strong>{user.name}</strong>
            <p>{user.email}</p>
            <span className="company-tag">🏢 {user.company?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};