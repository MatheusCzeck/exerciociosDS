import { useState } from 'react';

function LoginForm() {
  // 1. Criação dos estados para armazenar o login e a senha
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // 2. Função disparada ao clicar no botão de enviar
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Aqui futuramente entrará o consumo da API de autenticação
    console.log('Dados enviados para a API:', { email, senha });
    alert(`Login realizado com sucesso para: ${email}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Área do Aluno</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.campo}>
          <label style={styles.label}>E-mail:</label>
          <input 
            type="email" 
            placeholder="exemplo@senai.com.br"
            value={email} // O valor do input é rigidamente o que está no estado
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado a cada tecla
            style={styles.input}
          />
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Senha:</label>
          <input 
            type="password" 
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.botao}>
          Entrar no Sistema
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '350px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  titulo: {
    textAlign: 'center',
    color: '#0054a6',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  campo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  botao: {
    padding: '12px',
    backgroundColor: '#0054a6',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px'
  }
};

export default LoginForm;
