import React, {useEffect, useState} from "react"
import "./Feed.css"
import {api} from "../../services/api"

// Components
import { Link } from "react-router-dom"
import CardPost from "../../components/CardPost"

import FeedImage from "../../assets/04.jpg"

const Feed = () => {

    const [posts, setPosts] = useState<any>([])

    useEffect(() => {

       api.get("/posts").then(res => setPosts(res.data))

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
                <div className="feedGuildInformations">
                    <div className="guildasInfo">
                        <img src="" alt="guilda Image" />
                        <h2>SCORPION</h2>
                    </div>
                    <span>250 checks</span>
                </div>
                <Link className="seeMoreGuildFeed" to="/feed/124545">Ver mais...</Link>
            </div>
        </div>
    )
}

export default Feed