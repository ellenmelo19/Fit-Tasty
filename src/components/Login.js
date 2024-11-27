import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate(); // Hook para redirecionar

  // Dados de login mockados
  const mockUsers = [
    { email: 'itamir@ufrn.edu.br', password: 'senha123', avatar: 'https://example.com/avatar1.jpg' },
    { email: 'marquinhos@ufr.edu.br', password: 'abc123', avatar: 'https://example.com/avatar2.jpg' },
    { email: 'rafa@ufrn.edu.br', password: 'web123', avatar: 'https://example.com/avatar3.jpg' },
    { email: 'elen@ufrn.edu.br', password: 'senha123', avatar: 'https://example.com/avatar4.jpg' },
  ];

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      setMessage('Registro realizado com sucesso!');
    } else {
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setMessage('Login realizado com sucesso!');
        onLogin(user); // Passa os dados do usuário logado para o App.js
        setTimeout(() => {
          navigate('/'); // Redireciona para a tela inicial
        }, 1000); // Pequeno delay para mostrar a mensagem antes de redirecionar
      } else {
        setMessage('Email ou senha inválidos.');
      }
    }
  };

  const handleGoBack = () => {
    navigate('/'); // Volta para a página inicial
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeSection}>
        <button onClick={handleGoBack} style={styles.backButton}>
          <FaArrowLeft /> Voltar
        </button>
        <h2>{isRegistering ? 'Login' : 'Bem-Vindo(a)'}</h2>
        <p>
          {isRegistering
            ? 'Já tem uma conta? Conecte-se!'
            : 'Ainda não tem uma conta? Conecte-se conosco!'}
        </p>
        <button
          onClick={toggleRegister}
          style={isRegistering ? styles.loginButton : styles.registerButton}
        >
          {isRegistering ? 'Entrar' : 'Registrar-se'}
        </button>
      </div>
      <div style={isRegistering ? styles.registerSection : styles.loginSection}>
        <h2>{isRegistering ? 'Registrar' : 'Login'}</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            style={styles.input}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" style={styles.loginButton}>
            {isRegistering ? 'Registrar-se' : 'Entrar'}
          </button>
          {!isRegistering && (
            <button
              type="button"
              onClick={() => alert('Recuperação de senha!')}
              style={styles.forgotPassword}
            >
              Esqueceu a senha?
            </button>
          )}
          <div style={styles.socialLogin}>
            <button style={styles.socialButton}>Facebook</button>
            <button style={styles.socialButton}>Google</button>
            <button style={styles.socialButton}>LinkedIn</button>
          </div>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute', // Posiciona o botão em relação ao container
    top: '20px', // Distância do topo
    right: '20px', // Distância da direita
    backgroundColor: 'transparent',
    border: 'none',
    color: '#4caf50',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  welcomeSection: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '40px',
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  loginSection: {
    backgroundColor: 'white',
    padding: '40px',
    flex: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  registerSection: {
    backgroundColor: 'white',
    padding: '40px',
    flex: 1,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '300px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  loginButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  registerButton: {
    backgroundColor: 'white',
    color: '#4caf50',
    padding: '10px',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0',
  },
  forgotPassword: {
    color: '#4caf50',
    textAlign: 'center',
    margin: '10px 0',
  },
  socialLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  socialButton: {
    backgroundColor: '#e0e0e0',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: 1,
    margin: '0 5px',
  },
  message: {
    marginTop: '20px',
    color: '#4caf50',
  },
};

export default Login;
