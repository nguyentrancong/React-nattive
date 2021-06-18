import {Store} from 'redux';

class AddressManager {
  _store?: Store;

  _updateStore = (store: Store) => {
    if (store || this._store) {
      return;
    }
    this._store = store;
  };
}

export default new AddressManager();
