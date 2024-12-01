import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css'

function RecipeList() {
  const recipes = [
    { id: 1, title: 'Mingau de Aveia Proteico', image: 'https://guiadacozinha.com.br/wp-content/uploads/2023/02/mingau-de-aveia-proteico-768x619.jpg', calories: 250, time: 10 },
    { id: 2, title: 'Mousse de Abacaxi Fit', image: 'https://mgtnutri.com.br/wp-content/uploads/2017/03/mousse-leve-de-abacaxi.jpg', calories: 120, time: 15 },
    { id: 3, title: 'Tapioca Recheada com Frango', image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/tapioca-de-frango.jpg', calories: 300, time: 15 },
    { id: 4, title: 'Mousse de Maracujá Fit', image: 'https://baudasreceitas.com.br/wp-content/uploads/2020/04/receita-de-mousse-de-maracuja-fit.jpg', calories: 130, time: 15 },
    { id: 5, title: 'Bolo de Caneca Sem Leite', image: 'https://www.acasaencantada.com.br/wp-content/uploads/2023/06/bolo_de_caneca_sem_leite_02.jpeg', calories: 180, time: 5 },
    { id: 6, title: 'Pudim de Chia', image: 'https://s2-receitas.glbimg.com/qUGgAkzRCDhRIKTCf4Fx2b8LvJo=/0x0:5760x3840/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/O/6/GIjXUpT3OG2XSktYFHQQ/shutterstock-562510153.jpg', calories: 150, time: 5 },
  ];

  return (
    <section className={'container'}>
      <div className="row">
        <div className="col">
          <div className="row">
            <h3 className={styles.title}>Receitas</h3>
          </div>
          <div className="row">
            {recipes.map((recipe) => (
              <div className="col-4">
                <div key={recipe.id} className={styles.card}>
                  <img src={recipe.image} alt={recipe.title} className={styles.image} />
                  <h4 className={styles.cardTitle}>{recipe.title}</h4>
                  <p className={styles.cardInfo}>Calorias: {recipe.calories} kcal</p>
                  <p className={styles.cardInfo}>Tempo: {recipe.time} min</p>
                  <Link to={`/recipe/${recipe.id}`} className={styles.cardButton}>
                    Ver receita completa
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default RecipeList;
