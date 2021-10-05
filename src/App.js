import React, {useState, useEffect} from 'react';
import {Header, Search, Operation, List} from './Components';
import {fetchList} from './Services/FetchList';
import './App.css';

const App = () => {
  const [rawData, setRawData] = useState([]);
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const fetch = () => {
    fetchList()
    .then((res) => {
      setRawData(res.data.products);
      setList(res.data.products);
    })
    .catch((err) => console.error(err));
  }

  const onChange = ({target}) => {
    const value = target.value.trim()
    setInput(value);
    if (!value.length) {
      reset();
      return;
    }
    const updatedList = list.filter(({name}) => name.includes(value));
    setList(updatedList);
  }

  const reset = () => {
    fetch();
  };

  const onSort = (value) => {
    // setInput('');
    let updatedList = []
    if (value === 'name') {
      updatedList = rawData
        .sort((a,b) => a.name > b.name ? 1 : -1)
        .map((item, index) => ({...item, id: index}));
    }
    else if (value === 'author') {
      updatedList = rawData
        .sort((a,b) => a.author > b.author ? 1 : -1)
        .map((item, index) => ({...item, id: index}));
    }
    else if (value === 'priceHigh') {
      updatedList = rawData
      .sort((a,b) => a.price > b.price ? -1 : 1)
      .map((item, index) => ({...item, id: index}));
    }
    else if (value === 'priceLow') {
      updatedList = rawData
      .sort((a,b) => a.price > b.price ? 1 : -1)
      .map((item, index) => ({...item, id: index}));
    }
    else {
      updatedList = rawData;
    }
    setList(updatedList);
  };

  const onFilter = (value) => {
    setInput('');
    let updatedList = []
    if (value === 'All') {
      updatedList = rawData;
    } else {
      updatedList = rawData.filter(({category}) => category.toUpperCase() === value.toUpperCase());
    }
    setList(updatedList);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      <Header />
      <Search value={input} onChange={onChange}/>
      <Operation onFilter={onFilter} onSort={onSort} />
      <List list={list}/>
    </div>
  );
}

export default App;
