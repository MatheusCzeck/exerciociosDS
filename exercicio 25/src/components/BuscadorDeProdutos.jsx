export default function BuscadorDeProdutos({ valorInput, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={valorInput}
        onChange={onChange}
        placeholder="Pesquisar sapatilhas, t-shirts..."
        style={{ padding: '8px', width: '250px' }}
      />
      <button type="submit" style={{ padding: '8px 15px', marginLeft: '10px' }}>
        Pesquisar
      </button>
    </form>
  );
}