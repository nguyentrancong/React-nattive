import {
  ACCOUMULATED_POINT_SCREEN,
  HOME_SCREEN,
  ORDER_CATEGORY_SCREEN,
  ORDER_CONFIRMATION_SCREEN,
  ORDER_SCREEN,
  OTHER_SCREEN,
  SOTRE_DETAIL_SCREEN,
  SOTRE_LIST_SCREEN,
  STORE_SCREEN,
  PRODUCT_DETAIL_SCREEN,
} from '@utils/Constant';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/home/HomeScreen';
import StoreScreen from './src/store/StoreScreen';
import AccoumulatePointScreen from './src/accoumulatePoint/AccoumulatePointScreen';
import OtherScreen from './src/other/OtherScreen';
import StoreDetailScreen from './src/store/StoreDetailScreen';
import OrderConfirmationScreen from './src/order/OrderConfirmationScreen';
import StoreListScreen from './src/store/StoreListScreen';
import OrderCategoryScreen from './src/order/OrderCategoryScreen';
import OrderScreen from './src/order/OrderScreen';
import ProductDetailScreen from './src/order/ProductDetailScreen';
import configureStore from './src/redux/stores';
import CartManager from '@managers/CartManager';
import AddressManager from '@managers/AddressManager';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationProvider} from 'react-native-navigation-hooks';

const {store, persistor} = configureStore({}, () => updateStore());

const updateStore = () => {
  CartManager._updateStore(store);
  AddressManager._updateStore(store);
};

const WrappedComponent = (
  Component: React.ComponentClass<any, any> | React.FC<any>,
) => {
  return function inject(props: any) {
    const EnhancedComponent = () => {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationProvider value={{componentId: props.componentId}}>
              <Component {...props} />
            </NavigationProvider>
          </PersistGate>
        </Provider>
      );
    };

    return <EnhancedComponent />;
  };
};

//Home
Navigation.registerComponent(
  HOME_SCREEN,
  () => WrappedComponent(HomeScreen),
  () => HomeScreen,
);

//Store
Navigation.registerComponent(
  STORE_SCREEN,
  () => WrappedComponent(StoreScreen),
  () => StoreScreen,
);
Navigation.registerComponent(
  SOTRE_DETAIL_SCREEN,
  () => WrappedComponent(StoreDetailScreen),
  () => StoreDetailScreen,
);
Navigation.registerComponent(
  SOTRE_LIST_SCREEN,
  () => WrappedComponent(StoreListScreen),
  () => StoreListScreen,
);

//Order
Navigation.registerComponent(
  ORDER_SCREEN,
  () => WrappedComponent(OrderScreen),
  () => OrderScreen,
);
Navigation.registerComponent(
  ORDER_CATEGORY_SCREEN,
  () => WrappedComponent(OrderCategoryScreen),
  () => OrderCategoryScreen,
);
Navigation.registerComponent(
  ORDER_CONFIRMATION_SCREEN,
  () => WrappedComponent(OrderConfirmationScreen),
  () => OrderConfirmationScreen,
);

//Product
Navigation.registerComponent(
  PRODUCT_DETAIL_SCREEN,
  () => WrappedComponent(ProductDetailScreen),
  () => ProductDetailScreen,
);

//AccoumulatePoint
Navigation.registerComponent(
  ACCOUMULATED_POINT_SCREEN,
  () => WrappedComponent(AccoumulatePointScreen),
  () => AccoumulatePointScreen,
);

//Other
Navigation.registerComponent(
  OTHER_SCREEN,
  () => WrappedComponent(OtherScreen),
  () => OtherScreen,
);
