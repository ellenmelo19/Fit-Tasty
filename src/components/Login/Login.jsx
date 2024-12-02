import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

import styles from './styles.module.css'

function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

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
      if (password !== confirmPassword) {
        setMessage('As senhas não coincidem.');
        return;
      }
      // Registro bem-sucedido
      setMessage('Registro realizado com sucesso!');
      setTimeout(() => {
        navigate('/'); // Redireciona para a tela principal
      }, 1000);
      
    } else {
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        setMessage('Login realizado com sucesso!');
        onLogin(user);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setMessage('Email ou senha inválidos.');
      }
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeSection}>
        <button onClick={handleGoBack} className={styles.backButton}>
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
          className={styles.registerButton}
        >
          {isRegistering ? 'Entrar' : 'Cadastre-se'}
        </button>
      </div>
      <div className={styles.registerSection}>
        <h2>{isRegistering ? 'Cadastre-se' : 'Login'}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="Nome"
                className={styles.input}
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Sobrenome"
                className={styles.input}
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className={styles.input}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegistering && (
            <input
              type="password"
              placeholder="Confirmar Senha"
              className={styles.input}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <button type="submit" className={styles.loginButton}>
            {isRegistering ? 'Cadastre-se' : 'Entrar'}
          </button>
          {!isRegistering && (
            <button
              type="button"
              onClick={() => alert('Recuperação de senha!')}
              className={styles.forgotPassword}
            >
              Esqueceu a senha?
            </button>
          )}
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
