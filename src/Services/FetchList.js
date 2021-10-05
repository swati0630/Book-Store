import axios from 'axios';

const url = 'https://kamanikandan.github.io/eStore/data/product.json';

export const fetchList = () => axios.get(url);