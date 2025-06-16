import styles from '../styles/InspectionCardMaintenance.module.css'
type InspectioncardmaintenanceProps = {
    reasonMessage: string;
    actionMessage: string;
}


function Inspectioncardmaintenance({reasonMessage, actionMessage}: InspectioncardmaintenanceProps) {
  return (
    <>
    <div>
    <span className={styles['bottom-info-span']}>Motivo: <span className={styles['message']}>{reasonMessage}</span></span>
    <span className={styles['bottom-info-span']}>Ação: <span className={styles['message']}>{actionMessage}</span></span>
    </div>
    </>
  )
}

export default Inspectioncardmaintenance