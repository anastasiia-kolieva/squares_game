import { useSelector } from 'react-redux';

import styles from './index.module.css';

function InfoBlock() {
  const hoveredSquares = useSelector(({ data }) => data.hoveredSquares);
  const btnStartClick = useSelector(({ data }) => data.btnStartClick);

  return (
    <div>
      <h2 className={styles.title}>Hover squares</h2>
      <div className={styles.rowsInfoWrapper}>
        {btnStartClick && hoveredSquares?.length > 0 && hoveredSquares?.map(({ row, col } , i) => 
          <div key={i} className={styles.rowWrapper}>
            <p className={styles.rowText}>{`row ${row} col ${col}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoBlock;
