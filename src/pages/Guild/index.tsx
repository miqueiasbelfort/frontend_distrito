import React from "react";
import styles from "./Guild.module.css"

import Img from "../../assets/04.jpg"

const Guild = () => {
    return (
        <div className={styles.container}>
            <div className={styles.guildinformations}>
                <img src={Img} alt="guild image" className={styles.guildphoto}/>
                <div className={styles.informationsGuildText}>
                    <h2>Code_Win - <span className={styles.score}>4578 score</span></h2>
                    <a href="">http://codewin.com.br</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore qui error fugiat neque ipsam sapiente repudiandae, voluptates impedit minus, vel quod nam commodi rem ullam magni, eveniet veritatis adipisci!</p>
                    <div>
                        <span>145 membros</span>
                    </div>
                </div>
            </div>
            <h1>Membros</h1>
            <div className={`${styles.membersContainer} containerDark`}>
                <div className={`${styles.userCard}`}>
                    <img src={Img} alt="Card" />
                    <div className={styles.infouser}>
                        <h3>Username</h3>
                        <span>124 - score</span>
                    </div>
                </div>
            </div>
            <h1>Desafios</h1>
            <div className={`${styles.challengesContainer} containerDark`}>
                <div className={styles.challenge}>
                    <h2>Criar uma plicação full stack</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis qui aliquam vero rerum iste eveniet ad accusamus officiis magni? Quas aut eligendi saepe. Totam iure nostrum dignissimos reprehenderit sapiente!</p>
                </div>
            </div>
        </div>
    )
}

export default Guild