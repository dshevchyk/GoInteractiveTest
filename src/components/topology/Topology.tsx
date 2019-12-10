import React from 'react';

import styles from './Topology.module.css';
import {useGraphTopologyState} from "../../core/graphTopologyProvider/GraphTopologyContext";


export const Topology: React.FC = () => {
    const { topology } = useGraphTopologyState();
    return (
        <div className={styles.Topology}>
            {topology.map((item: string) => {
                return <div className={styles.TopologyItem} key={item}>{item} </div>;
            })}
        </div>
    );
}

