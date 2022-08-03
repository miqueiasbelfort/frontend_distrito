import React, {FormEvent, useState} from "react";
import styles from "./Searchinput.module.css"

import {BiSearchAlt} from "react-icons/bi"
import { useNavigate } from "react-router-dom";

const SearchInput = () => {

    const navigate = useNavigate()

    const [query, setQuery] = useState<string>("")

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(query){
            navigate(`/guilds/search?q=${query}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className={styles.container}>
            <input 
                type="text"
                placeholder="Pesquisar"
                onChange={e => setQuery(e.target.value)}
                value={query || ""}
            />
            <button type="submit" className={styles.iconContainer}>
                <BiSearchAlt/>
            </button>
        </form>
    )
}
export default SearchInput