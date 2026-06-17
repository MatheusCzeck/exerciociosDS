import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function DashboardTarefas() {
  // 1. Estados Principais
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  // 2. O Hook useEffect (Simulando uma chamada de API / Banco de Dados)
  useEffect(() => {
    // Simulamos um delay de rede de 1.5 segundos
    const timer = setTimeout(() => {
      const dadosIniciais = [
        { id: 1, titulo: 'Mapear tabelas do banco', concluida: true },
        { id: 2, titulo: 'Configurar rotas da API', concluida: false },
        { id: 3, titulo: 'Otimizar queries de busca', concluida: false },
      ]
      setTarefas(dadosIniciais)
      setCarregando(false) // Desativa o estado de loading
    }, 1500)

    // Função de limpeza (Cleanup) - Boa prática para evitar memory leaks
    return () => clearTimeout(timer)
  }, []) // Array de dependências vazio = Executa APENAS UMA VEZ quando o componente nasce (mount)

  // 3. Regra de Negócio: Inverter o status de concluída
  function alternarTarefa(id) {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida }
      }
      return tarefa
    })
    setTarefas(novasTarefas)
  }

  // 4. CONCEITO AVANÇADO: Estado Derivado (Derived State)
  // Não criamos um useState para isso! Calculamos em tempo de renderização.
  const totalTarefas = tarefas.length
  const tarefasConcluidas = tarefas.filter(t => t.concluida).length
  const percentualConclusao = totalTarefas > 0 
    ? Math.round((tarefasConcluidas / totalTarefas) * 100) 
    : 0

  // Renderização Condicional de Carregamento
  if (carregando) {
    return <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>Carregando dados do servidor...</div>
  }

  return (
    <div style={{ width: '450px', margin: '0 auto', padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
      <h2 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>System Tasks Dashboard</h2>

      {/* Seção de Métricas (Baseada no Estado Derivado) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
        <div>Total: <strong>{totalTarefas}</strong></div>
        <div>Concluídas: <strong>{tarefasConcluidas}</strong></div>
        <div>Progresso: <strong style={{ color: '#4caf50' }}>{percentualConclusao}%</strong></div>
      </div>

      {/* Lista de Tarefas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tarefas.map(tarefa => (
          <div 
            key={tarefa.id}
            onClick={() => alternarTarefa(tarefa.id)}
            style={{
              padding: '15px',
              backgroundColor: tarefa.concluida ? '#142515' : '#2d2d2d',
              border: tarefa.concluida ? '1px solid #2e7d32' : '1px solid #444',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none', color: tarefa.concluida ? '#81c784' : '#fff' }}>
              {tarefa.titulo}
            </span>
            <input 
              type="checkbox" 
              checked={tarefa.concluida} 
              readOnly // O clique no container já gerencia o estado
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardTarefas />
  </React.StrictMode>
)

