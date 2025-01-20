import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './styles.module.css';

export default function AddRecipeComponent() {
    const navigate = useNavigate();
    const [recipeName, setRecipeName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState('');
    const [calories, setCalories] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [unit, setUnit] = useState('');
    const [qtd, setQtd] = useState(1);

    const handleAddRecipeButton = async (e) => {
        e.preventDefault();
        const recipeData = {
            title: recipeName,
            image,
            description,
            ingredients,
            steps,
            calories,
            prepTime
        };

        try {
            const response = await fetch('http://localhost:3333/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipeData),
            });

            const responseData = await response.json();
            console.log('Resposta do backend:', responseData);

            if (response.ok) {
                alert("Nova receita adicionada");
                navigate(`/`);
            } else {
                alert('Erro ao adicionar receita: ' + responseData.error);
            }
        } catch (error) {
            console.error('Erro ao adicionar receita:', error);
            alert('Erro ao adicionar receita.');
        }
    };

    const addIngredient = (e) => {
        e.preventDefault();
        if (ingredient && !ingredients.find((_ingredient) => _ingredient.name === ingredient)) {
            setIngredients([...ingredients, { name: ingredient, unidade_de_medida: unit, qtd }]);
            setIngredient('');
            setUnit('');
            setQtd(1);
        }
    };

    const showRemoveIngredient = (e, ingredient) => {
        e.target.textContent = `Remover ${ingredient.qtd} ${ingredient.unidade_de_medida} de ${ingredient.name}`;
    };

    const hideRemoveIngredient = (e, ingredient) => {
        e.target.textContent = `${ingredient.qtd} ${ingredient.unidade_de_medida} de ${ingredient.name}`;
    };

    const removeIngredient = (e, index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    return (
        <div className="d-flex flex-column">
            <Header />
            <div className={`${styles.addRecipePage}`}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <h3 className={styles.title}>Adicionar nova receita</h3>
                            </div>
                            <form onSubmit={handleAddRecipeButton}>
                                <div className={styles.new_input_container}>
                                    <div className={styles.new_input_header}>Nome da receita</div>
                                    <div className={styles.new_input}>
                                        <input
                                            id='recipeNameInput'
                                            type="text"
                                            placeholder="Feijoada"
                                            value={recipeName}
                                            onChange={(e) => setRecipeName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className={styles.new_input_header}>URL da imagem</div>
                                    <div className={styles.new_input}>
                                        <input
                                            id='imageInput'
                                            type="text"
                                            placeholder="https://example.com/image.jpg"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className={styles.new_input_header}>Calorias</div>
                                    <div className={styles.new_input}>
                                        <input
                                            id='caloriesInput'
                                            type="number"
                                            placeholder="250"
                                            value={calories}
                                            onChange={(e) => setCalories(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className={styles.new_input_header}>Descrição</div>
                                    <div className={styles.new_input}>
                                        <textarea
                                            id='descriptionInput'
                                            placeholder="Descrição da receita"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
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
                                            {item.qtd} {item.unidade_de_medida} de {item.name}
                                        </div>
                                    ))}
                                </div>

                                <p className={`mt-3`}>Modo de Preparo</p>
                                <textarea
                                    className={`${styles.new_input}`}
                                    type="text"
                                    value={steps}
                                    onChange={(e) => setSteps(e.target.value)}
                                    required
                                />
                                <div className={styles.new_input_header}>Tempo de preparo (minutos)</div>
                                <div className={styles.new_input}>
                                    <input
                                        id='prepTimeInput'
                                        type="number"
                                        placeholder="30"
                                        value={prepTime}
                                        onChange={(e) => setPrepTime(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className={`mt-3 ${styles.addRecipesButton}`}>Adicionar receita</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
