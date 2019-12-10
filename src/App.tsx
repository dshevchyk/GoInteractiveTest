import React from 'react';
import styles from './App.module.css';
import {Input} from "./components/input/Input";
import { Topology } from './components/topology/Topology';
import {GraphComponent} from "./components/graph/Graph";
import { GraphTopologyProvider } from './core/graphTopologyProvider/GraphTopologyProvider';
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <GraphTopologyProvider>
        <Input />
        <Topology />
        <GraphComponent />
      </GraphTopologyProvider>
    </div>
  );
}

export default App;
