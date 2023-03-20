import styles from './index.module.css';

const count = 5;

function Row() {
    const handleSquareHover = () => {
        console.log('Here Square Hovered!')
    };

    return (
        <tr >
            {[...Array(count)].map(( _ , i) => <td key={i} className={styles.td} onMouseEnter={handleSquareHover}/>)}
        </tr>
    );
  }
  
  export default Row;