import React from "react";
import "./GuildCard.css"

import {uploads} from "../../utils/config"

interface Props {
    image: string,
    name: string,
    score: number,
    desc: string,
    link?: string
}

import { Link } from "react-router-dom";

const GuildCard = ({image, name, score, desc, link}:Props) => {
    return (
        <div className="guildCardContainer containerDark">
            <div className="informationOfGuildContainer">
                <img src={`${uploads}/images/guilds/${image}`} alt={name}/>
                <div className="informationOfGuild">
                    <Link to={`/guilds/${link}`}><h2>{name} - <span className="scoreGuildCard">{score} score</span></h2></Link>
                    <p>{desc}</p>
                </div>
            </div>
            <button className="button">Solicitar Entrada</button>
        </div>
    )
}
export default GuildCard