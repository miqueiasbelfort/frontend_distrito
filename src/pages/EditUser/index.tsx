import React, {useState, FormEvent, useEffect} from "react";
import styles from "./EditUser.module.css"

import { api } from "../../services/api";
import { uploads } from "../../utils/config";

// components
import Button from "../../components/Button"
import Img from "../../assets/04.jpg"

const EditUser = () => {

    const [token] = useState(localStorage.getItem("token"))
    const [userEditPassword, setUserEditPassowrd] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)

    const [file, setFile] = useState()
    const [username, setUsername] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [bio, setBio] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirPassword, setConfirPassword] = useState<string>("")

    const [user, setUser] = useState<any>([])

    useEffect(() => {

        api.post("/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setUser(res.data)
        })

    }, [])

    const changePasswordConfirm = () => {
        setUserEditPassowrd(false)
    }
    const fileOnChange = (e: FormEvent<HTMLFormElement>) => {
        setFile(e.target.files[0])
    }   

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        api.patch("/users/edit", {
            file,
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
                        <img src={`${uploads}/images/${user?.userPhoto}`} alt="" />
                        <input type="file" onChange={fileOnChange}/>
                    </label>
                </div>
                <label htmlFor="username">Nome de usuário:</label>
                <input 
                    type="text"
                    placeholder="Nome de usuário"
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                    value={username || ""}
                />
                <label htmlFor="link">Link:</label>
                <input 
                    type="text"
                    placeholder="Link"
                    id="link"
                    onChange={e => setLink(e.target.value)}
                    value={link || ""}
                 />

                <label htmlFor="bio">Sua Biografia:</label>
                <textarea
                    placeholder="Sua Biografia"
                    id="bio"
                    onChange={e => setBio(e.target.value)}
                    value={bio || ""}
                ></textarea>
                {
                    userEditPassword ? (
                        <div className={styles.editPasswordContainer}>
                            <span onClick={changePasswordConfirm}>Editar Senha</span>
                        </div>
                    ) : (
                        <>
                            <label htmlFor="password">Nova Senha:</label>
                            <input 
                                type="text"
                                placeholder="Nova Senha"
                                onChange={e => setPassword(e.target.value)}
                                value={user?.password || ""}
                            />

                            <label htmlFor="confirmPassowrd">Confirma Nova Senha:</label>
                            <input 
                                type="text"
                                placeholder="Confirma Nova Senha"
                                onChange={e => setConfirPassword(e.target.value)}
                                value={confirPassword || ""}
                            />
                        </>
                    )
                }
                <Button
                    type="submit"
                    textBtn="Editar"
                />
            </form>
        </div>
    )
}
export default EditUser