import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Importa a imagem

function Hero() {
  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${backgroundImage})` }}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Fit & Tasty</h1>
        <p style={styles.subtitle}>
          Descubra receitas saudáveis com ingredientes que você já tem em casa. Nutrição ao seu alcance!
        </p>
        <button style={styles.button}>Experimente já</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover', // Faz com que a imagem preencha o fundo
    backgroundPosition: 'center', // Centraliza a imagem
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adiciona uma camada escura por cima da imagem
    color: 'white',
    padding: '100px',
    textAlign: 'center',
    borderRadius: '10px',
  },
  title: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    margin: '0 0 10px',
    color: '#FFFFFF', // Cor clara para destaque
  },
  subtitle: {
    fontSize: '1.2em',
    margin: '0 0 20px',
  },
  button: {
    backgroundColor: '#66bb6a',
    border: 'none',
    padding: '10px 20px',
    color: 'white',
    fontSize: '1em',
    fontWeight: 'bold',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
};

export default Hero;
