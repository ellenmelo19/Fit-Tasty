import React, { useState } from 'react';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div style={styles.container}>
      <div style={isRegistering ? styles.welcomeSection : styles.welcomeSection}>
        <h2>{isRegistering ? 'Login' : 'Bem-Vindo(a)'}</h2>
        <p>{isRegistering ? 'Já tem uma conta? Conecte-se!' : 'Ainda não tem uma conta? Conecte-se conosco!'}</p>
        <button onClick={toggleRegister} style={isRegistering ? styles.loginButton : styles.registerButton}>
          {isRegistering ? 'Entrar' : 'Registrar-se'}
        </button>
      </div>
      <div style={isRegistering ? styles.registerSection : styles.loginSection}>
        <h2>{isRegistering ? 'Registrar' : 'Login'}</h2>
        <form style={styles.form}>
          <input type="email" placeholder="Email" style={styles.input} required />
          <input type="password" placeholder="Senha" style={styles.input} required />
          <button type="submit" style={styles.loginButton}>{isRegistering ? 'Registrar-se' : 'Entrar'}</button>
          {!isRegistering && <a href="#" style={styles.forgotPassword}>Esqueceu a senha?</a>}
          <div style={styles.socialLogin}>
            <button style={styles.socialButton}>Facebook</button>
            <button style={styles.socialButton}>Google</button>
            <button style={styles.socialButton}>LinkedIn</button>
          </div>
        </form>
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
    flexDirection: 'row',  // Mudança para linha
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
    minHeight: '100vh',  // Altura mínima
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
    minHeight: '100vh',  // Altura mínima
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
    minHeight: '100vh',  // Altura mínima
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
};

export default Login;
