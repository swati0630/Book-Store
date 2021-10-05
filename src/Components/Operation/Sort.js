import React, { useState } from 'react';
import {Select, MenuItem} from '@material-ui/core'
import './Operation.css'

const MENU = [
    {id:'0', label:'----Select an Option----', sortBy: ''},
    {id:'1', label:'Sort by name', sortBy: 'name'},
    {id:'2', label:'Sort by author', sortBy: 'author'},
    {id:'3', label:'sort by price : High to Low', sortBy: 'priceHigh'},
    {id:'4', label:'sort by price : Low to High', sortBy: 'priceLow'},
];

const Sort = ({onSort}) => {
  const [value, setValue] = useState(MENU[0].id);

  const onChange = ({target}) => {
    setValue(target.value);
    const value = MENU.filter(({id}) => id === target.value)[0];
    onSort(value.sortBy);
  };

  return (
      <Select
        className="item"
        variant="outlined"
        value={value}
        onChange={onChange}
      >
        {
            MENU.map(({id, label}) => (
                <MenuItem key={id} value={id}>{label}</MenuItem>
            ))
        }
      </Select>
  );
}

export default Sort;
