import {
    SET_HOVERED_SQUARES,
    SET_BTN_START_CLICK
} from '../types/types';

const initialState = {
    hoveredSquares: [],
    btnStartClick: false
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
    case SET_HOVERED_SQUARES:
        return { ...state, hoveredSquares: action.payload };
    case SET_BTN_START_CLICK:
        return { ...state, btnStartClick: action.payload };
    default:
        return state;
    }
};
