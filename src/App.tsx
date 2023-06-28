import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import PasswordGenerator from './PasswordGenerator';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <PasswordGenerator />
    </div>
  );
};

export default App;
