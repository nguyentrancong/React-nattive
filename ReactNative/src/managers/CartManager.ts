import {updateCart} from '@redux/actions/Cart';
import _, {cloneDeep, findIndex, isEqual} from 'lodash';
import {Store} from 'redux';

class CartManager {
  _store?: Store;

  _updateStore = (store: Store) => {
    if (store || this._store) {
      return;
    }
    this._store = store;
  };

  editItemInCart = (
    products: any[], // tat ca san pham
    product: any, // san pham dang sua
    amount?: number,
    note?: any,
    option?: any,
  ) => {
    console.log('==> products : ', products);
    console.log('==> product : ', product);
    console.log('==> note : ', note);
    console.log('==> option : ', option);

    let newProducts = cloneDeep(products);
    // index cua thang product dang muon sua
    const currentIndex = findIndex(
      products,
      item =>
        item.id === product.id &&
        item.note === product.note &&
        item.option.id === product.option.id,
    );

    // tim ra xem thang nao giong thang edit k
    const indexExists = findIndex(products, item => {
      return (
        item.id === product.id &&
        item.note === note &&
        item.option.id === option.id
      );
    });

    console.log(`indexExists`, indexExists);
    console.log(`currentIndex`, currentIndex);

    if (indexExists >= 0) {
      newProducts[indexExists] = {
        ...newProducts[indexExists],
        amount: newProducts[indexExists].amount + amount,
      };
      if (indexExists !== currentIndex) newProducts.splice(currentIndex, 1);
    } else {
      if (currentIndex >= 0)
        newProducts[currentIndex] = {
          ...newProducts[currentIndex],
          amount,
          note,
          option,
        };
    }
    return newProducts;

    // const index = findIndex(
    //   products,
    //   (item: any) =>
    //     item.id === product.id &&
    //     item?.note === product?.note &&
    //     item?.option?.id === product?.option.id,
    // );
    // let _products = cloneDeep(products);

    // const _index = findIndex(
    //   _products,
    //   (item: any) =>
    //     item.id === product.id &&
    //     item?.note === note &&
    //     item?.option?.id === option?.id,
    // );
    // //filter
    // const a = _products.filter(item => {
    //   return (
    //     item.id === product.id &&
    //     item?.note === note &&
    //     item?.option?.id === option?.id
    //   );
    // });
    // console.log('==>> filter |a ', a);
    // console.log('==>> index | ', index);
    // console.log('==>> _index | ', _index);
    // console.log('==>> index product | ', products[index]);
    // console.log('==>> _index product | ', products[_index]);
    // console.log('==> delete product', _products.splice(index, index));

    // return products;

    // if (index === -1) {
    //   const _newProducts = [..._products, {...product}];
    //   return _newProducts;
    // } else {
    //   const _index = findIndex(_products, {
    //     id: product.id,
    //     note: note,
    //     option: option,
    //   });
    //   // console.log('=======>>>> a: ', _index);
    //   if (_index === -1) {
    //     const _product = {
    //       ..._products[index],
    //       amount: amount || product.amount,
    //       note: note || product?.note,
    //       option: option || product?.option,
    //     };
    //     _products[index] = _product;
    //     return _products;
    //   } else {
    //     const _product = {
    //       ..._products[index],
    //       amount: amount + product.amount,
    //       note: note || product?.note,
    //       option: option || product?.option,
    //     };
    //     _products[index] = _product;
    //     console.log('=====>>> removt _products(_index): ', _products);
    //     _products = _products.splice(index, 1);
    //     console.log('=====>>> removt _products.splice(_index): ', _products);
    //     return _products;
    //   }
    // }
  };

  addToCart = (products: any[], product: any) => {
    const index = findIndex(
      products,
      (item: any) =>
        item.id === product.id &&
        item?.note === product?.note &&
        item?.option?.id === product?.option.id,
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
