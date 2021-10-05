import React, { useState } from 'react';
import {Select, MenuItem} from '@material-ui/core'
import './Operation.css'

const MENU = [
  {id:'1', label:'All'},
  {id:'2', label:'Business'},
  {id:'3', label:'Cookbooks'},
  {id:'4', label:'Mystery'},
  {id:'5', label:'Scifi'},
  {id:'6', label:'Accessories'},
];

const Filter = ({onFilter}) => {
  const [value, setValue] = useState(MENU[0].id);

  const onChange = ({target}) => {
    setValue(target.value);
    const value = MENU.filter(({id}) => id === target.value)[0];
    onFilter(value.label);
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

export default Filter;
