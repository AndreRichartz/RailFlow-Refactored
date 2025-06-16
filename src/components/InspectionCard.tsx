import React from 'react'
import styles from '../styles/InspectionCard.module.css'

type InspectioncardProps = {
    train: string;
    route: string;
    child?: React.ReactNode;
}

function Inspectioncard({train,route,child}: InspectioncardProps) {
  return (
    <>
    <div className={styles['Inspection-card-wrapper']}>
        <div className={styles['Inspection-card-top-info']}>
            <span className={styles['train']}>{train}</span>
            <span className={styles['route']}>Rota atual: {route}</span>
        </div>
        <div className={styles['Inspection-card-bottom-info']}>
           {/*  <Inspectioncardinspection
            dateMessage={dateMessage}
            reasonMessage={reasonMessage}/> */}
            {child}
        </div>
    </div>
    </>
  )
}

export default Inspectioncard