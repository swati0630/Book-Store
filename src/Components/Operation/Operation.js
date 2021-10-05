import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import './Operation.css'

const Operation = ({onFilter, onSort}) => {
  return (
    <div className="operation">
      <Filter onFilter={onFilter}/>
      <Sort onSort={onSort}/>
    </div>
  );
}

export default Operation;
