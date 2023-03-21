import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import setHoveredSquares from '../../store/actions/setHoveredSquares';

import styles from './index.module.css';
import classNames from 'classnames';

function Row({ mode, row }) {
    const dispatch = useDispatch();
    const hoveredSquares = useSelector(({ data }) => data.hoveredSquares);
    const btnStartClick = useSelector(({ data }) => data.btnStartClick);

    const findHoveredSquere = (col) => hoveredSquares.find(obj => obj.row === row && obj.col === col);
    
    const handleSquareHover = (col) => {
        if(!btnStartClick){
            dispatch(setHoveredSquares([]));
            return;
        };

        const isSquareAlreadyHovered = findHoveredSquere(col);
        const filteredHoveredSquares = hoveredSquares?.reduce((arr, obj) => {
            if(obj.row === row && obj.col === col){
                return arr
            };
            return [...arr, obj];
        }, []);

        isSquareAlreadyHovered ?
            dispatch(setHoveredSquares(filteredHoveredSquares)) :
            dispatch(setHoveredSquares([...hoveredSquares, { row, col }]));
    };

    return (
        <tr >
            {[...Array(mode)].map(( _ , i) =>
                <td
                    key={i}
                    className={classNames(styles.td, findHoveredSquere(i+1) && styles.tdHovered)}
                    onMouseEnter={() => handleSquareHover(i+1)}
                />)}
        </tr>
    );
  };

Row.propTypes = {
    mode: PropTypes.number,
    row: PropTypes.number
};
  
export default Row;
  