import CartaoEntidade from './CartaoEntidade'

function GridResultados({ 
  conteudos, 
  carregando, 
  trackIdTocando, 
  setTrackIdTocando, 
  favoritos, 
  onAlternarFavorito,
  onPularMusica
}) {
  
  if (carregando) {
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: '24px', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' 
      }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={`skeleton-${index}`} style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="skeleton-box" style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#27272a', borderRadius: '10px' }}></div>
            <div className="skeleton-box" style={{ width: '80%', height: '18px', backgroundColor: '#27272a', borderRadius: '4px' }}></div>
            <div className="skeleton-box" style={{ width: '50%', height: '14px', backgroundColor: '#27272a', borderRadius: '4px' }}></div>
            <div className="skeleton-box" style={{ width: '100%', height: '32px', marginTop: '10px', backgroundColor: '#27272a', borderRadius: '4px' }}></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
      gap: '24px', width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' 
    }}>
      {conteudos.map((item, index) => (
        <CartaoEntidade 
          key={`${item.trackId}-${index}`} // Chave composta previne bugs caso o iTunes duplique itens
          payload={item} 
          trackIdTocando={trackIdTocando}
          setTrackIdTocando={setTrackIdTocando}
          isFavorito={favoritos.some(f => f.trackId === item.trackId)}
          onAlternarFavorito={() => onAlternarFavorito(item)}
          onPularMusica={onPularMusica}
        />
      ))}
    </div>
  )
}

export default GridResultados