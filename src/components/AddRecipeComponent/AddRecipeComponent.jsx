import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from './styles.module.css'

export default function AddRecipeComponent(){
    const navigate = useNavigate();
    const [recipeName, setRecipeName] = useState('')
    const [ingredients, setIngredients] = useState([])

    const [ingredient, setIngredient] = useState('')
    const [unit, setUnit] = useState('')
    const [qtd, setQtd] = useState(1)

    const handleAddRecipeButton = (e) =>{
        e.preventDefault()
        alert("Nova receita adicionada")
        
        navigate(`/`);
    }

    const addIngredient = (e) => {
        e.preventDefault();
    
        if (ingredient && !ingredients?.find((_ingredient) => _ingredient === ingredient)) {
          setIngredients([...ingredients, {name: ingredient, unit: unit, qtd: qtd}]);
          setIngredient('');
          setUnit('');
          setQtd(1);
        }
      };
    
      const showRemoveIngredient = (e, ingredient) =>{
        e.target.textContent = `Remover ${ingredient.qtd} ${ingredient.unit} de ${ingredient.name}`
      }
    
      const hideRemoveIngredient = (e, ingredient) =>{
        e.target.textContent = `${ingredient.qtd} ${ingredient.unit} de ${ingredient.name}`
      }
    
      const removeIngredient = (e, index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
      };

    return(
        <div className="d-flex flex-column ">
            <Header/>
            <div className={`${styles.addRecipePage}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <h3 className={styles.title}>Adicionar nova receita</h3>
                            </div>
                            <form>
                                <div className={styles.new_input_container}>
                                    <div className={styles.new_input_header}>Nome da receita</div>
                                        <div className={styles.new_input}>
                                            <input 
                                                id='recipeNameInput'
                                                type="text"
                                                placeholder="Feijoada"
                                                value={recipeName}
                                                onChange={(e) => setRecipeName(e.target.value)}
                                            />
                                            <div className={styles.new_input_add_button}>
                                            <button onClick={(e) => addIngredient(e)}>+</button>
                                        </div>
                                    </div>
                                    <div className="d-flex d-row">
                                        <div>
                                            <div className={styles.new_input_header}>Ingrediente</div>
                                                <div className={`${styles.new_input} ${styles.new_input_small}`}>
                                                    <input 
                                                        id='ingredientNameInput'
                                                        type="text"
                                                        placeholder="Ex.: Arroz"
                                                        value={ingredient}
                                                        onChange={(e) => setIngredient(e.target.value)}
                                                    />
                                                    <div className={styles.new_input_add_button}>
                                                    {/* <button onClick={(e) => addIngredient(e)}>+</button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.new_input_header}>Unidade de medida</div>
                                                <div className={`${styles.new_input} ${styles.new_input_small}`}>
                                                    <input 
                                                        id='ingredientUnitInput'
                                                        type="text"
                                                        placeholder="Ex.: Xícara"
                                                        value={unit}
                                                        onChange={(e) => setUnit(e.target.value)}
                                                    />
                                                    <div className={styles.new_input_add_button}>
                                                    {/* <button onClick={(e) => addIngredient(e)}>+</button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.new_input_header}>Quantidade</div>
                                                <div className={`${styles.new_input} ${styles.new_input_small}`}>
                                                    <input 
                                                        id='ingredientQtdInput'
                                                        type="number"
                                                        placeholder="Ex.: 2"
                                                        value={qtd}
                                                        onChange={(e) => setQtd(e.target.value)}
                                                    />
                                                    <div className={styles.new_input_add_button}>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={(e) => addIngredient(e)} className={`${styles.addRecipesButton}`}>Adicionar ingrediente</button>
                                    </div>
                                </div>

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
                                            {item.qtd} {item.unit} de {item.name}
                                        </div>
                                    ))}
                                </div>

                                <p className={`mt-3`}>Modo de Preparo</p>
                                <textarea
                                    className={`${styles.new_input}`}
                                    type="text"
                                />
                                <button className={`mt-3 ${styles.addRecipesButton}`} onClick={(e) => handleAddRecipeButton(e)}>Adicionar receita</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}