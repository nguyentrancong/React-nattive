import {REDUX_UPDATE_CART} from '../ActionTypes';

const initialState = {
  products: [],
};
const cart = (state = initialState, action: any) => {
  switch (action.type) {
    case REDUX_UPDATE_CART:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default cart;
