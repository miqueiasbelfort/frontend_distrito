import React, {useState, useEffect} from "react";
import styles from "./Notifications.module.css";

import {AiOutlineClose} from "react-icons/ai"
import {api} from "../../services/api"

interface Props {
    active: any,
    guildid?: string,
    userPermission?: any[]
}

const Notifications = ({active, guildid, userPermission}: Props) => {

    const [token] = useState(localStorage.getItem("token"))

    const handlePermission = (use: string) => {
        
        api.post(`/guilds/permission/${use}/guild/${guildid}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.log(err.response.data.error)
        })
        
        api.patch(`/guilds/permission/refuse/${guildid}/user/${use}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.log(err.response.data.error)
        })

        active(false)
    }

    const handleRefuse = (use: string) => {
        api.patch(`/guilds/permission/refuse/${guildid}/user/${use}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.log(err.response.data.error)
        })
        active(false)
    }


  return (
    <div className={styles.container}>
      <div className={`${styles.notiContainer} containerDark`}>
        <div className={styles.containerClose}>
            <AiOutlineClose
                onClick={() => active(false)}
            />
        </div>
        <ul> 
            {
                userPermission?.map(use => (
                    <li>
                        <div className={styles.user}>
                            <h2>{use}</h2>
                            <span>Quer fazer parte da sua guilda!</span>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button 
                                className={`${styles.button} ${styles.refuse}`}
                                onClick={() => handleRefuse(use)}
                            >
                                Recusar
                            </button>
                            <button 
                                className={styles.button}
                                onClick={() => handlePermission(use)}
                            >
                                Permitir
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
