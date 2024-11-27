// Hero.js
import React from 'react';
import backgroundImage from '../../assets/background.png';

import './styles.css'

function Hero() {
  const scrollToSearchForm = () => {
    document.getElementById('search-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='overlay'>
        <h1 className='title'>Fit & Tasty</h1>
        <p className='subtitle'>
          Descubra receitas saudáveis com ingredientes que você já tem em casa. <br/>Nutrição ao seu alcance!
        </p>
        <button onClick={scrollToSearchForm} className='button'>Experimente já</button>
      </div>
    </section>
  );
}

export default Hero;
