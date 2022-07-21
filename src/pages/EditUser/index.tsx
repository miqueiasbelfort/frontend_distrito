import React, {useState, FormEvent, useEffect, useContext} from "react";
import styles from "./EditUser.module.css"

import { api } from "../../services/api";
import { uploads } from "../../utils/config";
import {AuthContext} from "../../context/auth"

// components
import Button from "../../components/Button"

const EditUser = () => {

    const { setUsername: SetUserName, username: userName } = useContext(AuthContext)

    const [token] = useState(localStorage.getItem("token"))
    const [loading, setLoading] = useState<boolean>(true)

    const [file, setFile] = useState()
    const [username, setUsername] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [bio, setBio] = useState<string>("")

    const [user, setUser] = useState<any>([])

    useEffect(() => {


        api.get(`/users/${localStorage.getItem("user")}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data.user)
            console.log(res.data)
        })

        setLoading(false)

    }, [])

    const fileOnChange = (e: FormEvent<HTMLFormElement>): void => {
        setFile(e.target.files[0])
    }   

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        api.patch("/users/edit", {
            userPhoto: file,
            username,
            link,
            bio,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': "multipart/form-data"
            }
        }).then(res => {
            localStorage.setItem("user", username.toLowerCase())
        })

        SetUserName(username)
    }

    if(loading) {
        return <h1>Carregando...</h1>
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span></span>
                <h2>Editar Perfil</h2>
            </div>
            <form onSubmit={handleSubmit} className={`${styles.formContainer} containerDark`}>
                <div className={styles.imageContainerFile}>
                    <label className={styles.labelContainer}>
                        <img src={`${uploads}/images/users/${user?.userPhoto}`} alt={user?.usename} />
                        <input type="file" onChange={fileOnChange}/>
                    </label>
                </div>
                <label htmlFor="username">Nome de usuário:</label>
                <input 
                    type="text"
                    placeholder="Nome de usuário"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    value={user?.username || ""}
                />
                <label htmlFor="link">Link:</label>
                <input 
                    type="text"
                    placeholder="Link"
                    id="link"
                    onChange={e => setLink(e.target.value)}
                    value={user?.link || ""}
                 />

                <label htmlFor="bio">Sua Biografia:</label>
                <textarea
                    placeholder="Sua Biografia"
                    id="bio"
                    onChange={e => setBio(e.target.value)}
                    value={user?.bio || ""}
                ></textarea>
                <Button
                    type="submit"
                    textBtn="Editar"
                />
            </form>
        </div>
    )
}
export default EditUser