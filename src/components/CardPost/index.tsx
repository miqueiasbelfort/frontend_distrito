import React from "react";
import "./CardPost.css"

interface IcardFeed {
  username: string,
  text: string,
  userPhoto: string,
  image: string
}

// componets
import {HiOutlineBadgeCheck} from "react-icons/hi"
import {IoIosCloseCircleOutline} from "react-icons/io"
import { Link } from "react-router-dom"
import {uploads} from "../../utils/config"


const CardPost = ({username, text, userPhoto, image}: IcardFeed) => {
  return (
    <div className="cardFeed">
      <div className="feedUserInformations">
        <img src={userPhoto} alt="prifle" />
        <h3>{username}</h3>
      </div>
      <p>
        {text}
      </p>
      <img className="imgPost" src={image} alt="Feed Image" />
      <div className="feedInformations">
        <div className="completeOrNot">
          <HiOutlineBadgeCheck />
          <span>Completo</span>
        </div>
        <Link to="/">Ver Mais</Link>
      </div>
    </div>
  );
};

export default CardPost;
