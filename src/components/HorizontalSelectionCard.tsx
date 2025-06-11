import React from 'react';
import styles from '../styles/HorizontalSelectionCard.module.css';

type HorizontalselectioncardProps = {
  child: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

function Horizontalselectioncard({ child, isSelected, onClick }: HorizontalselectioncardProps) {
  return (
    <button 
      className={`${styles['card-wrapper']} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {child}
    </button>
  );
}

export default Horizontalselectioncard;