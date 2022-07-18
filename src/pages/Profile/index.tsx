import React from "react"
import "./Profile.css"
import Imag from "../../assets/04.jpg"

const Profile = () => {
    return (
        <div className="profileConttainer">
            <div className="inforOfUserProfile">
                <div className="inforContainerProfile">
                    <img src={Imag} alt="userphoto" className="userPhotoProfile"/>
                    <div className="inforUserProfileContainer">
                        <h2 className="usernameProfile">Username</h2>
                        <a className="linkProfile" href="">http://miqueiasbelofort.netfly.app</a>
                        <p className="descProfile">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia vero impedit. Dolore cum dolor dolorem eveniet libero sunt, atque excepturi possimus provident ex, recusandae voluptatem minus labore unde cumque?</p>
                        <div className="guildInfoProfile">
                            <img src={Imag} alt="guildImage" />
                            <h2>CODE_WIN</h2>
                            <span>-</span>
                            <p className="scorePointsUser">178 Score</p>
                        </div>
                    </div>
                </div>

                <div className="followAnUnfollowNumbers">
                    <span>124 seguidores</span>
                    <span>-</span>
                    <span>215 seguindo</span>
                </div>
            </div>
            <button className="button">Seguir</button>
        
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
                    <img src={Imag} alt="imagepost" className="PostOfUser"/>
                </div>
            </div>

        </div>
    )
}
export default Profile