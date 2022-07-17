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
                        username="miqueias_belfort"
                        userPhoto="test.jpg"
                        text="loream"
                        image="test.jpg"
                    />
                ))}
                {posts.length === 0 && (
                    <div className="dontHavePosts">
                        <h1>NÃO HÁ POSTS</h1>
                        <Link to="/posts/create"><span>Criar Posts</span></Link>
                    </div>
                )}
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