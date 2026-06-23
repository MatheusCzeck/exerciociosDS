import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function GaleriaFavoritos() {
  const [favoritos, setFavoritos] = useState([
    { id: 1, title: 'Gato digitando rápido' },
    { id: 2, title: 'Cachorro confuso' },
    { id: 3, title: 'Panda rolando' },
    { id: 4, title: 'Dev tomando café' }
  ]);

  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter(fav => fav.id !== id));
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      fontFamily: "'Inter', system-ui, sans-serif",
      backgroundColor: '#0d0e12',
      minHeight: '40vh',
      color: '#f3f4f6'
    }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontWeight: 800, 
        marginBottom: '30px',
        background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Meus GIFs Favoritos ❤️
      </h2>
      
      {/* Container da Galeria */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* REQUISITO: AnimatePresence monitora o .map para gerenciar as saídas do DOM */}
        <AnimatePresence>
          {favoritos.map(fav => (
            <motion.div 
              key={fav.id}
              
              // REQUISITO: Efeito mágico de reacomodação fluida de layout
              layout
              
              // REQUISITO: Animação de Entrada
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              
              // REQUISITO: Animação de Saída ("Murchar")
              exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.25 } }}
              
              // REQUISITO: Física de Interação (Hover)
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" 
              }}
              
              // Transição global baseada em física de mola (Spring)
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 25,
                layout: { type: 'spring', stiffness: 250, damping: 30 } // Suaviza o rearranjo
              }}
              
              style={{ 
                padding: '24px', 
                background: '#161822', 
                color: '#e5e7eb', 
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer'
              }}
            >
              <p style={{ margin: '0 0 20px 0', fontWeight: 500, fontSize: '1.05rem' }}>
                {fav.title}
              </p>
              
              <button 
                onClick={() => removerFavorito(fav.id)}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  transition: 'background 0.2s',
                  width: '100%',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.2)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
              >
                ❌ Remover
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

      </div>
    </div>
  );
}