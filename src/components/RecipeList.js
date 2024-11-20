import React from 'react';

function RecipeList() {
  const recipes = [
    { title: 'Omelete Rápido', calories: 200, time: 10 },
    { title: 'Salada de Frango', calories: 300, time: 15 },
  ];

  return (
    <section style={styles.container}>
      <h3>Receitas</h3>
      <div style={styles.grid}>
        {recipes.map((recipe, index) => (
          <div key={index} style={styles.card}>
            <h4>{recipe.title}</h4>
            <p>Calorias: {recipe.calories}</p>
            <p>Tempo: {recipe.time} min</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: { padding: '20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
};

export default RecipeList;
