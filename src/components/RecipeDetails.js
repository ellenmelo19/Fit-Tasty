import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
    const { id_recipe } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3333/recipes/${id_recipe}`);
                if (!response.ok) {
                    throw new Error('Receita não encontrada');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeDetails();
    }, [id_recipe]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {recipe && (
                <>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image} alt={recipe.title} style={{ width: '400px', height: '300px', objectFit: 'cover' }} />
                    <p>{recipe.description}</p>
                    <h3>Ingredientes:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.quantity} {ingredient.measure_unity} de {ingredient.name}
                            </li>
                        ))}
                    </ul>
                    <h3>Modo de Preparo:</h3>
                    <p>{recipe.steps}</p>
                    <h3>Calorias:</h3>
                    <p>{recipe.calories} kcal</p>
                    <h3>Tempo de Preparo:</h3>
                    <p>{recipe.prepTime} minutos</p>
                </>
            )}
        </div>
    );
}

export default RecipeDetails;
