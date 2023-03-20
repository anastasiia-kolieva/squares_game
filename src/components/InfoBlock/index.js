
import styles from './index.module.css';

const rowsInfo = [
  {
    row: 2,
    col: 1
  },
  {
    row: 2,
    col: 2
  },
  {
    row: 2,
    col: 3
  },
  {
    row: 3,
    col: 3
  }
];


function InfoBlock() {
  return (
    <div>
      <h2 className={styles.title}>Hover squares</h2>
      <div className={styles.rowsInfoWrapper}>
        {rowsInfo.length > 0 && rowsInfo.map(({ row, col } , i) => 
          <div key={i} className={styles.rowWrapper}>
            <p className={styles.rowText}>{`row ${row} col ${col}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoBlock;
