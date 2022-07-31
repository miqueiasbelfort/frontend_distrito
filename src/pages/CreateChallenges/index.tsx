import React,{useState, useEffect, FormEvent} from "react";
import styles from "./CreateChallenges.module.css"

import Button from "../../components/Button"
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

const CreateChallenges = () => {

    const {id} = useParams()

    const [token] = useState(localStorage.getItem("token"))

    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [score, setScore] = useState<number | string>("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        api.post(`/challenge/create/${id}`, {
            title,
            link,
            desc,
            score
        },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.log(err.response.data.error)
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Criar Desafio</h2>
            </div>
            <form className={`${styles.formContainer} containerDark`} onSubmit={handleSubmit}>
                <label>
                    <p>Título:</p>
                    <input 
                        type="text"
                        placeholder="EX: Criar uma aplicaçõa full stack com TypeScript."
                        onChange={e => setTitle(e.target.value)}
                        value={title || ""}
                    />
                </label>
                <div className={styles.linkAndScore}>
                    <label>
                        <p>Link:</p>
                        <input 
                            type="text"
                            placeholder="EX: http://github.com/meunome/meudesafio"
                            onChange={e => setLink(e.target.value)}
                            value={link || ""}
                        />
                    </label>
                    <label>
                        <p>Score:</p>
                        <input 
                            type="number"
                            placeholder="EX: 25"
                            onChange={e => setScore(e.target.value)}
                            value={score || ""}
                        />
                    </label>
                </div>
                <label>
                    <p>Descrição:</p>
                    <textarea
                        placeholder="Descreva aqui seu desafio!"
                        onChange={e => setDesc(e.target.value)}
                        value={desc || ""}
                    >

                    </textarea>
                </label>
                <Button
                    type="submit"
                    textBtn="Criar Desafio"
                />
            </form>
        </div>
    )
}
export default CreateChallenges