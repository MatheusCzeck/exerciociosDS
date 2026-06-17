import React from 'react';
export default function GreetingCard({ name, group, themeColor }) {
  
    // Criamos um estilo inline dinâmico usando JavaScript
    const cardStyle = {
      backgroundColor: themeColor || '#4e54c8', // Cor padrão se nenhuma for enviada
      padding: '20px',
      borderRadius: '12px',
      color: '#ffffff',
      textAlign: 'left',
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
      maxWidth: '300px',
      margin: '10px auto',
      fontFamily: 'sans-serif'
    };
  
    return (
      <div style={cardStyle}>
        <span style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase' }}>
          Estudante de React
        </span>
        <h2 style={{ margin: '5px 0 10px 0', fontSize: '1.8rem' }}>{name}</h2>
        <p style={{ fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.2)', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
          🏫 Turma: {group}
        </p>
      </div>
    );
  }
  