import {updateCart} from '@redux/actions/Cart';
import {cloneDeep, findIndex} from 'lodash';
import {Store} from 'redux';

class CartManager {
  _store?: Store;

  _updateStore = (store: Store) => {
    if (store || this._store) {
      return;
    }
    this._store = store;
  };

  addToCart = (products: any, product: any) => {
    const index = findIndex(
      products,
      (product: any) => product.id == product.id,
    );
    if (index === -1) {
      const _products = [[...products, {...product, amount: 1}]];
      return _products;
      // this._store?.dispatch(updateCart(_products));
    } else {
      const newProducts = cloneDeep(products);
      newProducts[index] = {
        ...newProducts[index],
        amount: newProducts[index].amount + product.amount || 1,
      };
      return newProducts;
      // this._store?.dispatch(updateCart(newProducts));
    }
  };
}

export default new CartManager();
