import { useState, useEffect, useMemo } from 'react'
import Buscador from './components/Buscador'
import GridResultados from './components/GridResultados'
import './App.css'

function App() {
  const [resultados, setResultados] = useState([])
  const [termoGlobal, setTermoGlobal] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)
  const [pagina, setPagina] = useState(0)
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos')
  const [trackIdTocando, setTrackIdTocando] = useState(null)
  const [mostrarApenasFavoritos, setMostrarApenasFavoritos] = useState(false)
  const [entidade, setEntidade] = useState('song')

  const limitePorPagina = 12
  const generosPopularesFixos = ['Todos', 'Pop', 'Rock', 'Sertanejo', 'Hip-Hop/Rap', 'Dance', 'Podcast']

  const [favoritos, setFavoritos] = useState(() => {
    const salvos = localStorage.getItem('musicas_favoritas')
    return salvos ? JSON.parse(salvos) : []
  })

  useEffect(() => {
    localStorage.setItem('musicas_favoritas', JSON.stringify(favoritos))
  }, [favoritos])

  // Requisição HTTP blindada contra concorrência e race-conditions
  useEffect(() => {
    if (!termoGlobal.trim()) {
      setResultados([])
      return
    }

    let active = true // Evita vazamento de memória e sobreposição de chamadas rápidas

    const realizarBusca = async () => {
      if (pagina === 0) setCarregando(true)
      setErro(null)

      try {
        const offset = pagina * limitePorPagina
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termoGlobal)}&entity=${entidade}&limit=${limitePorPagina}&offset=${offset}`

        const resposta = await fetch(url)
        if (!resposta.ok) throw new Error("Não foi possível conectar ao servidor da Apple.")

        const dados = await resposta.json()
        if (!active) return

        const dadosNormalizados = (dados.results || []).map(item => ({
          trackId: item.trackId || item.collectionId,
          trackName: item.trackName || item.collectionName,
          artistName: item.artistName,
          artworkUrl100: item.artworkUrl100,
          previewUrl: item.previewUrl || null,
          primaryGenreName: item.primaryGenreName
        }))

        if (pagina === 0) {
          setResultados(dadosNormalizados)
        } else {
          setResultados(prev => [...prev, ...dadosNormalizados])
        }
      } catch (err) {
        if (active) setErro(err.message || "Ocorreu um erro inesperado ao buscar.")
      } finally {
        if (active) setCarregando(false)
      }
    }

    realizarBusca()

    return () => { active = false }
  }, [termoGlobal, pagina, entidade])

  const lidarComNovaBusca = (novoTermo) => {
    setTermoGlobal(novoTermo)
    setPagina(0)
    setGeneroSelecionado('Todos')
    setMostrarApenasFavoritos(false)
    setTrackIdTocando(null)
  }

  const alternarFavorito = (musica) => {
    setFavoritos(prev => {
      const jaEFavorito = prev.some(item => item.trackId === musica.trackId)
      if (jaEFavorito) return prev.filter(item => item.trackId !== musica.trackId)
      return [...prev, musica]
    })
  }

  const baseDeDados = mostrarApenasFavoritos ? favoritos : resultados

  // Otimização com useMemo para derivar os dados sem recalcular a cada render à toa
  const generosDisponiveis = useMemo(() => {
    return Array.from(new Set([
      ...generosPopularesFixos,
      ...baseDeDados.map(item => item.primaryGenreName).filter(Boolean)
    ]))
  }, [baseDeDados])

  const resultadosFiltrados = useMemo(() => {
    return generoSelecionado === 'Todos'
      ? baseDeDados
      : baseDeDados.filter(item => item.primaryGenreName === generoSelecionado)
  }, [baseDeDados, generoSelecionado])

  const pularMusica = (direcao) => {
    if (!trackIdTocando || resultadosFiltrados.length === 0) return

    const indiceAtual = resultadosFiltrados.findIndex(item => item.trackId === trackIdTocando)
    if (indiceAtual === -1) return

    let proximoIndice
    if (direcao === 'proxima') {
      proximoIndice = (indiceAtual + 1) % resultadosFiltrados.length
    } else if (direcao === 'anterior') {
      proximoIndice = (indiceAtual - 1 + resultadosFiltrados.length) % resultadosFiltrados.length
    }

    const proximaMusica = resultadosFiltrados[proximoIndice]
    if (proximaMusica && proximaMusica.previewUrl) {
      setTrackIdTocando(proximaMusica.trackId)
    } else {
      setTrackIdTocando(null)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          {/* Ícone da Logo em SVG: Onda Sonora + Aurora */}
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10V14" stroke="url(#aurora-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M8 6V18" stroke="url(#aurora-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M12 3V21" stroke="url(#aurora-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 8V16" stroke="url(#aurora-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M20 11V13" stroke="url(#aurora-grad)" strokeWidth="2.5" strokeLinecap="round" />
            <defs>
              {/* Gradiente que imita o fundo do seu site */}
              <linearGradient id="aurora-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <h1 className="logo-texto">Vibra<span>FM</span></h1>
        </div>
        <p>Explore e ouça prévias do catálogo global de forma automática e otimizada</p>
      </header>

      <Buscador onBuscar={lidarComNovaBusca} />

      <div className="abas-container">
        <button
          onClick={() => { setEntidade('song'); setPagina(0); setMostrarApenasFavoritos(false); setTrackIdTocando(null); }}
          className={`aba-btn ${entidade === 'song' && !mostrarApenasFavoritos ? 'ativa' : ''}`}
        >
          🎵 Músicas
        </button>

        <button
          onClick={() => { setEntidade('album'); setPagina(0); setMostrarApenasFavoritos(false); setTrackIdTocando(null); }}
          className={`aba-btn ${entidade === 'album' && !mostrarApenasFavoritos ? 'ativa' : ''}`}
        >
          💽 Álbuns
        </button>

        <button
          onClick={() => { setEntidade('podcast'); setPagina(0); setMostrarApenasFavoritos(false); setTrackIdTocando(null); }}
          className={`aba-btn ${entidade === 'podcast' && !mostrarApenasFavoritos ? 'ativa' : ''}`}
        >
          🎙️ Podcasts
        </button>

        <button
          onClick={() => { setMostrarApenasFavoritos(true); setTrackIdTocando(null); }}
          className={`aba-btn favs ${mostrarApenasFavoritos ? 'ativa' : ''}`}
        >
          ❤️ Meus Favoritos ({favoritos.length})
        </button>
      </div>

      {baseDeDados.length > 0 && (
        <div className="filtro-genero-container">
          <span>Gênero:</span>
          <select
            value={generoSelecionado}
            onChange={(e) => setGeneroSelecionado(e.target.value)}
            className="select-genero"
          >
            {generosDisponiveis.map(gen => (
              <option key={gen} value={gen}>
                {gen === 'Todos' ? 'Todos os Gêneros' : gen}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Mensagem de Erro */}
      {erro && (
        <div className="error-box">
          <p className="error-title">⚠️ Falha na Requisição</p>
          <p>{erro}</p>
        </div>
      )}

      {/* Logo de Busca Ativa (Loader) */}
      {carregando && pagina === 0 ? (
        <div className="busca-loading-container">
          <div className="disco-loader">
            <div className="disco-centro"></div>
          </div>
          <p className="busca-loading-texto">Sintonizando frequências...</p>
        </div>
      ) : (
        <GridResultados
          conteudos={resultadosFiltrados}
          carregando={carregando && pagina > 0} /* Mantém o esqueleto apenas para o "Carregar Mais" */
          trackIdTocando={trackIdTocando}
          setTrackIdTocando={setTrackIdTocando}
          favoritos={favoritos}
          onAlternarFavorito={alternarFavorito}
          onPularMusica={pularMusica}
        />
      )}

      {!carregando && !mostrarApenasFavoritos && resultados.length > 0 && resultadosFiltrados.length >= limitePorPagina && (
        <div className="paginacao-container">
          <button onClick={() => setPagina(prev => prev + 1)} className="btn-carregar-mais">
            Carregar Mais Resultados
          </button>
        </div>
      )}

      {!carregando && resultadosFiltrados.length === 0 && (
        <div className="empty-state">
          <p>Nenhum resultado encontrado para esta categoria ou gênero.</p>
        </div>
      )}
    </div>
  )
}

export default App