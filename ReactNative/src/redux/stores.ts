import {createStore, Reducer} from 'redux';
import storage from '@react-native-community/async-storage';
import {persistCombineReducers, persistStore} from 'redux-persist';
import cart from './reducers/Cart';
import address from './reducers/Address';

const doCreateStore = (reducer: Reducer, initialState: object) => {
  const _store = createStore(reducer, initialState);
  return _store;
};

const configureStore = (
  initialState: object,
  onRehydrationCompleted: () => void,
) => {
  const config = {
    key: 'configureStore',
    storage,
  };
  const _reducer = persistCombineReducers(config, {cart, address});
  const store = doCreateStore(_reducer, initialState);
  const persistor = persistStore(store, null, onRehydrationCompleted);
  return {store, persistor};
};

export default configureStore;
