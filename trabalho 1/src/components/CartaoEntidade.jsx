import { useState, useRef, useEffect } from 'react'

function CartaoEntidade({ 
  payload, 
  trackIdTocando, 
  setTrackIdTocando, 
  isFavorito, 
  onAlternarFavorito,
  onPularMusica 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [tempoAtual, setTempoAtual] = useState(0)
  const [duracao, setDuracao] = useState(0)
  const audioRef = useRef(null)
  
  const isTocando = trackIdTocando === payload.trackId
  const capaAltaResolucao = payload.artworkUrl100 ? payload.artworkUrl100.replace('100x100bb', '400x400bb') : ''

  // Controla unicamente e estritamente o estado do play/pause
  useEffect(() => {
    if (!audioRef.current) return

    if (isTocando) {
      audioRef.current.play().catch(() => {
        // Trata de forma segura as políticas estritas de autoplay dos navegadores
        setTrackIdTocando(null)
      })
    } else {
      audioRef.current.pause()
    }
  }, [isTocando, setTrackIdTocando])

  const alternarPlay = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (isTocando) {
      setTrackIdTocando(null)
    } else {
      setTrackIdTocando(payload.trackId)
    }
  }

  const atualizarProgresso = () => {
    if (audioRef.current) setTempoAtual(audioRef.current.currentTime)
  }

  const aoCarregarMetadados = () => {
    if (audioRef.current) setDuracao(audioRef.current.duration)
  }

  const formatarTempo = (segundos) => {
    if (isNaN(segundos)) return '0:00'
    const mins = Math.floor(segundos / 60)
    const segs = Math.floor(segundos % 60).toString().padStart(2, '0')
    return `${mins}:${segs}`
  }

  const porcentagemProgresso = duracao > 0 ? (tempoAtual / duracao) * 100 : 0

  return (
    <div 
      className={`player-card ${isTocando ? 'tocando' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onAlternarFavorito(); }}
        className={`card-fav-btn ${isFavorito ? 'favoritado' : ''}`}
        title={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        {isFavorito ? '❤️' : '🤍'}
      </button>

      <div>
        <div className="card-image-container">
          <div 
            className="card-image-blur" 
            style={{ backgroundImage: `url(${capaAltaResolucao})` }}
          />
          <img 
            src={capaAltaResolucao} 
            alt={payload.trackName} 
            className="card-main-image"
            loading="lazy"
          />
          
          {payload.previewUrl && (
            <button 
              onClick={alternarPlay}
              className={`card-play-overlay ${isHovered || isTocando ? 'visivel' : ''}`}
            >
              <div className={`play-btn-premium ${isTocando ? 'is-playing' : ''}`}>
                {isTocando ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="player-svg-icon">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="player-svg-icon play-adjust">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </button>
          )}
        </div>

        <h3 className="card-title" title={payload.trackName}>{payload.trackName}</h3>
        <p className="card-artist" title={payload.artistName}>{payload.artistName}</p>
      </div>

      {payload.previewUrl ? (
        <div className="custom-player-ui">
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${porcentagemProgresso}%` }}
            />
          </div>
          
          <div className="player-time-info">
            <span>{formatarTempo(tempoAtual)}</span>
            <span>{formatarTempo(duracao || 30)}</span>
          </div>

          {isTocando && (
            <div className="player-controls">
              <button onClick={() => onPularMusica('anterior')} className="control-btn" title="Música Anterior">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
              </button>
              
              <button onClick={alternarPlay} className="control-btn play-pause-small" title="Pausar">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </button>

              <button onClick={() => onPularMusica('proxima')} className="control-btn" title="Próxima Música">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6zm9-12h2v12h-2z"/></svg>
              </button>
            </div>
          )}

          <audio 
            ref={audioRef}
            src={payload.previewUrl} 
            onTimeUpdate={atualizarProgresso}
            onLoadedMetadata={aoCarregarMetadados}
            onEnded={() => {
              setTempoAtual(0)
              onPularMusica('proxima')
            }}
          />
        </div>
      ) : (
        <div className="no-preview-tag">
          <span>Sem prévia disponível</span>
        </div>
      )}
    </div>
  )
}

export default CartaoEntidade