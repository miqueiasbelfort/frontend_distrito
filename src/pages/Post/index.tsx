import React, {useState} from "react"
import styles from "./Post.module.css"

// components
import ImageUser from "../../assets/04.jpg"
import { AiFillLike, AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai"
import Button from "../../components/Button"
import CommentCard from "../../components/CommentCard"

const Post = () => {

    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isInComplete, setIsImComplete] = useState<boolean>(false)

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

    return (
        <div className={styles.container}>
            <div className={styles.inforPostContainer}>
                <div className={styles.infoUserPost}>
                    <img src={ImageUser} alt="userphoto"  className={styles.userPhotoOfPost}/>
                    <h2>Username</h2>
                </div>
                <div className={styles.whereIsTheChallenge}>
                    <h3>Crair uma aplicação full stack</h3>
                    <div className={styles.guildInformationPost}>
                        <img src={ImageUser} alt="guild img" />
                        <h2>CODE_WIN</h2>
                    </div>
                </div>
                <p className={styles.textOfPost}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi provident nobis quis! Molestiae est deserunt nostrum, eaque eveniet exercitationem quidem at, similique totam blanditiis, sint minima atque in ad doloribus.</p>
                <a href="">http://miqueiasbelfort.netlify.app/</a>
                <img src={ImageUser} alt="post img" className={styles.postImagePost}/>
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
                        <img src={ImageUser} alt="userImgComment" />
                        <span>Username</span>
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