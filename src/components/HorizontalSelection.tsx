import React, { useRef } from 'react'
import styles from "../styles/HorizontalSelection.module.css";

type HorizontalselectionProps = {
    children: React.ReactNode;
}

function Horizontalselection({ children }: HorizontalselectionProps) {
   
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown.current = true;
        startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft.current = scrollRef.current?.scrollLeft || 0;
        document.body.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        document.body.style.cursor = "";
    };

    const handleMouseUp = () => {
        isDown.current = false;
        document.body.style.cursor = "";
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = x - startX.current;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    return (
        <div
            ref={scrollRef}
            className={styles['Horizontal-selection-wrapper']}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: "grab", userSelect: "none" }}
        >
            {children}
        </div>
    )
}

export default Horizontalselection