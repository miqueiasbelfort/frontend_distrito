import React, {FormEvent, useState, useEffect} from "react"
import "./CreatePost.css"

import Image from "../../assets/04.jpg"
import Button from "../../components/Button"


const CreatePost = () => {

    const [link, setLink] = useState<string>("")
    const [challenge, setChallenge] = useState<string>("")
    const [guild, setGuild] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [previewImage, setPreviewImage] = useState<any>("")

    const handleFile = (e: any) => {
        const image = e.target.files[0]
        setPreviewImage(image)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // API
        console.log({
            challenge,
            guild,
            link,
            text,
            previewImage
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
                            <select onChange={(e) => setChallenge(e.target.value)}>
                                <option value="12457878">Criar um site full stack</option>
                                <option value="12457878">Criar um site full stack</option>
                                <option value="12457878">Criar um site full stack</option>
                                <option value="12457878">Criar um site full stack</option>
                                <option value="12457878">Criar um site full stack</option>
                            </select>
                        </label>
                        <label className="selectionLabel">
                            <span>De qual guilda é esse desafio:</span>
                            <select onChange={(e) => setGuild(e.target.value)}>
                                <option value="12457878">Scorpion</option>
                                <option value="12457878">Scorpion</option>
                                <option value="12457878">Code Junior</option>
                                <option value="12457878">Scorpion</option>
                                <option value="12457878">Scorpion</option>
                            </select>
                        </label>
                    </div>
                </div>
                <label className="selectionLabelInput">
                    <span>Link:</span>
                    <input 
                        type="text" 
                        placeholder="EX: http://desafio.com.br"
                        onChange={e => setLink(e.target.value)}
                    />
                </label>
                <label className="selectionLabelInput">
                    <span>Descreva o seu desafio e como foi cria-lo:</span>
                    <textarea 
                        placeholder="EX: Foi um desafio de nivel sênior onde tive que aprender muito sobre ...."
                        onChange={e => setText(e.target.value)}
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