import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function RecipeList({ recipeSearchResult, isSearching }) {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3333/recipes/search', {method: 'POST',});
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Erro ao buscar receitas:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleClick = (e, recipe) => {
    if (recipe) {
      navigate(`/recipe/${recipe.id_recipe}`);
    } else {
      alert('Receita não encontrada!');
    }
  };

  return (
    <section className={'container'}>
      <div className="row">
        <div className="col">
          <div className="row">
            <h3 className={styles.title}>{isSearching ? 'Receitas encontradas' : 'Cheque nossas receitas'}</h3>
          </div>
          <div className="row">
            {recipeSearchResult.length !== 0 ? (
              recipeSearchResult.map((recipe) => (
                <div className="col-4" key={recipe.id_recipe}>
                  <div className={styles.card}>
                    <img src={recipe.image} alt={recipe.title} className={styles.image} />
                    <h4 className={styles.cardTitle}>{recipe.title}</h4>
                    <p className={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
                    <p className={styles.cardInfo}>Tempo: {recipe.prepTime} min</p>
                    <button className={styles.cardButton} onClick={(e) => handleClick(e, recipe)}>
                      Ver receita completa
                    </button>
                  </div>
                </div>
              ))
            ) : isSearching ? (
              <p className={styles.added_ingredients_empty}>Nenhuma receita encontrada</p>
            ) : (
              recipes.map((recipe) => (
                <div className="col-4" key={recipe.id_recipe}>
                  <div className={styles.card}>
                    <img src={recipe.image} alt={recipe.title} className={styles.image} />
                    <h4 className={styles.cardTitle}>{recipe.title}</h4>
                    <p className={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
                    <p className={styles.cardInfo}>Tempo: {recipe.prepTime} min</p>
                    <button className={styles.cardButton} onClick={(e) => handleClick(e, recipe)}>
                      Ver receita completa
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecipeList;
