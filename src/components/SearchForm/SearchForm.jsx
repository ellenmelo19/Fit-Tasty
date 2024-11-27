import React, { useState } from 'react';

import styles from './styles.module.css'

function SearchForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [calories, setCalories] = useState(61);
  const [prepTime, setPrepTime] = useState(51);

  const addIngredient = () => {
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <section id="search-form" className={`container mb-4`}>
      <h3 className={`${styles.title}`}>Busque por receitas acessíveis para você!</h3>
      <div className="row p-2 justify-content-center">
        <div className="col-10">
          <div className="row">
            <div className={`col ${styles.singleInput}`}>
              <label for='nameInput'>
                Nome da Receita
              </label>
              <input
                id='nameInput'
                type="text"
                placeholder="Ex.: Omelete"
                className={`${styles.inputSingle}`}
              />
            </div>
          </div>

          <div className={`row ${styles.inputGroup}`}>
            <div className="col">
              <div className={`${styles.singleInput}`}>
                <label for='ingredientInput'>
                  Novo ingrediente
                </label>
                <input
                  id='ingredientInput'
                  type="text"
                  placeholder="Ex.: Arroz"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                  className={`${styles.inputSingle}`}
                />
              </div>
              <button onClick={addIngredient} className={`${styles.button}`}>
                Adicionar Ingrediente
              </button>
            </div>
            <div className="col">
              
            </div>
          </div>

          <ul className={`${styles.list}`}>
            {ingredients.map((item, index) => (
              <li key={index} className={`${styles.listItem}`}>
                {item}
                <button onClick={() => removeIngredient(index)} className={`${styles.deleteButton}`}>
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <div className={`${styles.sliderGroup}`}>
            <label>Caloria (kcal):</label>
            <input
              type="range"
              min="30"
              max="90"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
              className={`${styles.slider}`}
            />
            <span>{calories}</span>
          </div>

          <div className={`${styles.sliderGroup}`}>
            <label>Tempo de preparo (min):</label>
            <input
              type="range"
              min="30"
              max="90"
              value={prepTime}
              onChange={(e) => setPrepTime(Number(e.target.value))}
              className={`${styles.slider}`}
            />
            <span>{prepTime}</span>
          </div>
          
          <button className={`${styles.searchButton}`}>Buscar receitas</button>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
