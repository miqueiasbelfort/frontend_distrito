import React, {useState, useEffect} from "react";
import styles from "./Guild.module.css"

import {IoIosFlag} from "react-icons/io"
import {TbNotification} from "react-icons/tb"
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { uploads } from "../../utils/config";
import Notifications from "../../components/Notifications";

const Guild = () => {

    const [token] = useState<any>(localStorage.getItem("token") || "")
    const {guildname} = useParams()

    const [guild, setGuild] = useState<any>([])
    const [membersLenght, setMembersLength] = useState([])

    const [user, setUser] = useState<any>()

    const [challenges, setChallenges] = useState<any>([])

    const [loading, setLoading] = useState<boolean>(true)

    // logic
    const [notifications, setNotifications] = useState<boolean>(false)

    useEffect(() => {

        (async function(){
            await api.get(`/guilds/${guildname}`, {headers: {Authorization: `Bearer ${token}`}}).then(res => setGuild(res.data))

            await api.get("/users", {headers: {Authorization: `Bearer ${token}`}}).then(res => setUser(res.data))

            await api.get(`/guilds/members/${guildname}`, {headers: {Authorization: `Bearer ${token}`}}).then(res => setMembersLength(res.data))

            await api.get(`/challenge/guild/${guildname}`, {headers: {Authorization: `Bearer ${token}`}}).then(res => setChallenges(res.data))
        })()

        setLoading(false)

    }, [guildname])

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <>
            {
                notifications && (
                    <div className={styles.notificationsContainer}>
                        <Notifications
                            active={setNotifications}
                            guildid={guild?._id}
                            userPermission={guild?.permissionToEnter}
                        />
                    </div>
                )
            }
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
                        {user?.username === guild?.userName && (
                            <div className={styles.linksGuildsAdmin}>
                                <Link className={styles.linkGuild} to={`/guilds/edit/${guild?.guildname}`}>Editar Guilda</Link>
                                <span 
                                    onClick={() => setNotifications(!notifications)}
                                    className={styles.notificaButton}
                                    style={guild?.permissionToEnter?.length >= 1 ? {color: "#039409"} : {color: "gray"}}
                                ><TbNotification/></span>
                            </div>
                        )} 
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
                                        <Link to={`/profile/${member?.Username}`}>
                                            <h3>{member?.Username}</h3>
                                        </Link>
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
                    {user?.username === guild?.userName && <Link className={styles.linkGuild} to={`/challenges/create/${guild?._id}`}>Criar Desafios</Link>} 
                    {
                        challenges.map((challenge: any) => (
                            <div className={styles.challenge}>
                                <h2>{challenge?.title}</h2>
                                <p>{challenge?.desc}</p>
                                <div className={styles.buttonContainer}>
                                    <Link to={`/create/post/${challenge?._id}`} className="button">Aceitar Desafio</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Guild