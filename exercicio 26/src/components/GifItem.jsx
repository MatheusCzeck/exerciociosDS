// Ficheiro: GifItem.jsx
export function GifItem({ gif }) {
  return (
    <div className="gif-card">
      <img 
        src={gif.images.original.url} 
        /* Acessibilidade corrigida: dinamicidade baseada no título real do GIF */
        alt={`GIF mostrando: ${gif.title || 'Mídia sem título'}`} 
      />
    </div>
  );
}