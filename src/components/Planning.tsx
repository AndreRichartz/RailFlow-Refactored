import React from 'react'
import styles from "../styles/Planning.module.css"

type PlanningProps = {
    origin: string;
    destination:string;
}

function Planning({origin, destination}: PlanningProps) {
  return (
    <div className={styles['planning-wrapper']}>
        <div className={styles['top-wrapper']}>
            <div className={styles['select']}>
        <select name="" id="" className={styles['order']}>
            <option value="">Escolha...</option>
            <option value="">Carvão</option>
            <option value="">Madeira</option>
            <option value="">Metal</option>
            <option value="">Papel</option>
            <option value="">Plástico</option>
        </select>
        </div>
        </div>
        <div className={styles['bottom-wrapper']}>
            <div className={styles['bottom-left-wrapper']}>
                <span><p>Local de Origem:</p>{origin}</span>
                <div className={styles['select']}>
                <select name="" id="" className={styles['trains']}>
                <option value="">Escolha...</option>
                    <option value="">8756</option>
                    <option value="">8625</option>
                    <option value="">8754</option>
                    <option value="">8253</option>
                    <option value="">8152</option>
                    <option value="">8751</option>
                    <option value="">9912</option>
                </select>
                </div>
            </div>
            <div className={styles['bottom-right-wrapper']}>
            <span><p>Local de Origem:</p>{destination}</span>
            <div className={styles['select']}>
                <select name="" id="" className={styles['routes']}>
                <option value="">Escolha...</option>
                    <option value="">1253</option>
                    <option value="">1625</option>
                    <option value="">1754</option>
                    <option value="">1253</option>
                    <option value="">1152</option>
                    <option value="">1751</option>
                    <option value="">1912</option>
                </select>
                </div>
            </div>
        </div>
        <button type="submit">Finalizar</button>
    </div>
  )
}

export default Planning