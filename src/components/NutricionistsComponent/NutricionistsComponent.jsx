import React from "react";
import styles from './styles.module.css'

import nutricionist from './../../assets/Nutricionists/Nutricionista.png'
import nutricinonistsList from "../../service/nutricionistList";

export default function NutricionistsComponent(){
    const NutricionistCard = ({nutricionist}) =>{
        return(
            <div className="col-4">
                <div className={`${styles.nutricionist_card}`}>
                    <img className={`${styles.nutricionist_image}`} src={nutricionist.image} alt={`Foto de ${nutricionist.name}`} />
                    <p className={`${styles.nutricionist_name}`}>{nutricionist.name}</p>
                    <p className={`${styles.CRN}`}>{nutricionist.CRN}</p>
                </div>
            </div>
        )
    }

    return(
        <section className={`container ${styles.nutricionists}`}>
            <div className="row">
                <div className="col">
                    <p className={styles.title}>Conheça nossos nutricionistas cadastrados</p>
                    <div className={`row`}>
                        {
                            nutricinonistsList.map((_nutricionist, key) =>{
                                return (
                                    <NutricionistCard
                                        key={key}
                                        nutricionist={
                                            {
                                                image: _nutricionist.image,
                                                name: _nutricionist.name,
                                                CRN: _nutricionist.CRN
                                            }
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}