import styles from '../styles/status.module.css';

type StatusProps = {
  train: string;
  route: string;
  line: string;
  order: string;
  arriveTime: string;
  movementStatus: string;
};

function Status({ train, route, line, order, arriveTime, movementStatus }: StatusProps) {
  return (
    <div className={styles['status-status-container']}>
      <div className={styles['status-train-info-container']}>
        <div className={styles['status-train']}>{train}</div>
        <div className={styles['status-route']}>Rota Atual: {route}</div>
        <div className={styles['status-order-line-container']}>
          <div className={styles['status-order']}>{order}</div>
          <div className={styles['status-line']}>{line}</div>
        </div>
      </div>
      <div className={styles['status-arrive-time-container']}>
        <span className={styles['status-arrive-time']}>
          Horário previsto de chegada: {arriveTime}
        </span>
      </div>
      <div className={styles['status-train-movement-status-container']}>
        <div className={styles['status-train-movement-status']}>{movementStatus}</div>
      </div>
    </div>
  );
}

export default Status;