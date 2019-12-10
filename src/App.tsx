import React from 'react';
import styles from './App.module.css';
import {Input} from "./components/input/Input";
import { Topology } from './components/topology/Topology';
import {Graph} from "./components/graph/Graph";
import { GraphTopologyProvider } from './core/graphTopologyProvider/GraphTopologyProvider';
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <GraphTopologyProvider>
        <Input />
        <Topology />
        <Graph />
      </GraphTopologyProvider>
    </div>
  );
}

export default App;
