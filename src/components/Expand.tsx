import React, { useState, useRef } from 'react';
import styles from "../styles/Expand.module.css";

type ExpandProps = {
    maxHeight: number;
    children: React.ReactNode;
};

function Expand({ children, maxHeight }: ExpandProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div
                ref={contentRef}
                className={styles['expand-container']}
                style={{
                    maxHeight: isExpanded
                        ? `${contentRef.current?.scrollHeight}px`
                        : `${maxHeight}px`,
                }}
            >
                {children}
            </div>
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles['expand-button']}
            >
                {isExpanded ? 'Ver menos...' : 'Ver mais...'}
            </button>
        </>
    );
}

export default Expand;