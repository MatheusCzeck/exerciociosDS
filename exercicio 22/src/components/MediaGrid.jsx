// MediaGrid.jsx
export default function MediaGrid({ items }) {
  if (!items || items.length === 0) {
    return <p className="no-results">Nenhum resultado encontrado. Tente buscar algo!</p>;
  }

  return (
    <main className="catalog-container">
      <div className="media-grid" role="region" aria-label="Resultados da busca">
        {items.map((item) => (
          <article key={item.id} className="media-card">
            <div className="image-wrapper">
              <img src={item.url} alt={`Capa da mídia: ${item.title}`} />
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}