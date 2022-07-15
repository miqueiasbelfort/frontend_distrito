import React from 'react'
import styles from "./Button.module.css"

interface Props {
    textBtn: string,
    type: any
}

function Navbar({textBtn, type}: Props) {

  return (
    <button
        type={type}
        className={styles.button}
    >
        {textBtn}
    </button>
  )
}

export default Navbar