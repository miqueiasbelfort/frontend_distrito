import React, {FormEvent, useState, useEffect} from "react"
import "./CreatePost.css"

import Button from "../../components/Button"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"

const CreatePost = () => {

    const {id} = useParams()

    const [link, setLink] = useState<string>("")
    const [challenge, setChallenge] = useState<any>()
    const [text, setText] = useState<string>("")

    const [previewImage, setPreviewImage] = useState<any>("")
    const [image, setImage] = useState<any>()

    const [token] = useState(localStorage.getItem("token"))

    const handleFile = (e: any) => {
        const image = e.target.files[0]
        setImage(image)
        setPreviewImage(image)
    }

    useEffect(() => {

        api.get(`/challenge/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setChallenge(res.data)
        }).catch(err => {
            console.log(err.response.data.error)
        })

    }, [id])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        api.post(`/posts/create/${id}`, {
            text,
            link,
            postPhoto: image
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': "multipart/form-data"
            }
        }).catch(err => {
            console.log(err.response.data.error)
        })
    }

    return (
        <div className="createPostContainer">
            <div className="titleForm">
                <span></span>
                <h2>Criar Post</h2>
            </div>
            <form className="createForm containerDark" onSubmit={handleSubmit}>
                {previewImage && (
                    <img src={URL.createObjectURL(previewImage)} alt="img" className="imagePostPreview"/>
                )}
                <div className="formIni">
                    <label className="fileChoiceFom">
                        <input 
                            type="file"
                            onChange={handleFile}
                        />
                        <span>Foto</span>
                    </label>
                    <div className="selectionContainerPost">
                        <label className="selectionLabel">
                            <span>Desafios:</span>
                            <input 
                                type="text"
                                value={challenge?.title}
                            />
                        </label>
                        <label className="selectionLabel">
                            <span>De qual guilda é esse desafio:</span>
                            <input 
                                type="text"
                                value={challenge?.guildName}
                            />
                        </label>
                    </div>
                </div>
                <label className="selectionLabelInput">
                    <span>Link:</span>
                    <input 
                        type="text" 
                        placeholder="EX: http://desafio.com.br"
                        onChange={e => setLink(e.target.value)}
                        value={link || ""}
                    />
                </label>
                <label className="selectionLabelInput">
                    <span>Descreva o seu desafio e como foi cria-lo:</span>
                    <textarea 
                        placeholder="EX: Foi um desafio de nivel sênior onde tive que aprender muito sobre ...."
                        onChange={e => setText(e.target.value)}
                        value={text || ""}
                    ></textarea>
                </label>
               <div className="btnContainerForm">
                <Button type="submit" textBtn="Criar Post"/>
               </div>
            </form>
        </div>
    )
}

export default CreatePost