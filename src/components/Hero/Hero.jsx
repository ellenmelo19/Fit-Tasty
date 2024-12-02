// Hero.js
import React from 'react';
import backgroundImage from '../../assets/background.png';

import styles from './styles.module.css'

function Hero() {
  const scrollToSearchForm = () => {
    document.getElementById('search-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Receitas saudáveis e práticas</h1>
        <p className={styles.subtitle}>
        Descubra receitas saudáveis com ingredientes que você já tem em casa. <br/> Nutrição ao seu alcance!
        </p>
        <button onClick={scrollToSearchForm} className={styles.button}>Pesquisar receitas</button>
      </div>
    </section>
  );
}

export default Hero;
