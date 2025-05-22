import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "../Logo/Logo.module.css"
export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} className={styles.logo}/>;
}
