import React, { useState } from 'react';

function SearchForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');

  const addIngredient = () => {
    if (ingredient) {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  return (
    <section style={styles.container}>
      <h3>Busque por receitas acessíveis para você!</h3>
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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

const styles = {
  container: { padding: '20px', backgroundColor: '#e8f5e9' },
  inputGroup: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' },
  input: { flexGrow: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd', marginRight: '10px' },
  button: { backgroundColor: '#66bb6a', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px' },
  list: { marginTop: '10px', textAlign: 'left' },
};

export default SearchForm;
