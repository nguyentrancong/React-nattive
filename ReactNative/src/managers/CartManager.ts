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

  addToCart = (products: any[], product: any) => {
    const index = findIndex(
      products,
      (item: any) =>
        item.id === product.id &&
        item?.note === product?.note &&
        item?.options === product?.options,
    );
    const _products = cloneDeep(products);
    if (index === -1) {
      const _newProducts = [..._products, {...product}];
      return _newProducts;
    } else {
      const _product = {
        ..._products[index],
        amount: _products[index].amount + product.amount,
      };
      _products[index] = _product;
      return _products;
    }
  };
}

export default new CartManager();
