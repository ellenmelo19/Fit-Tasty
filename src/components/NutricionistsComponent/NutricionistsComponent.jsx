import React, { useEffect, useState } from "react";
import styles from './styles.module.css';

export default function NutricionistsComponent() {
    const [nutritionists, setNutritionists] = useState([]);

    useEffect(() => {
        const fetchNutritionists = async () => {
            try {
                const response = await fetch('http://localhost:3333/nutritionists');
                const data = await response.json();
                setNutritionists(data);
            } catch (error) {
                console.error('Erro ao buscar nutricionistas:', error);
            }
        };

        fetchNutritionists();
    }, []);

    const NutricionistCard = ({ nutritionist }) => {
        return (
            <div className="col-4">
                <div className={`${styles.nutricionist_card}`}>
                    <img className={`${styles.nutricionist_image}`} src={nutritionist.photoUrl} alt={`Foto de ${nutritionist.firstName} ${nutritionist.lastName}`} />
                    <p className={`${styles.nutricionist_name}`}>{nutritionist.firstName} {nutritionist.lastName}</p>
                    <p className={`${styles.CRN}`}>{nutritionist.crn}</p>
                    <p className={`${styles.email}`}>{nutritionist.email}</p>
                    <p className={`${styles.phone}`}>{nutritionist.phone}</p>
                </div>
            </div>
        );
    };

    return (
        <section className={`container ${styles.nutricionists}`}>
            <div className="row">
                <div className="col">
                    <p className={styles.title}>Conheça nossos nutricionistas cadastrados</p>
                    <div className={`row`}>
                        {nutritionists.map((nutritionist, key) => (
                            <NutricionistCard
                                key={key}
                                nutritionist={nutritionist}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
