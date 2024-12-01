import React from 'react';
import feature1 from '../../assets/feature1.jpg';
import feature2 from '../../assets/feature2.jpg';
import feature3 from '../../assets/feature3.png';
import feature4 from '../../assets/feature4.jpg';

import styles from './styles.module.css'

function Features() {
  const features = [
    {
      title: 'Transforme Ingredientes em Pratos Deliciosos',
      description: 'Descubra como transformar ingredientes simples em refeições completas e nutritivas.',
      image: feature1, // Usa a imagem
    },
    {
      title: 'Acompanhe o Consumo de Calorias',
      description: 'Receitas saudáveis com informações nutricionais detalhadas.',
      image: feature2,
    },
    {
      title: 'Consulte Especialistas',
      description: 'Conecte-se com nutricionistas para tirar dúvidas.',
      image: feature3,
    },
    {
      title: 'Escolha o que Comer',
      description: 'Receitas ideais baseadas nos ingredientes que você já tem.',
      image: feature4,
    },
  ];

  return (
    <section className={`container`}>
      <h3 className={styles.title}>Nossos serviços</h3>
      <div className={`row`}>
          {features.map((feature, index) => (
            <div className={`col-lg-6 col-xs-12`}>
              <div key={index} className={styles.card}>
                <img src={feature.image} alt={feature.title} className={styles.image} />
                <h4 className={styles.cardTitle}>{feature.title}</h4>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        
      </div>
      <div className={styles.grid}>
      </div>
    </section>
  );
}

export default Features;
