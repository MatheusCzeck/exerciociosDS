import { motion } from "framer-motion"
import { itemVariants } from "../animations/gifGridVariants"

export function GifItem({ gif }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -6,
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)..." 
        }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#161822",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        cursor: "pointer",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Container da imagem com proporção fixa elegante (16:9) */}
      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img 
          src={gif.url} 
          alt={gif.title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            display: "block"
          }} 
        />
      </div>

      {/* Detalhe com o Título da mídia usando Glassmorphism sutil */}
      <div style={{
        padding: "16px",
        background: "linear-gradient(180deg, rgba(22, 24, 34, 0.8) 0%, #161822 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)"
      }}>
        <h3 style={{ 
          margin: 0, 
          fontSize: "0.95rem", 
          fontWeight: 600, 
          color: "#e5e7eb",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>
          {gif.title}
        </h3>
      </div>
    </motion.div>
  )
}