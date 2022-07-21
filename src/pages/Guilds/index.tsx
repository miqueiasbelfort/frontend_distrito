import React, {useState, useEffect} from "react";
import styles from "./Guilds.module.css"

import {api} from "../../services/api"

// components
import GuildCard from "../../components/GuildCard";
import SearchInput from "../../components/SearchInput"

const Guilds = () => {

    const [token] = useState<any>(localStorage.getItem("token") || "")
    const [guilds, setGuilds] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        api.get("/guilds", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setGuilds(res.data)
        })
        setLoading(false)

    }, [])

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
                        <GuildCard
                            key={guild?._id}
                            image={guild?.guildPhoto}
                            name={guild?.guildname}
                            score={guild?.score}
                            desc={guild?.warcry}
                            link={guild?._id}
                        />
                    </>
                ))
            }
        </div>
    )
}
export default Guilds