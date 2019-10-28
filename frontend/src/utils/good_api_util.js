import axios from 'axios';

export const getGoods = () => {
    return axios.get('/api/goods')
};

export const createGood = data => {
    return axios.post('/api/goods/', data)
}