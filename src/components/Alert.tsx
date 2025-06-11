import React from 'react';
import styles from '../styles/Alert.module.css';

type AlertProps = {
  train: string;
  route: string;
  reason: string;
};

function Alert({ train, route, reason }: AlertProps) {
  return (
    <div className={styles['alerts-alerts-container']}>
      <span className={styles['alerts-title']}>Alerta</span>
      <div className={styles['alerts-train-info-container']}>
        <div className={styles['alerts-reason']}>{reason}</div>
        <div className={styles['alerts-route']}>Rota: {route}</div>
        <div className={styles['alerts-train']}>{train}</div>
      </div>
    </div>
  );
}

export default Alert;