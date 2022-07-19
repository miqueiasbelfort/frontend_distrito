import React from "react";
import "./CommentCard.css"

// Components
import Imag from "../../assets/04.jpg"

const CommentCard = () => {
    return (
        <div className="commentCard containerDark">
            <div className="inforCommenterUser">
                <img src={Imag} alt="userImgComment" />
                <h3>Username</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquid accusantium totam id, consectetur dolor in distinctio sit iste eius ducimus fuga? Temporibus laudantium, delectus adipisci a eos voluptatum suscipit!</p>
        </div>
    )
}
export default CommentCard