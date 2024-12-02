import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.css'

import recipeList from '../../service/recipeList.jsx';


function RecipeList({recipeSearchResult, isSearching}) {
  const navigate = useNavigate();
  
  const handleClick = (e, recipe) => {
    if (recipe) {
      navigate(`/recipe/${recipe.id}`);
    } else {
      alert('Receita não encontrada!');
    }
  };

  return (
    <section className={'container'}>
      <div className="row">
        <div className="col">
          <div className="row">
            <h3 className={styles.title}>{isSearching ? 'Receitas econtradas' : 'Cheque nossas receitas'}</h3>
          </div>
          <div className="row">
            {
              recipeSearchResult.length !== 0 ?
                recipeSearchResult.map((recipe) => (
                  <div className="col-4">
                    <div key={recipe.id} className={styles.card}>
                      <img src={recipe.image} alt={recipe.title} className={styles.image} />
                      <h4 className={styles.cardTitle}>{recipe.title}</h4>
                      <p className={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
                      <p className={styles.cardInfo}>Tempo: {recipe.time} min</p>
                      <button className={styles.cardButton} onClick={(e) => handleClick(e, recipe)}>
                        Ver receita completa
                      </button>
                    </div>
                  </div>
                ))
              :
                isSearching ? <p className={styles.added_ingredients_empty}>Nenhuma receita encontrada</p> 
                : 
                  recipeList.map((recipe) => (
                    <div className="col-4">
                      <div key={recipe.id} className={styles.card}>
                        <img src={recipe.image} alt={recipe.title} className={styles.image} />
                        <h4 className={styles.cardTitle}>{recipe.title}</h4>
                        <p className={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
                        <p className={styles.cardInfo}>Tempo: {recipe.time} min</p>
                        <button className={styles.cardButton} onClick={(e) => handleClick(e, recipe)}>
                          Ver receita completa
                        </button>
                      </div>
                    </div>
                  ))
            }
          </div>

        </div>
      </div>
    </section>
  );
}

export default RecipeList;
