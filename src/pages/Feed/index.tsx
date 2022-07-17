import React, {} from "react"
import "./Feed.css"

// componets
import {HiOutlineBadgeCheck} from "react-icons/hi"
import {IoIosCloseCircleOutline} from "react-icons/io"
import { Link } from "react-router-dom"

// Img test
import PerfilImage from "../../assets/me(1).jpg"
import FeedImage from "../../assets/04.jpg"

const Feed = () => {
    return (
        <div className="containerFeed">
            <div className="feed">
                <div className="cardFeed">
                    <div className="feedUserInformations">
                        <img src={PerfilImage} alt="prifle" />
                        <h3>Miqueias_Belfort</h3>
                    </div>
                    <img className="imgPost" src={FeedImage} alt="Feed Image" />
                    <div className="feedInformations">
                        <div className="completeOrNot">
                            <HiOutlineBadgeCheck/>
                            <span>Completo</span>
                        </div>
                        <Link to="/">
                            Ver Mais
                        </Link> 
                    </div>
                </div>
            </div>
            <div className="listOfBestguilds">
                <span>Melhores guildas do rank</span>
                <div className="feedGuildInformations">
                    <div className="guildasInfo">
                        <img src={FeedImage} alt="guilda Image" />
                        <h2>SCORPION</h2>
                    </div>
                    <span>250 checks</span>
                </div>
                <Link className="seeMoreGuildFeed" to="/feed">Ver mais...</Link>
            </div>
        </div>
    )
}

export default Feed