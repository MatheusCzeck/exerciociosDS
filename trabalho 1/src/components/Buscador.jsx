import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce' // ajuste o caminho se necessário

function Buscador({ onBuscar }) {
  const [termo, setTermo] = useState('')
  
  // Instancia nosso hook de debounce
  const debouncedBuscar = useDebounce((valor) => onBuscar(valor), 500)

  const aoMudarInput = (e) => {
    const valor = e.target.value
    setTermo(valor)
    debouncedBuscar(valor) // Dispara o debounce a cada letra
  }

  const aoEnviarSubmit = (e) => {
    e.preventDefault()
    onBuscar(termo)
  }

  return (
    <form onSubmit={aoEnviarSubmit} className="buscador-form">
      <input 
        type="text" 
        placeholder="Digite para buscar automaticamente..." 
        value={termo}
        onChange={aoMudarInput}
        className="buscador-input"
      />
    </form>
  )
}

export default Buscador