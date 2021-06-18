import {REDUX_ADDRESS_DEFAULT, REDUX_ADDRESS_UPDATE} from '../ActionTypes';

export const AddressDefault = (address: any) => {
  return {type: REDUX_ADDRESS_DEFAULT, address};
};

export const updateAddress = (address: any[]) => {
  return {type: REDUX_ADDRESS_UPDATE, address};
};
