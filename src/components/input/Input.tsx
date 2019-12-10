import React from 'react';
import styles from './Input.module.css';
import {useGraphTopologyActions} from "../../core/graphTopologyProvider/GraphTopologyContext";

export const Input: React.FC = () => {
    const { addConnection } = useGraphTopologyActions();
    const fromRef = React.useRef<any>(null);
    const toRef = React.useRef<any>(null);
    return (
        <div className={styles.Input}>
            <span>Add Edge</span>
            <input className={styles.Input} ref={fromRef} placeholder='From'/>
            <input className={styles.Input} ref={toRef} placeholder='To'/>
            <button onClick={() => {
                addConnection(fromRef.current.value, toRef.current.value);
            }}>Submit</button>
        </div>
    );
}

