import React from 'react'
import styles from "./Button.module.css"

interface Props {
    textBtn: string
}

function Navbar({textBtn}: Props) {

  return (
    <button
        className={styles.button}
    >
        {textBtn}
    </button>
  )
}

export default Navbar