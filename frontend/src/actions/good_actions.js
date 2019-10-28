import { getGoods, createGood } from '../utils/good_api_util';

export const RECEIVE_GOODS = "RECEIVE_GOODS";
export const RECEIVE_NEW_GOOD = "RECEIVE_NEW_TWEET";

export const receiveGoods = goods => ({
    type: RECEIVE_GOODS,
    goods
});

export const receiveNewGood = good => ({
    type: RECEIVE_NEW_GOOD,
    good
});

export const fetchGoods = () => dispatch => (
    getGoods()
        .then(goods => dispatch(receiveGoods(goods)))
        .catch(err => console.log(err))
);

export const manufactureGood = data => dispatch => (
    createGood(data)
        .then(good => dispatch(receiveNewGood(good)))
        .catch(err => console.log(err))
);