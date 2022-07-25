import React, {useState, useEffect} from "react";
import styles from "./Guilds.module.css"

import {api} from "../../services/api"

// components
import GuildCard from "../../components/GuildCard";
import SearchInput from "../../components/SearchInput"

const Guilds = () => {

    const [token] = useState<any>(localStorage.getItem("token") || "")
    const UserName = localStorage.getItem("user")
    const [guilds, setGuilds] = useState([])
    const [user, setUser] = useState<any>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        api.get("/guilds", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setGuilds(res.data)
        })

        api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data)
        })

        setLoading(false)

    }, [])

    const handlePermission = (guild: string): void => {
        api.post(`/guilds/permission/${UserName}/guild/${guild}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => console.log(user)).catch(err => {
            console.log(err)
        })
    }

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <div className={styles.container}>
            <form>
                <SearchInput/>
            </form>

            {
                guilds && guilds.map((guild: any) => (
                    <>
                        {
                            user?.guild !== guild.guildname ? (
                                <GuildCard
                                    key={guild?._id}
                                    image={guild?.guildPhoto}
                                    name={guild?.guildname}
                                    score={guild?.score}
                                    desc={guild?.warcry}
                                    permission={() => handlePermission(guild?._id)}
                                    isGuildMaster={guild?.userName === user?.username}
                                />
                            ) : (
                                <GuildCard
                                    key={guild?._id}
                                    image={guild?.guildPhoto}
                                    name={guild?.guildname}
                                    score={guild?.score}
                                    desc={guild?.warcry}
                                    isMember={true}
                                    permission={() => {}}
                                />
                            )
                        }
                    </>
                ))
            }
        </div>
    )
}
export default Guilds