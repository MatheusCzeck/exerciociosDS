import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const fullText = "SYSTEM_OVERRIDE // SOFTWARE_DEVELOPER"

  // Efeito tecnológico de digitação (Cyber-typewriter)
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index))
      index++
      if (index >= fullText.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Módulos conectados diretamente ao seu ecossistema do GitHub
  const projects = [
    {
      id: "01",
      title: "CORE_ARCHITECTURE_APP",
      status: "ONLINE",
      desc: "Repositório central de microsserviços e aplicações modulares de alta performance.",
      tech: ["REACT", "VITE", "NODE"],
      repoName: "repositorios"
    },
    {
      id: "02",
      title: "DYNAMIC_DATA_VISUALIZER",
      status: "ONLINE",
      desc: "Sistemas reativos criados para otimização de interfaces e fluxos de dados.",
      tech: ["JAVASCRIPT", "CSS_MESH", "HTML5"],
      repoName: "?tab=repositories"
    },
    {
      id: "03",
      title: "INTELLIGENT_AUTOMATION",
      status: "STABLE",
      desc: "Scripts e ferramentas focadas em automação de tarefas e arquitetura limpa.",
      tech: ["TYPESCRIPT", "GIT", "API_INTEGRATION"],
      repoName: "?tab=stars"
    }
  ]

  return (
    <div className="cyber-grid-bg">
      {/* Linha superior de varredura (Scanline) */}
      <div className="scanline"></div>

      {/* HEADER TECH */}
      <header className="tech-header">
        <div className="system-status">
          <span className="blink-dot"></span>
          <span className="status-text">SYS_STATUS: ACTIVE // USER: JOAO_VICTOR</span>
        </div>
        <nav className="tech-nav">
          <a href="#init">// INÍCIO</a>
          <a href="#modules">// MÓDULOS</a>
          <a href="#matrix">// MATRIZ</a>
          <a href="#signal">// SINAL</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="init" className="hero-tech">
        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="terminal-btn"></span>
            <span className="terminal-btn"></span>
            <span className="terminal-btn"></span>
            <span className="terminal-title">joaovictor@terminal:~</span>
          </div>
          <div className="terminal-body">
            <p className="cmd-line"><span className="prompt">&gt;</span> fetch --profile https://github.com/JoaoVictorGraciani</p>
            <h1 className="glitch-text" data-text="JOÃO VICTOR">JOÃO VICTOR</h1>
            <p className="typing-text">{text}<span className="cursor">_</span></p>
            <p className="terminal-description">
              Desenvolvendo soluções digitais de alto impacto através de código limpo, 
              interfaces reativas e arquiteturas escaláveis. Conectando ideias ao ecossistema Open Source.
            </p>
            <div className="tech-actions">
              <a href="#modules" className="btn-cyber">SCAN_REPOSITÓRIOS</a>
              <a href="https://github.com/JoaoVictorGraciani" target="_blank" rel="noreferrer" className="btn-cyber secondary">ACESSAR_GITHUB</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS (MÓDULOS) */}
      <section id="modules" className="tech-section">
        <h2 className="section-title">&lt; MÓDULOS_DESENVOLVIDOS /&gt;</h2>
        <div className="cyber-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="cyber-card">
              <div className="card-top">
                <span className="card-id">[{proj.id}]</span>
                <span className={`card-status ${proj.status.toLowerCase()}`}>
                  {proj.status}
                </span>
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="card-tags">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="card-footer">
                <a 
                  href={`https://github.com/JoaoVictorGraciani/${proj.repoName}`} 
                  className="scan-link" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  CONECTAR_REPOSITÓRIO //
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK (MATRIZ) */}
      <section id="matrix" className="tech-section">
        <h2 className="section-title">&lt; MATRIZ_TECNOLÓGICA /&gt;</h2>
        <div className="matrix-container">
          <div className="matrix-box">
            <img src={reactLogo} className="tech-icon spin" alt="React" />
            <span>REACT_CORE</span>
          </div>
          <div className="matrix-box">
            <img src={viteLogo} className="tech-icon" alt="Vite" />
            <span>VITE_ENV</span>
          </div>
          <div className="matrix-box"><span>JAVASCRIPT_ES6</span></div>
          <div className="matrix-box"><span>TYPESCRIPT</span></div>
          <div className="matrix-box"><span>NODE_RUNTIME</span></div>
          <div className="matrix-box"><span>GIT_VERSION_CONTROL</span></div>
        </div>
      </section>

      {/* CONTATO (SINAL) */}
      <section id="signal" className="tech-section">
        <div className="terminal-form">
          <h2 className="section-title">&lt; TRANSMITIR_SINAL /&gt;</h2>
          <form className="cyber-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-container">
              <label>REMETENTE:</label>
              <input type="text" placeholder="seu_nome_ou_empresa" required />
            </div>
            <div className="input-container">
              <label>CANAL_E-MAIL:</label>
              <input type="email" placeholder="nome@provedor.com" required />
            </div>
            <div className="input-container">
              <label>MENSAGEM_CRIPTOGRAFADA:</label>
              <textarea rows="4" placeholder="Descreva o escopo do projeto..." required></textarea>
            </div>
            <button type="submit" className="btn-cyber fire">TRANSMITIR_DADOS</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tech-footer">
        <p>CONEXÃO SEGURA // © {new Date().getFullYear()} JOÃO VICTOR</p>
        <p className="footer-crypto">SHA256: {Math.random().toString(16).substring(2, 10).toUpperCase()}</p>
      </footer>
    </div>
  )
}

export default App