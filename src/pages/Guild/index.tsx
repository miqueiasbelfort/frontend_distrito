import React, {useState, useEffect} from "react";
import styles from "./Guild.module.css"

import {IoIosFlag} from "react-icons/io"
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { uploads } from "../../utils/config";

const Guild = () => {

    const [token] = useState<any>(localStorage.getItem("token") || "")
    const {guildname} = useParams()

    const [guild, setGuild] = useState<any>([])
    const [membersLenght, setMembersLength] = useState([])

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        api.get(`/guilds/${guildname}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setGuild(res.data)
        })

        api.get(`/guilds/members/${guild?.guildname}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setMembersLength(res.data)
        })

        setLoading(false)

    }, [guildname])

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
                {
                    membersLenght.map((member: any) => (
                        <div key={member?._id} className={`${styles.userCard}`}>
                            <img src={`${uploads}/images/users/${member?.UserPhoto}`} alt={member?.Username} />
                            <div className={styles.infouser}>
                                <div className={styles.isGuildMasterAndName}>
                                    <h3>{member?.Username}</h3>
                                    {member?.isGuildMaster && <IoIosFlag/>}
                                </div>
                                <span>{member?.userScore} - score</span>
                            </div>
                        </div>
                    ))
                }
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