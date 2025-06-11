import React from 'react'
import styles from '../styles/Situation.module.css'

type SituationProps = {
    route: string;
    cargo: string;
    originCompany:string;
    destinationCompany:string;
    currentLocation:string;
    arriveTime:string;
    order: string;
}

function Situation({route,arriveTime,cargo,currentLocation,destinationCompany,originCompany,order}: SituationProps) {
  return (
    <div className={styles['Situation-wrapper']}>
    <div className={styles['top-wrapper']}>
    <div className={styles['route']}>{route}</div>
    <div className={styles['order']}>{order}</div>
    </div>
    <div className={styles['bottom-wrapper']}>
    <span className={styles['train-item']}><p>Empresa de origem:</p> {originCompany}</span>
    <span className={styles['train-item']}><p>Carga:</p> {cargo}</span>
    <span className={styles['train-item']}><p>Empresa de destino:</p> {destinationCompany}</span>
    <span className={styles['train-item']}><p>Posição Atual:</p> {currentLocation}</span>
    <span className={styles['train-item']}><p>Tempo de chegada:</p> {arriveTime}</span>
    </div>
    </div>
  )
}

export default Situation