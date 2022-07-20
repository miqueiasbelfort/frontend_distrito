import React,{ useEffect, useState } from "react"
import "./Profile.css"
import Imag from "../../assets/04.jpg"

// utils
import {api} from "../../services/api"


const Profile = () => {
    
    const [token] = useState<any>(localStorage.getItem("token") || "")
    const [userLocal] = useState<any>(localStorage.getItem("user"))
    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any>()

    useEffect(() => {
        api.get(`/users/${userLocal}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data.user)
            setPosts(res.data.posts)
        })

    }, [token])

    const handleClick = () => {
        console.log(user)
    }

    return (
        <div className="profileConttainer">
            <div className="inforOfUserProfile">
                <div className="inforContainerProfile">
                    <img src={Imag} alt="userphoto" className="userPhotoProfile"/>
                    <div className="inforUserProfileContainer">
                        <h2 className="usernameProfile">user.username</h2>
                        <a className="linkProfile" href="{user.link}">user.link</a>
                        <p className="descProfile">user.bio</p>
                        <div className="guildInfoProfile">
                            <img src={Imag} alt="guildImage" />
                            <h2>CODE_WIN</h2>
                            <span>-</span>
                            <p className="scorePointsUser">178 Score</p>
                        </div>
                    </div>
                </div>

                <div className="followAnUnfollowNumbers">
                    <span>user.followings.length seguidores</span>
                    <span>-</span>
                    <span>user.followers.length seguindo</span>
                </div>
            </div>
            <button className="button" onClick={handleClick}>Seguir</button>
        
            <span className="line"></span>

            <h1>Publicações</h1>

            <div className="postsOfUserContainer">
                <div className="postsOfuser">
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                </div>
            </div>

        </div>
    )
}
export default Profile