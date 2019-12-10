import React, {useEffect, useState} from 'react';

import { Graph } from "react-d3-graph";

import styles from './Graph.module.css';
import {useGraphTopologyState} from "../../core/graphTopologyProvider/GraphTopologyContext";


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

export function GraphComponent(props) {
    // graph payload (with minimalist structure)
    const [data, setData] = useState([]);
    const { topology, links } = useGraphTopologyState();
    useEffect(() => {
        setData({
            nodes: topology.map((id) => {
                return { id }
            }),
            links
        })
    }, [topology, links]);

    return (data.nodes && data.nodes.length > 0 ?
        <div className={styles.Graph}>
            <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={data}
                config={myConfig}
            />;
        </div> : null
    );
}
