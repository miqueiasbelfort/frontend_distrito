import React from "react";
import "./GuildCard.css"

import IMG from "../../assets/04.jpg"
import { Link } from "react-router-dom";

const GuildCard = () => {
    return (
        <div className="guildCardContainer containerDark">
            <div className="informationOfGuildContainer">
                <img src={IMG} alt="guild image" />
                <div className="informationOfGuild">
                    <Link to="/guilds/12454787"><h2>Code_Win - <span className="scoreGuildCard">4520 socre</span></h2></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima similique ipsum cupiditate commodi dolor veniam ipsa nihil assumenda, natus accusantium, id, adipisci suscipit officia odio ipsam vel quae reiciendis nam.</p>
                </div>
            </div>
            <button className="button">Solicitar Entrada</button>
        </div>
    )
}
export default GuildCard