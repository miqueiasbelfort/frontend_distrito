import React from "react";
import styles from "./Challenges.module.css"

import Img from "../../assets/04.jpg"

const Challenges = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.chellengesContainer} containerDark`}>
                <div className={styles.guildInfo}>
                    <img src={Img} alt="" />
                    <div className={styles.guilname}>
                        <h2>Code_Win</h2>
                        <span>-</span>
                        <span className={styles.score}>1520 - score</span>
                    </div>
                </div>
                <div className={styles.challengeInformation}>
                    <h2>Criar uma plicação full stack</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id facere, voluptates eius assumenda aliquid! Quas, non quos ut laudantium minima est reiciendis nesciunt dolor beatae, repellat earum nihil! Nulla.</p>
                </div>
                <p>Você ganha <span className={styles.score}>25 Score</span> por esse desafio!</p>
                <div className={styles.buttonContainer}>
                    <button className="button">Aceitar desafio</button>
                </div>
            </div>
        </div>
    )
}

export default Challenges