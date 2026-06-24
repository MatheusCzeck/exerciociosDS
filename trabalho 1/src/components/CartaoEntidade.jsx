import { useState } from 'react'

function CartaoEntidade({ payload }) {
  const [isHovered, setIsHovered] = useState(false)

  // Substitui o tamanho padrão da imagem para obter maior nitidez visual
  const capaAltaResolucao = payload.artworkUrl100.replace('100x100bb', '400x400bb')

  return (
    <div 
      className="animate-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: '#18181b',
        border: isHovered ? '1px solid #c084fc' : '1px solid #27272a',
        padding: '20px', 
        borderRadius: '16px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 12px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(168, 85, 247, 0.15)' : '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div>
        <div style={{ overflow: 'hidden', borderRadius: '10px', marginBottom: '16px' }}>
          <img 
            src={capaAltaResolucao} 
            alt={payload.trackName} 
            style={{ 
              width: '100%', 
              aspectRatio: '1/1',
              objectFit: 'cover'
            }}
          />
        </div>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '600',
          margin: '0 0 6px 0', 
          color: '#fff',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {payload.trackName}
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#a1a1aa', 
          margin: '0 0 20px 0',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis' 
        }}>
          {payload.artistName}
        </p>
      </div>

      {payload.previewUrl && (
        <audio 
          src={payload.previewUrl} 
          controls 
          style={{ width: '100%', height: '32px' }}
        />
      )}
    </div>
  )
}

export default CartaoEntidade