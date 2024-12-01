import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <section id="search-form" style={styles.container}>
      <h3>Busque por receitas acessíveis para você!</h3>

      <div style={styles.singleInput}>
        <input
          type="text"
          placeholder="Nome da receita"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          style={styles.inputSingle}
        />
      </div>

      <p style={styles.orText}>ou</p>

      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Ingrediente"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          style={styles.input}
        />
        <button onClick={addIngredient} style={styles.button}>
          Adicionar Ingrediente
        </button>
      </div>

      <ul style={styles.list}>
        {ingredients.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}
            <button onClick={() => removeIngredient(index)} style={styles.deleteButton}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.sliderGroup}>
        <label>Caloria (kcal):</label>
        <input
          type="range"
          min="30"
          max="90"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          style={styles.slider}
        />
        <span>{calories}</span>
      </div>

      <div style={styles.sliderGroup}>
        <label>Tempo de preparo (min):</label>
        <input
          type="range"
          min="30"
          max="90"
          value={prepTime}
          onChange={(e) => setPrepTime(Number(e.target.value))}
          style={styles.slider}
        />
        <span>{prepTime}</span>
      </div>

      <button onClick={handleSearch} style={styles.searchButton}>
        Buscar receitas
      </button>
    </section>
  );
}

const styles = {
  container: { 
    padding: '20px', 
    backgroundColor: '#e8f5e9', 
    maxWidth: '600px', // Largura máxima para centralizar
    margin: '0 auto', // Centraliza o conteúdo
    textAlign: 'center' // Centraliza o texto
  },
  singleInput: { 
    display: 'flex', 
    justifyContent: 'center', 
    marginBottom: '10px' 
  },
  inputSingle: { 
    padding: '10px', 
    borderRadius: '5px', 
    border: '1px solid #ddd',
    width: '100%',
    maxWidth: '400px',  // Ajusta a largura máxima
    boxSizing: 'border-box'  // Garante que o preenchimento seja incluído na largura total
  },
  inputGroup: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    marginBottom: '10px' 
  },
  input: { 
    padding: '10px', 
    borderRadius: '5px', 
    border: '1px solid #ddd', 
    marginBottom: '10px',
    width: '100%' 
  },
  button: { 
    backgroundColor: '#66bb6a', 
    border: 'none', 
    color: 'white', 
    padding: '10px 20px', 
    borderRadius: '5px', 
    marginBottom: '10px' 
  },
  list: { 
    marginTop: '10px', 
    textAlign: 'left' 
  },
  listItem: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: '10px' 
  },
  deleteButton: { 
    backgroundColor: 'red', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px', 
    padding: '5px' 
  },
  sliderGroup: { 
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: '10px' 
  },
  slider: { 
    flexGrow: 1, 
    margin: '0 10px' 
  },
  searchButton: { 
    backgroundColor: '#4caf50', 
    border: 'none', 
    color: 'white', 
    padding: '10px 20px', 
    borderRadius: '5px', 
    cursor: 'pointer' 
  },
  orText: { 
    margin: '10px 0', 
    fontSize: '16px', 
    color: '#333' 
  }
};

export default SearchForm;
