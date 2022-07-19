import React from "react";
import styles from "./Guilds.module.css"

// components
import GuildCard from "../../components/GuildCard";

const Guilds = () => {
    return (
        <div className={styles.container}>
            <GuildCard/>
            <GuildCard/>
            <GuildCard/>
            <GuildCard/>
            <GuildCard/>
        </div>
    )
}
export default Guilds