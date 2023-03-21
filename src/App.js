import { useState, useEffect } from 'react';

import Board from './components/Board';
import InfoBlock from './components/InfoBlock';

import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://60816d9073292b0017cdd833.mockapi.io/modes');
        const actualData = await response.json();

        setData(actualData);
      } catch(err) {
        setData([]);
      } 
    };
    getData();
  }, []);

  return (
    <div className={styles.root}>
      <Board data={data} /> 
      <InfoBlock />
    </div>
  );
};

export default App;
