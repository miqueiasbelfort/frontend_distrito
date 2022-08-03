import React,{ useEffect, useState } from "react"
import "./Profile.css"

// components
import {api} from "../../services/api"
import { useParams, Link } from "react-router-dom"

//utils
import {uploads} from "../../utils/config"

const Profile = () => {
    
    const [token] = useState<any>(localStorage.getItem("token") || "")

    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any>([])
    const [userTokenName, setUserTokenName] = useState<any>()

    const {username} = useParams()
    const userLocalStorege = localStorage.getItem("user")

    const [loading, setLoading] = useState<boolean>(true)
    const [isFollow, setIsFollow] = useState<boolean>(false)

    useEffect(() => {
        
        api.get(`/users/${username}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data.user)
            setPosts(res.data.posts)
        })

        api.get(`/users`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setUserTokenName(res.data)
        })

        setLoading(false)

    }, [token, username])

    const handleClick = () => {
        console.log(user)
        api.put(`/users/${user?.username}/follow`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => setIsFollow(true)).catch(err => console.log(err.response.data.error))
    }

    if(loading){
        return <h1>Carregando...</h1>
    }


    return (
        <div className="profileConttainer">
            <div className="inforOfUserProfile">
                <div className="inforContainerProfile">
                    <img src={`${uploads}/images/users/${user?.userPhoto}`} alt={user?.username} className="userPhotoProfile"/>
                    <div className="inforUserProfileContainer">
                        <h2 className="usernameProfile">{user?.username}</h2>
                        <a className="linkProfile" href={user?.link}>{user?.link}</a>
                        <p className="descProfile">{user?.bio}</p>
                        <div className="guildInfoProfile">
                            {user?.guild && (
                                <>
                                    <img src={`${uploads}/images/guilds/${user?.guildPhoto}`} alt={user?.guild} />
                                    <Link to={`/guilds/${user?.guild}`}><h2>{user?.guild}</h2></Link>
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
            {user?.username !== userLocalStorege ? (
                <>
                   <button className="button" onClick={handleClick}>
                    { 
                        !user?.followings.includes(userTokenName._id) ? "Deixar de seguir" : "Seguir"
                    }
                   </button>
                </>
            ) : (
                <>
                    <span><Link to="/profile/edit">Editar Perfil</Link></span>
                </>
            )}
        
            <span className="line"></span>

            <h1>Publicações</h1>

            <div className="postsOfUserContainer">
                <div className="postsOfuser">
                    {posts.length >= 1 ? posts.map((post: any) => (
                        <Link to={`/feed/${post?._id}`}>
                            <img src={`${uploads}/images/posts/${post?.postPhoto}`} alt={post?._id} className="PostOfUser"/>
                        </Link>
                    )) : (
                        <div className="dontHavePostsContainer">
                            <h1>Você ainda não tem publicações</h1>
                            <Link to="/challenges">Vamos para o primeiro desafio!</Link>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
export default Profile