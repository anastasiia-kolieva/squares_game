import Board from './components/Board';
import InfoBlock from './components/Board';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Board />
      <InfoBlock />
    </div>
  );
}

export default App;