import { GifGrid } from "./components/GifGrid"

const MOCK_GIFS = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Mídia Exemplo #${index + 1}`,
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
      <header style={{ 
        padding: "60px 20px 40px", 
        textAlign: "center",
        background: "linear-gradient(180deg, #161822 0%, #0d0e12 100%)"
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: "2.5rem", 
          fontWeight: 800,
          background: "linear-gradient(to right, #6366f1, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          🧪 Galeria Imersiva
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "12px", fontSize: "1.1rem" }}>
          Descubra a suavidade do Stagger & Viewport conforme navega
        </p>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 60px" }}>
        {/* Banner Indicador Avançado */}
        <div style={{ 
          height: "40vh", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          border: "1px dashed rgba(99, 102, 241, 0.3)",
          borderRadius: "16px",
          margin: "20px 0 60px",
          background: "rgba(22, 24, 34, 0.5)",
          backdropFilter: "blur(8px)"
        }}>
          <span style={{ fontSize: "1.5rem", marginBottom: "8px" }}>✨</span>
          <p style={{ color: "#6366f1", fontWeight: 600, margin: 0 }}>Desça a página para ativar o Grid</p>
          <span style={{ color: "#4b5563", fontSize: "0.875rem", marginTop: "4px" }}>↓↓↓</span>
        </div>

        <GifGrid gifs={MOCK_GIFS} />
      </main>
    </div>
  )
}