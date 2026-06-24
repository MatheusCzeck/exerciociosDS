import { useState, useEffect, useRef } from 'react'

function Buscador({ onBuscar }) {
  const [termo, setTermo] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const timerRef = useRef(null)

  // Efeito de Debounce para busca em tempo real
  useEffect(() => {
    // Limpa o timer anterior se o usuário continuar digitando rápido
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    if (!termo.trim()) return

    // Agenda a requisição para 500ms após o último caractere digitado
    timerRef.current = setTimeout(() => {
      onBuscar(termo)
    }, 500)

    return () => clearTimeout(timerRef.current)
  }, [termo])

  const aoEnviarSumbit = (e) => {
    e.preventDefault() // Mantido para caso o usuário aperte "Enter" manualmente
    onBuscar(termo)
  }

  return (
    <form onSubmit={aoEnviarSumbit} style={{ 
      display: 'flex', 
      width: '100%', 
      maxWidth: '600px', 
      margin: '0 auto 40px auto' 
    }}>
      <input 
        type="text" 
        placeholder="Digite para buscar automaticamente (ex: Alok, Queen)..." 
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ 
          flex: 1,
          padding: '14px 20px', 
          borderRadius: '12px', 
          border: isFocused ? '2px solid #a855f7' : '1px solid #27272a',
          backgroundColor: '#18181b',
          color: '#fff',
          fontSize: '16px',
          outline: 'none',
          boxShadow: isFocused ? '0 0 25px rgba(168, 85, 247, 0.3)' : 'none',
          transition: 'all 0.2s ease-in-out',
          textAlign: 'center'
        }}
      />
    </form>
  )
}

export default Buscador