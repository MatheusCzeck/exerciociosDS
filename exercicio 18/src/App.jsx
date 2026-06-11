// src/App.jsx
import { UserList } from './components/UserList';

function App() {
  return (
    <main className="app-container">
      {/* Estilos embutidos para garantir que o visual mude instantaneamente */}
      <style>{`
        :root {
          --bg-primary: #f8fafc;
          --bg-card: #ffffff;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --brand-color: #646cff;
          --border-color: #e2e8f0;
          --error-bg: #fef2f2;
          --error-text: #991b1b;
        }

        body {
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background-color: var(--bg-primary);
          color: var(--text-main);
          -webkit-font-smoothing: antialiased;
        }

        .app-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        header {
          text-align: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.5rem;
        }

        header h1 {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0;
          background: linear-gradient(to right, var(--brand-color), #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Estilização dos Estados da UI (Loading e Erro) */
        .status-container {
          text-align: center;
          padding: 3rem;
          background: var(--bg-card);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          border: 1px solid var(--border-color);
        }

        .loading-text {
          font-weight: 500;
          color: var(--brand-color);
          animation: pulse 1.5s infinite ease-in-out;
        }

        .status-container.error {
          background-color: var(--error-bg);
          border-color: #fee2e2;
          color: var(--error-text);
        }

        /* Estilização da Lista de Usuários */
        .user-catalog h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .user-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .user-card {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .user-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .user-card strong {
          font-size: 1.125rem;
          color: var(--text-main);
          font-weight: 600;
        }

        .user-card p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-muted);
          word-break: break-all;
        }

        .company-tag {
          margin-top: auto;
          padding-top: 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #475569;
          border-top: 1px dashed var(--border-color);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <header>
        <h1>Desafio Técnico: Engenharia de Data Fetching</h1>
      </header>
      
      <UserList />
    </main>
  );
}

export default App;