import React from 'react';
import styles from './Input.module.css';
import {useGraphTopologyActions} from "../../core/graphTopologyProvider/GraphTopologyContext";

export const Input: React.FC = () => {
    const { parseConnectionsData } = useGraphTopologyActions();
    const fromRef = React.useRef<any>(null);
    return (
        <div className={styles.InputWrapper}>
            <textarea className={styles.textarea} rows={40} cols={40} ref={fromRef} placeholder="<caller> calls <callee>"/>
            <button className={styles.submitButton} onClick={() => {
                parseConnectionsData(fromRef.current.value);
            }}>Submit</button>
        </div>
    );
}

