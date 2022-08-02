import React, {useEffect, useState} from "react"
import "./Feed.css"
import {api} from "../../services/api"

// Components
import { Link } from "react-router-dom"
import CardPost from "../../components/CardPost"
import { uploads } from "../../utils/config"


const Feed = () => {

    const [posts, setPosts] = useState<any>([])
    const [rank, setRank] = useState<any>([])

    useEffect(() => {

       api.get("/posts").then(res => setPosts(res.data))
       api.get("/guilds/rank").then(res => setRank(res.data))

    }, [])

    return (
        <div className="containerFeed">
            <div className="feed">
                {posts && posts.map((post: any) => (
                    <CardPost
                        username={post?.userName}
                        userPhoto={post?.photoUser}
                        text={post?.text}
                        image={post?.postPhoto}
                        idPost={post?._id}
                    />
                ))}
                {posts.length === 0 && (
                    <div className="dontHavePosts">
                        <h1>NÃO HÁ POSTS</h1>
                        <Link to="/challenges"><span>Criar Posts</span></Link>
                    </div>
                )}
            </div>
            <div className="listOfBestguilds containerDark">
                <span>Melhores guildas do rank</span>
                {
                    rank.map((guild: any) => (
                        <div className="feedGuildInformations">
                            <div className="guildasInfo">
                                <img src={`${uploads}/images/guilds/${guild?.guildPhoto}`} alt="guilda Image" />
                                <Link to={`/guilds/${guild?.guildname}`}><h2>{guild?.guildname}</h2></Link>
                            </div>
                            <span>{guild?.score} score</span>
                        </div>
                    ))
                }
                <Link className="seeMoreGuildFeed" to="/guilds">Ver mais...</Link>
            </div>
        </div>
    )
}

export default Feed