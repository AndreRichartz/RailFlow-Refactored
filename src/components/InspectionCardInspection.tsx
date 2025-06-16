import styles from '../styles/InspectionCardInspection.module.css'
type InspectioncardinspectionProps = {
    dateMessage: string;
    reasonMessage: string;
}


function Inspectioncardinspection({dateMessage, reasonMessage}: InspectioncardinspectionProps) {
  return (
    <>
    <div >
    <span className={styles['bottom-info-span']}>Data da inspeção: <span className={styles['message']}>{dateMessage}</span></span>
    <span className={styles['bottom-info-span']}>Motivo: <span className={styles['message']}>{reasonMessage}</span></span>
    </div>
    </>
    
  )
}

export default Inspectioncardinspection