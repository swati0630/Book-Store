import {TextField} from '@material-ui/core'
import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <TextField
      variant="outlined"
      className="root"
      placeholder="Search Books"
      {...props}
    />
  );
}

export default Search;
