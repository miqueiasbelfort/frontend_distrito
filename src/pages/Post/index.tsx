import React, {useState, useEffect} from "react"
import styles from "./Post.module.css"

// components
import { AiFillLike, AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai"
import Button from "../../components/Button"
import CommentCard from "../../components/CommentCard"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { uploads } from "../../utils/config"

const Post = () => {

    const {id} = useParams()

    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isInComplete, setIsImComplete] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(true)
    const [token] = useState(localStorage.getItem("token"))

    const [post, setPost] = useState<any>()

    useEffect(() => {

        api.get(`/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setPost(res.data)
        }).catch(err => {
            console.log(err.response.data.error)
        })

        setLoading(false)

    }, [id])

    const handleLike = () => {
        setIsLiked(!isLiked)
    }
    const handleComplete = () => {
        setIsComplete(!isComplete)
        setIsImComplete(false)
    }
    const handleInComplete = () => {
        setIsImComplete(!isInComplete)
        setIsComplete(false)
    }

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <div className={styles.container}>
            <div className={styles.inforPostContainer}>
                <div className={styles.infoUserPost}>
                    <img src={`${uploads}/images/users/${post?.photoUser}`} alt={post?.userName}  className={styles.userPhotoOfPost}/>
                    <h2>{post?.userName}</h2>
                </div>
                <div className={styles.whereIsTheChallenge}>
                    <h3>{post?.challenge}</h3>
                    <div className={styles.guildInformationPost}>
                        <img src={`${uploads}/images/guilds/${post?.imageGuildChallenge}`} alt={post?.guildChallenge} />
                        <h2>{post?.guildChallenge}</h2>
                    </div>
                </div>
                <p className={styles.textOfPost}>{post?.text}</p>
                <a href={post?.link}>{post?.link}</a>
                <img src={`${uploads}/images/posts/${post?.postPhoto}`} alt={post?._id} className={styles.postImagePost}/>
                <div className={styles.actionsOfPost}>
                    <button 
                        className={isLiked ? styles.likeButtonActive : styles.likeButtonInActive}
                        onClick={handleLike}
                    > <AiFillLike/> Like - 2k</button>
                    <div className={styles.checkButtons}>
                        <button 
                            className={isComplete ? styles.completeButtonActive: styles.completeButtonInActive}
                            onClick={handleComplete}
                        > <AiFillCheckCircle/> Completo -  215</button>
                        <button 
                            className={isInComplete ? styles.incompleteButtonActive : styles.incompleteButtonInActive}
                            onClick={handleInComplete}
                        > <AiFillCloseCircle/> Incompleto - 25</button>
                    </div>
                </div>
            </div>

            <div className={styles.commentContainerPost}>
                <form className="commentForm">
                    <div className={styles.informationUserComment}>
                        <img src={`${uploads}/images/users/${post?.photoUser}`} alt="userImgComment" />
                        <span>{post?.userName}</span>
                    </div>
                    <input type="text" placeholder="Deixe um commentario!"/>
                    <div className={styles.btnContainer}>
                        <Button
                            type="submit"
                            textBtn="Comentar"
                        />
                    </div>
                </form>
                <div className={styles.commentsContainer}>
                    <CommentCard/>
                    <CommentCard/>
                    <CommentCard/>
                </div>
            </div>
        </div>
    )
}

export default Post