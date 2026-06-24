import CartaoEntidade from './CartaoEntidade'

function GridResultados({ conteudos, carregando }) {
  
  // Renderiza a estrutura esqueleto imitadora se estiver carregando
  if (carregando) {
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
        gap: '24px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} style={{ backgroundColor: '#18181b', border: '1px solid #27272a', padding: '20px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div className="skeleton-box" style={{ width: '100%', aspectRatio: '1/1' }}></div>
            <div className="skeleton-box" style={{ width: '80%', height: '18px' }}></div>
            <div className="skeleton-box" style={{ width: '50%', height: '14px' }}></div>
            <div className="skeleton-box" style={{ width: '100%', height: '32px', marginTop: '10px' }}></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
      gap: '24px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    }}>
      {conteudos.map((item) => (
        <CartaoEntidade key={item.trackId} payload={item} />
      ))}
    </div>
  )
}

export default GridResultados