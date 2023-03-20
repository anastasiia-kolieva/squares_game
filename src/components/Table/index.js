import Row from '../Row';

import styles from './index.module.css';

const count = 5;

function Table() {
    return (
        <table className={styles.table}>
          <tbody>
                {[...Array(count)].map(( _ , i) => <Row key={i}/>)}
          </tbody>
        </table>
    );
  }
  
  export default Table;