import Select from 'react-select'

import Table from '../Table';

import styles from './index.module.css';

const options = [
  { value: 5, label: 'Easy' },
  { value: 10, label: 'Normal' },
  { value: 15, label: 'Hard' }
]

// const options = [
//   {
//   "name": "Easy",
//   "field": 5,
//   "id": "1"
//   },
//   {
//   "name": "Normal",
//   "field": 10,
//   "id": "2"
//   },
//   {
//   "name": "Hard",
//   "field": 15,
//   "id": "3"
//   }
//   ]

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
}

function Board() {
  return (
    <div className={styles.root}>
      <div className={styles.selectWrapper}>
        <Select
          options={options}
          styles={selectStyles}
          placeholder='Pick mode'
        />
        <button className={styles.buttonStart}>start</button>
      </div>
      <Table/>
    </div>
  );
}

export default Board;