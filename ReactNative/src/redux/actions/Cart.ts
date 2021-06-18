import {REDUX_UPDATE_CART} from '../ActionTypes';

export const updateCart = (products: any[]) => {
  return {
    type: REDUX_UPDATE_CART,
    products,
  };
};
