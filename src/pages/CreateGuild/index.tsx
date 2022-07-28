import React, {useState, useEffect, FormEvent} from "react"
import "./CreateGuild.css"

import Button from "../../components/Button"
import { useParams } from "react-router-dom"

import { api } from "../../services/api"
import { uploads } from "../../utils/config"

const CreateGuild = () => {

    const {id} = useParams()

    const token = localStorage.getItem("token")
    const [guildName, setGuildName] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [warcry, setWarCry] = useState<string>("")
    const [image, setImage] = useState<any>()
    const [imgPreview, setImagePreview] = useState<any>("")

    const handleFile = (e: any) => {
        const image = e.target.files[0]
        setImage(image)
        setImagePreview(image)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        api.post("/guilds/create", {
            guildname: guildName,
            description: desc,
            warcry,
            guildPhoto: image,
            link,
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
                <label className="guildNameAndLink">
                    <span>Grito de guerra:</span>
                    <input 
                        type="text"
                        placeholder="EX: Mudar o mundo com Programação!"
                        onChange={e => setWarCry(e.target.value)}
                    />
                </label>
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