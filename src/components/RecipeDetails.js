import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { recipeId } = useParams();

  const recipes = [
    { id: 1, title: 'Mingau de Aveia Proteico', image: 'https://guiadacozinha.com.br/wp-content/uploads/2023/02/mingau-de-aveia-proteico-768x619.jpg', description: 'Delicioso mingau de aveia proteico...', ingredients: ['1 xícara de aveia', '2 xícaras de leite', '1 colher de sopa de mel'], steps: ['Misture todos os ingredientes em uma panela...', 'Cozinhe em fogo médio até engrossar...'], calories: 250, prepTime: 10 },
    { id: 2, title: 'Mousse de Abacaxi Fit', image: 'https://mgtnutri.com.br/wp-content/uploads/2017/03/mousse-leve-de-abacaxi.jpg', description: 'Mousse de abacaxi leve e saudável...', ingredients: ['1 abacaxi', '2 colheres de sopa de gelatina', '1 xícara de água'], steps: ['Bata o abacaxi no liquidificador...', 'Misture a gelatina dissolvida...'], calories: 120, prepTime: 15 },
    { id: 3, title: 'Tapioca Recheada com Frango', image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/tapioca-de-frango.jpg', description: 'Tapioca recheada com frango desfiado...', ingredients: ['2 colheres de tapioca', '100g de frango desfiado', 'Sal a gosto'], steps: ['Prepare a tapioca...', 'Recheie com o frango desfiado...'], calories: 300, prepTime: 15 },
    { id: 4, title: 'Mousse de Maracujá Fit', image: 'https://baudasreceitas.com.br/wp-content/uploads/2020/04/receita-de-mousse-de-maracuja-fit.jpg', description: 'Mousse de maracujá delicioso e fit...', ingredients: ['1 maracujá', '1 xícara de água', '2 colheres de sopa de mel'], steps: ['Bata o maracujá no liquidificador...', 'Misture todos os ingredientes...'], calories: 130, prepTime: 15 },
    { id: 5, title: 'Bolo de Caneca Sem Leite', image: 'https://www.acasaencantada.com.br/wp-content/uploads/2023/06/bolo_de_caneca_sem_leite_02.jpeg', description: 'Bolo de caneca fácil e rápido...', ingredients: ['1 xícara de farinha', '1 ovo', '2 colheres de sopa de açúcar'], steps: ['Misture todos os ingredientes...', 'Leve ao micro-ondas por 5 minutos...'], calories: 180, prepTime: 5 },
    { id: 6, title: 'Pudim de Chia', image: 'https://s2-receitas.glbimg.com/qUGgAkzRCDhRIKTCf4Fx2b8LvJo=/0x0:5760x3840/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/O/6/GIjXUpT3OG2XSktYFHQQ/shutterstock-562510153.jpg', description: 'Pudim saudável de chia...', ingredients: ['2 colheres de chia', '1 xícara de leite de coco', '1 colher de sopa de mel'], steps: ['Misture todos os ingredientes...', 'Deixe na geladeira por 4 horas...'], calories: 150, prepTime: 5 }
  ];

  const recipe = recipes.find(r => r.id === parseInt(recipeId));

  if (!recipe) {
    return <p>Receita não encontrada.</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{recipe.title}</h1>
      <div style={styles.imageContainer}>
        <img src={recipe.image} alt={recipe.title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <span>{recipe.calories} kcal</span>
        <span>{recipe.prepTime} min</span>
      </div>
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Ingredientes</h3>
        <ul style={styles.list}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} style={styles.listItem}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Modo de Preparo</h3>
        <ol style={styles.list}>
          {recipe.steps.map((step, index) => (
            <li key={index} style={styles.listItem}>{step}</li>
          ))}
        </ol>
      </div>
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Receita adicionada por</h3>
        <p>Manuela Castro Araújo</p>
        <p>Email: manuela@gmail.com</p>
        <p>CRN: 9847589749</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5em',
    color: '#4caf50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  info: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
    fontSize: '1.1em',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8em',
    color: '#4caf50',
    borderBottom: '2px solid #4caf50',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
};

export default RecipeDetails;
