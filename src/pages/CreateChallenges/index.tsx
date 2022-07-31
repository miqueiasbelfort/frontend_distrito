import React from "react";
import styles from "./CreateChallenges.module.css"

import Button from "../../components/Button"

const CreateChallenges = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Criar Desafio</h2>
            </div>
            <form className={`${styles.formContainer} containerDark`}>
                <label>
                    <p>Título:</p>
                    <input 
                        type="text"
                        placeholder="EX: Criar uma aplicaçõa full stack com TypeScript."
                    />
                </label>
                <div className={styles.linkAndScore}>
                    <label>
                        <p>Link:</p>
                        <input 
                            type="text"
                            placeholder="EX: http://github.com/meunome/meudesafio"
                        />
                    </label>
                    <label>
                        <p>Score:</p>
                        <input 
                            type="number"
                            placeholder="EX: 25"
                        />
                    </label>
                </div>
                <label>
                    <p>Descrição:</p>
                    <textarea
                        placeholder="Descreva aqui seu desafio!"
                    >

                    </textarea>
                </label>
                <Button
                    type="submit"
                    textBtn="Criar Desafio"
                />
            </form>
        </div>
    )
}
export default CreateChallenges