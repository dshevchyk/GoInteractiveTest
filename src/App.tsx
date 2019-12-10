import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Input} from "./components/input/Input";
import { Topology } from './components/topology/Topology';
import {Graph} from "./components/graph/Graph";
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Input />
      <Topology />
      <Graph />
    </div>
  );
}

export default App;
