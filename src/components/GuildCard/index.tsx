import React from "react";
import "./GuildCard.css"

import {uploads} from "../../utils/config"

interface Props {
    image?: string,
    name?: string,
    score?: number,
    desc?: string,
    link?: string,
    permission?: () => void,
    isMember?: boolean
}

import { Link } from "react-router-dom";

const GuildCard = ({image, name, score, desc, link, permission, isMember}:Props) => {
    return (
        <div className="guildCardContainer containerDark">
            <div className="informationOfGuildContainer">
                <img src={`${uploads}/images/guilds/${image}`} alt={name}/>
                <div className="informationOfGuild">
                    <Link to={`/guilds/${link}`}><h2>{name} - <span className="scoreGuildCard">{score} score</span></h2></Link>
                    <p>{desc}</p>
                </div>
            </div>
            {isMember ? (
                <div className="userIsMember">
                    <h3>Você já faz parte da guilda!</h3>
                </div>
            ) : (
                <button 
                    className="button"
                    onClick={permission}
                >
                    Solicitar Entrada
                </button>
            )}
        </div>
    )
}
export default GuildCard