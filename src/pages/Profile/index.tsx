import React,{ useEffect, useState } from "react"
import "./Profile.css"
import Imag from "../../assets/04.jpg"

// utils
import {api} from "../../services/api"
import { useParams } from "react-router-dom"


const Profile = () => {
    
    const [token] = useState<any>(localStorage.getItem("token") || "")
    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any>()

    const {username} = useParams()
    const userLocalStorege = localStorage.getItem("user")

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        
        api.get(`/users/${username}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data.user)
            setPosts(res.data.posts)
        })

        setLoading(false)
    }, [token])

    const handleClick = () => {
        console.log(user)
    }

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <div className="profileConttainer">
            <div className="inforOfUserProfile">
                <div className="inforContainerProfile">
                    <img src={Imag} alt="userphoto" className="userPhotoProfile"/>
                    <div className="inforUserProfileContainer">
                        <h2 className="usernameProfile">{user?.username}</h2>
                        <a className="linkProfile" href={user?.link}>{user?.link}</a>
                        <p className="descProfile">{user?.bio}</p>
                        <div className="guildInfoProfile">
                            {user?.guild && (
                                <>
                                    <img src={Imag} alt="guildImage" />
                                    <h2>CODE_WIN</h2>
                                    <span>-</span>
                                </>
                            )}
                            <p className="scorePointsUser">{user?.score} Score</p>
                        </div>
                    </div>
                </div>

                <div className="followAnUnfollowNumbers">
                    <span>{user?.followings.length} seguidores</span>
                    <span>-</span>
                    <span>{user?.followers.length} seguindo</span>
                </div>
            </div>
            {user?.username !== userLocalStorege && <button className="button" onClick={handleClick}>Seguir</button>}
        
            <span className="line"></span>

            <h1>Publicações</h1>

            <div className="postsOfUserContainer">
                <div className="postsOfuser">
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                </div>
            </div>

        </div>
    )
}
export default Profile