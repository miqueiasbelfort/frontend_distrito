import React from "react";
import "./CardPost.css"

interface IcardFeed {
  username: string,
  text: string,
  userPhoto: string,
  image: string,
  idPost: string,
  complete?: any[0],
  incomplete?: any[0]
}

// componets
import {HiOutlineBadgeCheck} from "react-icons/hi"
import {IoIosCloseCircleOutline} from "react-icons/io"
import { Link } from "react-router-dom"
import {uploads} from "../../utils/config"


const CardPost = ({username, text, userPhoto, image, idPost, complete, incomplete}: IcardFeed) => {
  return (
    <div className="cardFeed containerDark">
      <div className="feedUserInformations">
        <img src={`${uploads}/images/users/${userPhoto}`} alt="prifle" />
        <h3>{username}</h3>
      </div>
      <p>
        {text}
      </p>
      <img className="imgPost" src={`${uploads}/images/posts/${image}`} alt="Feed Image" />
      <div className="feedInformations">
        <div className="completeOrNot">
          {complete?.length >= incomplete?.length ? (
            <>
              <HiOutlineBadgeCheck className="complete"/>
            <span>Completo</span>
            </>
          ): (
            <>
              <IoIosCloseCircleOutline className="incomplete"/>
              <span>Incompleto</span>
            </>
          )}
        </div>
        <Link to={`/feed/${idPost}`}>Ver Mais</Link>
      </div>
    </div>
  );
};

export default CardPost;
