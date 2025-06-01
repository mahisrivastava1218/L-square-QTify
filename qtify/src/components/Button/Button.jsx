import React from "react";
import styles from "../Button/Button.module.css"
export default function Button({children}) {
  return(
    <>
        <button className={styles.button}>{children}</button>
    </>
  )
}
