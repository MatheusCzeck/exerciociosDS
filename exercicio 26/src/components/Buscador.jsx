export function Buscador({ valorInput, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        value={valorInput}
        onChange={onChange}
        placeholder="Buscar GIFs..."
        aria-label="Campo de busca de GIFs"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}