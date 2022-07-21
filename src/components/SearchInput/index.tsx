import React from "react";
import styles from "./Searchinput.module.css"

import {BiSearchAlt} from "react-icons/bi"

const SearchInput = () => {
    return (
        <div className={styles.container}>
            <input 
                type="text"
                placeholder="Pesquisar"
            />
            <button className={styles.iconContainer}>
                <BiSearchAlt/>
            </button>
        </div>
    )
}
export default SearchInput