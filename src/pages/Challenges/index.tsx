import React, { useState, useEffect } from "react";
import styles from "./Challenges.module.css";

import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { uploads } from "../../utils/config";

const Challenges = () => {
  const [token] = useState(localStorage.getItem("token"));
  const [challenges, setChallenges] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    api
      .get("challenge", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setChallenges(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
      setLoading(false)
  }, []);

  if(loading){
    return <h1>Carregando...</h1>
  }

  return (
    <div className={styles.container}>
      {challenges.length >= 1 ? challenges.map((challenge: any) => (

        <div className={`${styles.chellengesContainer} containerDark`}>
          <div className={styles.guildInfo}>
            <img src={`${uploads}/images/guilds/${challenge?.guildPhoto}`} alt="" />
            <div className={styles.guilname}>
              <Link to={`/guilds/${challenge?.guildName}`}><h2>{challenge?.guildName}</h2></Link>
            </div>
          </div>
          <div className={styles.challengeInformation}>
            <h2>{challenge?.title}</h2>
            <p>
              {challenge?.desc}
            </p>
          </div>
          <a href={challenge?.link}>{challenge?.link}</a>
          <p>
            Você ganha <span className={styles.score}>{challenge?.score} Score</span> por esse
            desafio!
          </p>
          <div className={styles.buttonContainer}>
            <Link to={`/create/post/${challenge?._id}`} className="button">Aceitar desafio</Link>
          </div>
        </div>

      )) : (
        <>
          <h1>Não há desafios!</h1>
          <span>Não perca tempo e crie sua guilda para criar seus desafios: <Link to="/create/guild" style={{color: "green", textDecoration: "underline"}}>Crair Guilda</Link></span>
        </>
      )}
    </div>
  );
};

export default Challenges;
