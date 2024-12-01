import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css'

function SearchForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [calories, setCalories] = useState(61);
  const [prepTime, setPrepTime] = useState(51);
  const [recipeName, setRecipeName] = useState('');
  const navigate = useNavigate();

  const recipes = [
    { id: 1, title: 'Mingau de Aveia Proteico' },
    { id: 2, title: 'Mousse de Abacaxi Fit' },
    { id: 3, title: 'Tapioca Recheada com Frango' },
    { id: 4, title: 'Mousse de Maracujá Fit' },
    { id: 5, title: 'Bolo de Caneca Sem Leite' },
    { id: 6, title: 'Pudim de Chia' },
  ];

  const handleSearch = () => {
    const recipe = recipes.find((r) =>
      r.title.toLowerCase().includes(recipeName.toLowerCase())
    );

    if (recipe) {
      navigate(`/recipe/${recipe.id}`);
    } else {
      alert('Receita não encontrada!');
    }
  };

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
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
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
          
          <button onClick={handleSearch} className={`${styles.searchButton}`}>Buscar receitas</button>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
