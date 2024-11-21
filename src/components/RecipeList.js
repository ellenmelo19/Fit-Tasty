import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList() {
  const recipes = [
    { id: 1, title: 'Mingau de Aveia Proteico', image: 'https://guiadacozinha.com.br/wp-content/uploads/2023/02/mingau-de-aveia-proteico-768x619.jpg', calories: 250, time: 10 },
    { id: 2, title: 'Mousse de Abacaxi Fit', image: 'https://mgtnutri.com.br/wp-content/uploads/2017/03/mousse-leve-de-abacaxi.jpg', calories: 120, time: 15 },
    { id: 3, title: 'Tapioca Recheada com Frango', image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/tapioca-de-frango.jpg', calories: 300, time: 15 },
    { id: 4, title: 'Mousse de Maracujá Fit', image: 'https://baudasreceitas.com.br/wp-content/uploads/2020/04/receita-de-mousse-de-maracuja-fit.jpg', calories: 130, time: 15 },
    { id: 5, title: 'Bolo de Caneca Sem Leite', image: 'https://www.acasaencantada.com.br/wp-content/uploads/2023/06/bolo_de_caneca_sem_leite_02.jpeg', calories: 180, time: 5 },
    { id: 6, title: 'Pudim de Chia', image: 'https://s2-receitas.glbimg.com/qUGgAkzRCDhRIKTCf4Fx2b8LvJo=/0x0:5760x3840/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/O/6/GIjXUpT3OG2XSktYFHQQ/shutterstock-562510153.jpg', calories: 150, time: 5 },
  ];

  return (
    <section style={styles.container}>
      <h3 style={styles.title}>Receitas</h3>
      <div style={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img src={recipe.image} alt={recipe.title} style={styles.image} />
            <h4 style={styles.cardTitle}>{recipe.title}</h4>
            <p style={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
            <p style={styles.cardInfo}>Tempo: {recipe.time} min</p>
            <Link to={`/recipe/${recipe.id}`} style={styles.cardButton}>
              Ver receita completa
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: '20px', backgroundColor: '#f4f4f4', maxWidth: '800px', margin: '0 auto' },
  title: { color: '#4caf50', marginBottom: '20px', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' },
  card: { backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' },
  image: { width: '100%', height: '150px', objectFit: 'cover' },
  cardTitle: { padding: '10px', color: '#2e7d32' },
  cardInfo: { padding: '0 10px' },
  cardButton: { 
    display: 'inline-block', 
    backgroundColor: '#4caf50', 
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
    margin: '10px 0', 
    textDecoration: 'none' // Garante que o link não tenha sublinhado
  },
};

export default RecipeList;
