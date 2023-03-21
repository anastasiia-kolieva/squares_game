import PropTypes from 'prop-types';

import Row from '../Row';

import styles from './index.module.css';

function Table({ mode }) {
    return (
        <table className={styles.table}>
          <tbody>
              {[...Array(mode)].map(( _ , i) =>
                <Row
                  key={i}
                  mode={mode}
                  row={i+1}
                />)}
          </tbody>
        </table>
    );
};

Table.propTypes = {
  mode: PropTypes.number
};
  
export default Table;
  