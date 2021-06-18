import {REDUX_ADDRESS_DEFAULT, REDUX_ADDRESS_UPDATE} from '../ActionTypes';

const initialState = {};
const address = (state = initialState, action: any) => {
  switch (action.type) {
    case REDUX_ADDRESS_UPDATE:
      return {
        ...state,
        address: [...action.address],
      };
    case REDUX_ADDRESS_DEFAULT:
      return {...state, ...action.address};
    default:
      return {...state, cart: []};
  }
};

export default address;
