import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Correção: Adicionado "./" e alterado para "App" com "A" maiúsculo
import App from './App' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Agora o nome do componente coincide com o import */}
    <App /> 
  </StrictMode>,
)
