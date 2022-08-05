import React from "react";
import "./CommentCard.css"

type Props = {
    image: string,
    username: string,
    text: string
}

// Components
import { uploads } from "../../utils/config";

const CommentCard = ({image, username, text}:Props) => {
    return (
        <div className="commentCard containerDark">
            <div className="inforCommenterUser">
                <img src={`${uploads}/images/users/${image}`} alt="userImgComment" />
                <h3>{username}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default CommentCard