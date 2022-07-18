import React, {useState, useEffect, FormEvent} from "react"
import "./CreateGuild.css"

import Button from "../../components/Button"

const CreateGuild = () => {

    const [guildName, setGuildName] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [imgPreview, setImagePreview] = useState<any>("")

    const handleFile = (e: any) => {
        const image = e.target.files[0]
        setImagePreview(image)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({
            guildName,
            link,
            desc,
            imgPreview
        })
    }

    return (
        <div className="createGuildContainer">
            <div className="titleForm">
                <span></span>
                <h2>Criar uam guilda</h2>
            </div>
            <form onSubmit={handleSubmit} className="createForm containerDark">
                <div className="startPartFormGuild">

                    <div className="fileGuild">
                        <div className="imgPreviewGuild">
                            {imgPreview && (
                                <img src={URL.createObjectURL(imgPreview)} alt="" />
                            )}
                        </div>
                        <label className="fileContainerGuildChoice">
                            <span>Escolher IMG</span>
                            <input type="file" onChange={handleFile}/>
                        </label>
                    </div>
                    <div className="guildNameAndLinkContainer">
                        <label className="guildNameAndLink">
                            <span>Nome da guilda:</span>
                            <input 
                                type="text"
                                placeholder="EX: Code_Win"
                                onChange={e => setGuildName(e.target.value)}
                            />
                        </label>
                        <label className="guildNameAndLink">
                            <span>Link:</span>
                            <input 
                                type="text"
                                placeholder="EX: http://grupodaguilda.com.br"
                                onChange={e => setLink(e.target.value)}
                            />
                        </label>
                    </div>

                </div>
                <label className="guildFormDescContainer">
                    <span>Descrição:</span>
                    <textarea 
                        placeholder="EX: Guilda focado no desenvolvimeto back-end"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </label>
                <div className="btnContainerForm">
                    <Button
                        type="submit"
                        textBtn="Criar Guilda"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateGuild