import React, {useState, useEffect} from "react";
import styles from "./Guild.module.css"

import Img from "../../assets/04.jpg"
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { uploads } from "../../utils/config";

const Guild = () => {

    const [token] = useState<any>(localStorage.getItem("token") || "")
    const {id} = useParams()

    const [guild, setGuild] = useState<any>([])
    const [membersLenght, setMembersLength] = useState([])

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        api.get(`/guilds/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setGuild(res.data)
            setMembersLength(res.data?.members)
        })

        setLoading(false)

    }, [id])

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <div className={styles.container}>
            <div className={styles.guildinformations}>
                <img src={`${uploads}/images/guilds/${guild?.guildPhoto}`} alt={guild?.guildname} className={styles.guildphoto}/>
                <div className={styles.informationsGuildText}>
                    <h2>{guild?.guildname} - <span className={styles.score}>{guild?.score} score</span></h2>
                    <a href={guild?.link}>{guild?.link}</a>
                    <p>{guild?.description}</p>
                    <div>
                        <span>{membersLenght.length} {membersLenght.length > 1 || membersLenght.length == 0 ? <span>Membros</span> : <span>Membro</span>}</span>
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
                    <Link to="/challenges"><h2>Criar uma plicação full stack</h2></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis qui aliquam vero rerum iste eveniet ad accusamus officiis magni? Quas aut eligendi saepe. Totam iure nostrum dignissimos reprehenderit sapiente!</p>
                    <div className={styles.buttonContainer}>
                        <button className="button">Aceitar Desafio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guild