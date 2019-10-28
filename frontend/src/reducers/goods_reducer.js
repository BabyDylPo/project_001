import { RECEIVE_GOODS, RECEIVE_NEW_GOOD } from '../actions/good_actions';

const GoodsReducer = (state = { all: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_GOODS:
            newState.all = action.goods.data;
            return newState;
        case RECEIVE_NEW_GOOD:
            newState.new = action.good.data;
            return newState;
        default:
            return state;
    }
};

export default GoodsReducer;