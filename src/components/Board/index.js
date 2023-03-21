import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';

import setBtnStartClick from '../../store/actions/setBtnStartClick';

import Table from '../Table';

import styles from './index.module.css';

const selectStyles = {
  container: (styles) => ({ ...styles, marginRight: '20px' }),
  control: (styles) => ({
    ...styles,
    borderColor: 'var(--black)',
    borderRadius: '0'
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: 'var(--roboto-light)',
    fontSize: '12px',
    color: 'var(--black)'
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  dropdownIndicator: (styles) => ({
    ...styles,
    cursor: 'pointer',
    "svg": {
      fill: 'var(--black)'
    }
  }),
  option: (styles) => ({
    ...styles,
    fontFamily: 'var(--roboto-light)',
    fontSize: '12px',
    color: 'var(--black)'
  }),
  singleValue: (styles) => ({
    ...styles,
    fontFamily: 'var(--roboto-light)',
    fontSize: '12px',
    color: 'var(--black)'
  }),
};

function Board({ data }) {
  const [options, setOptions] = useState([]);
  const [selectedMode, setSelectedMode] = useState(5);
  const [mode, setMode] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    const modifiedOptions = data?.length > 0 && data?.map(({ field, name }) => {
      return { 
        value: field,
        label: name
      }
    });
    setOptions(modifiedOptions);
  }, [data]);

  const handleSelectMode = (choice) => {
    setSelectedMode(choice?.value);
    dispatch(setBtnStartClick(false));
  };

  const handleBtnClick = () => {
    dispatch(setBtnStartClick(true));
    setMode(selectedMode);
  }

  return (
    <div className={styles.root}>
      <div className={styles.selectWrapper}>
        <Select
          options={options}
          styles={selectStyles}
          placeholder='Pick mode'
          onChange={handleSelectMode}
        />
        <button className={styles.buttonStart} onClick={handleBtnClick}>start</button>
      </div>
      <Table mode={mode} />
    </div>
  );
};

Board.propTypes = {
  data: PropTypes.array
};

export default Board;
