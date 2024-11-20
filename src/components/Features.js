import React from 'react';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.jpg';

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
    <section style={styles.container}>
      <h3 style={styles.title}>O que oferecemos</h3>
      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <img src={feature.image} alt={feature.title} style={styles.image} />
            <h4 style={styles.cardTitle}>{feature.title}</h4>
            <p style={styles.cardDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: '40px 20px', backgroundColor: '#f4f4f4' },
  title: { color: '#4caf50', marginBottom: '20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  card: { backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
  image: { width: '100%', height: '150px', objectFit: 'cover' }, // Adiciona a imagem
  cardTitle: { padding: '10px', color: '#2e7d32' },
  cardDescription: { padding: '0 10px 10px' },
};

export default Features;
