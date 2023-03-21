import { SET_HOVERED_SQUARES } from '../types/types';

const setHoveredSquares = payload => ({
    type: SET_HOVERED_SQUARES,
    payload
});

export default setHoveredSquares;
