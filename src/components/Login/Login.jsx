import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

import styles from './styles.module.css'

function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isNutritionist, setIsNutritionist] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const [message, setMessage] = useState('');
  const [crn, setCrn] = useState(''); // Novo estado para CRN
  const [photoUrl, setPhotoUrl] = useState(''); // Novo estado para URL da Foto
  const [phone, setPhone] = useState(''); // Novo estado para Telefone

  const navigate = useNavigate();

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isRegistering) {
        if (password !== confirmPassword) {
            setMessage('As senhas não coincidem.');
            return;
        }

        if (isNutritionist && (!crn || !photoUrl || !phone)) {
            setMessage('Por favor, preencha todos os campos de nutricionista.');
            return;
        }

        const userData = {
            firstName,
            lastName,
            email,
            password,
            isNutritionist,
            crn,
            photoUrl,
            phone,
        };

        console.log('Tentativa de registro com:', userData);

        const response = await fetch('http://localhost:3333/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            setMessage('Registro realizado com sucesso!');
            setTimeout(() => {
                navigate('/'); // Redireciona para a tela principal
            }, 1000);
        } else {
            const errorResponse = await response.json();
            setMessage(errorResponse.error || 'Erro ao realizar o registro.');
        }
    } else {
        // Login (mantém como está)
        try {
            console.log('Iniciando login...');
            const response = await fetch('http://localhost:3333/usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const user = await response.json();

            if (response.ok) {
                setMessage('Login realizado com sucesso!');
                onLogin(user);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                setMessage('Email ou senha inválidos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setMessage('Ocorreu um erro. Por favor, tente novamente.');
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
        <h2>{isRegistering ? 'Registro' : 'Bem-Vindo(a)'}</h2>
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
          {isRegistering && (
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="isNutritionist"
                checked={isNutritionist}
                onChange={(e) => setIsNutritionist(e.target.checked)}
              />
              <label htmlFor="isNutritionist">Sou nutricionista</label>
            </div>
          )}
          {isNutritionist && (
            <>
              <input
                type="text"
                placeholder="CRN (ex: CRN-X/XXXXXXXX)"
                className={styles.input}
                required={isNutritionist}
                value={crn}
                onChange={(e) => setCrn(e.target.value)}
              />
              <input
                type="text"
                placeholder="URL da Foto"
                className={styles.input}
                required={isNutritionist}
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Telefone para contato"
                className={styles.input}
                required={isNutritionist}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
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
