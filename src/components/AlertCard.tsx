import React from 'react'
import styles from "../styles/AlertCard.module.css";
type AlertcardProps = {
    message: string;
}

function Alertcard({message}: AlertcardProps) {
  return (
    <>
    <div className={styles['alert-wrapper']}>
    <div className={styles['alert-card']}>{message}</div>
    </div>
    </>
  )
}

export default Alertcard