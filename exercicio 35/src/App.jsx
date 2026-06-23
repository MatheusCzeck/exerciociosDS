import { GifGrid } from "./components/GifGrid"
import { GaleriaFavoritos } from "./components/GaleriaFavoritos"

// Mock de GIFs para o Grid com Stagger (Exercício anterior)
const MOCK_GIFS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Mídia Grid #${index + 1}`,
  url: `https://picsum.photos/400/300?random=${index + 1}`
}))

export default function App() {
  return (
    <div style={{ 
      backgroundColor: "#0d0e12", 
      minHeight: "100vh", 
      color: "#f3f4f6",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      letterSpacing: "-0.025em"
    }}>
      {/* Header Geral da Aplicação */}
      <header style={{ 
        padding: "60px 20px 40px", 
        textAlign: "center",
        background: "linear-gradient(180deg, #161822 0%, #0d0e12 100%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: "2.5rem", 
          fontWeight: 800,
          background: "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          🚀 Laboratório Avançado de Framer Motion
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "12px", fontSize: "1.1rem" }}>
          Orquestração de Listas, Estados de Saída e Reacomodação de Layout
        </p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px 60px" }}>
        
        {/* ================= SEÇÃO DO DESAFIO 3 ================= */}
        <section style={{ marginBottom: "60px" }}>
          <div style={{
            background: "rgba(22, 24, 34, 0.3)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.03)",
            overflow: "hidden"
          }}>
            {/* Componente Interativo com AnimatePresence e Layout */}
            <GaleriaFavoritos />
          </div>
        </section>

        {/* Separador Visual entre os Exercícios */}
        <hr style={{ border: 0, height: "1px", background: "rgba(255, 255, 255, 0.08)", margin: "60px 0" }} />

        {/* ================= SEÇÃO DO EXERCÍCIO ANTERIOR ================= */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "1.5rem" }}>⚡</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }}>
              Grid de Entrada (Stagger + Viewport)
            </h2>
          </div>
          <p style={{ color: "#9ca3af", marginTop: 0, marginBottom: "30px" }}>
            Esta seção testa a performance de renderização em massa e a ativação por scroll (lazy animation).
          </p>
          
          {/* Componente do Grid do Exercício Anterior */}
          <GifGrid gifs={MOCK_GIFS} />
        </section>

      </main>
    </div>
  )
}