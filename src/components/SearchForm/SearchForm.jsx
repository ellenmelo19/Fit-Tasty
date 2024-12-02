import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'

import recipeList from '../../service/recipeList.jsx';
import { FaCarrot } from 'react-icons/fa';

function SearchForm({setRecipeSearchResult, setIsSearching}) {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [calories, setCalories] = useState(61);
  const [prepTime, setPrepTime] = useState(51);
  const [recipeName, setRecipeName] = useState('');

  const handleSearch = () => {
    let recipesFound = []
    
    recipeList.forEach((_recipe) => {
      ingredients.forEach((_ingredient_target) => {
        if(_recipe.ingredients.find((_ingredient) => {
          return _ingredient.nome?.toLowerCase() === _ingredient_target.toLowerCase()
        })){
          recipesFound.push(_recipe)
        }
      })
    })

    if(ingredients.length > 0) setIsSearching(true)
    else setIsSearching(false)
    setRecipeSearchResult(recipesFound)
  };

  const addIngredient = (e) => {
    e.preventDefault();

    if (ingredient && !ingredients?.find((_ingredient) => _ingredient === ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const showRemoveIngredient = (e, ingredient) =>{
    e.target.textContent = `Remover ${ingredient}`
  }

  const hideRemoveIngredient = (e, ingredient) =>{
    e.target.textContent = ingredient
  }

  const removeIngredient = (e, index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <section id="search-form" className={`container mb-4`}>
      <h3 className={`${styles.title}`}>Pesquisar receitas com ingredientes de casa</h3>
      <div className="row">
        <div className="col">
          <form>
            <div className={styles.new_input_container}>
              <div className={styles.new_input_header}>Ingrediente</div>
              <div className={styles.new_input}>
                  <FaCarrot color='grey' className='align-self-center' />
                  <input 
                    id='ingredientInput'
                    type="text"
                    placeholder="Ex.: Arroz"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                  />
                <div className={styles.new_input_add_button}>
                  <button onClick={(e) => addIngredient(e)}>+</button>
                  </div>
              </div>
            </div>
          </form>

          <p className={styles.added_ingredients_header}>Ingredientes adicionados</p>
          <div className={styles.added_ingredients}>
            {(ingredients.length === 0) ? <p className={styles.added_ingredients_empty}>Nenhum ingrediente adicionado ainda</p> : <></>}
            {ingredients.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.added_ingredients_item} 
                  onMouseOver={(e) => showRemoveIngredient(e, item)} 
                  onMouseLeave={(e) => hideRemoveIngredient(e, item)}
                  onClick={(e) => removeIngredient(e, index)}>
                    {item}
                  </div>
              ))}
          </div>
          <button className={styles.searchRecipesButton} onClick={(e) => handleSearch()}>Pesquisar receitas</button>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
