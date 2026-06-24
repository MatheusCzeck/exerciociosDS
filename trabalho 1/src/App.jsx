import { useState, useEffect } from 'react'
import Buscador from './components/Buscador'
import GridResultados from './components/GridResultados'

function App() {
  const [resultados, setResultados] = useState([])
  const [termoGlobal, setTermoGlobal] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)
  
  // Estados para Paginação e Filtro
  const [pagina, setPagina] = useState(0)
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos')
  const limitePorPagina = 12

  // Lista dos gêneros mais populares ordenados para o topo do Select
  const generosPopularesfíxos = [
    'Todos',
    'Pop',
    'Rock',
    'Música Sertaneja', // Mapeado para o catálogo nacional brasileiro
    'Sertanejo',
    'Hip-Hop/Rap',
    'Dance',
    'Electronic',
    'Alternative',
    'R&B/Soul',
    'Reggae',
    'Jazz'
  ]

  useEffect(() => {
    if (!termoGlobal.trim()) {
      setResultados([])
      return
    }

    const realizarBusca = async () => {
      if (pagina === 0) setCarregando(true)
      setErro(null)

      try {
        const offset = pagina * limitePorPagina
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termoGlobal)}&entity=song&limit=${limitePorPagina}&offset=${offset}`
        
        const resposta = await fetch(url)
        if (!resposta.ok) throw new Error("Não foi possível conectar ao servidor da Apple.")
        
        const dados = await resposta.json()
        
        if (pagina === 0) {
          setResultados(dados.results || [])
        } else {
          setResultados(prev => [...prev, ...(dados.results || [])])
        }
      } catch (err) {
        setErro(err.message || "Ocorreu um erro inesperado ao buscar as músicas.")
      } finally {
        setCarregando(false)
      }
    }

    realizarBusca()
  }, [termoGlobal, pagina])

  const lidarComNovaBusca = (novoTermo) => {
    setTermoGlobal(novoTermo)
    setPagina(0)
    setGeneroSelecionado('Todos') // Reseta o filtro em novas buscas
  }

  // Monta a lista híbrida: Populares fixos primeiro + os que vierem da API (sem duplicar)
  const generosDisponiveis = [
    ...generosPopularesfíxos,
    ...new Set(
      resultados
        .map(item => item.primaryGenreName)
        .filter(gen => gen && !generosPopularesfíxos.includes(gen))
    )
  ]

  // Filtra os resultados em memória com base no gênero selecionado
  const resultadosFiltrados = generoSelecionado === 'Todos' 
    ? resultados 
    : resultados.filter(item => item.primaryGenreName === generoSelecionado)

  return (
    <div style={{ minHeight: '100vh', padding: '60px 20px' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: '800', 
          color: '#ffffff',
          textShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
          marginBottom: '12px',
          letterSpacing: '-1px'
        }}>
          Buscador Dinâmico de Músicas
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '16px' }}>
          Explore e ouça prévias do catálogo global de forma automática e otimizada
        </p>
      </header>
      
      <Buscador onBuscar={lidarComNovaBusca} />

      {/* Interface do Filtro por Gêneros Populares */}
      {resultados.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
          <span style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: '500' }}>Gênero:</span>
          <select 
            value={generoSelecionado} 
            onChange={(e) => setGeneroSelecionado(e.target.value)}
            style={{
              padding: '10px 16px',
              borderRadius: '10px',
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              color: '#fff',
              fontSize: '14px',
              outline: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#a855f7'}
            onBlur={(e) => e.target.style.borderColor = '#27272a'}
          >
            {generosDisponiveis.map(gen => (
              <option key={gen} value={gen}>
                {gen === 'Todos' ? 'Todos os Gêneros' : gen}
              </option>
            ))}
          </select>
        </div>
      )}

      {erro && (
        <div style={{ 
          maxWidth: '600px', 
          margin: '20px auto', 
          padding: '16px', 
          backgroundColor: 'rgba(239, 68, 68, 0.1)', 
          border: '1px solid #ef4444', 
          borderRadius: '12px',
          color: '#ef4444',
          textAlign: 'center'
        }}>
          <p style={{ fontWeight: '600' }}>⚠️ Falha na Requisição</p>
          <p style={{ fontSize: '14px', marginTop: '4px' }}>{erro}</p>
        </div>
      )}

      <GridResultados conteudos={resultadosFiltrados} carregando={carregando} />

      {!carregando && resultados.length > 0 && resultadosFiltrados.length >= limitePorPagina && (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={() => setPagina(prev => prev + 1)}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: '1px solid #a855f7',
              backgroundColor: 'transparent',
              color: '#a855f7',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#a855f7'
              e.target.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = '#a855f7'
            }}
          >
            Carregar Mais Músicas
          </button>
        </div>
      )}

      {!carregando && resultados.length === 0 && !erro && (
        <div style={{ textAlign: 'center', color: '#71717a', marginTop: '60px' }}>
          <p style={{ fontSize: '16px' }}>Digite um artista para iniciar a busca em tempo real.</p>
        </div>
      )}
    </div>
  )
}

export default App