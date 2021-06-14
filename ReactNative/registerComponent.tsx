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

//Home
Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);

//Store
Navigation.registerComponent(STORE_SCREEN, () => StoreScreen);
Navigation.registerComponent(SOTRE_DETAIL_SCREEN, () => StoreDetailScreen);
Navigation.registerComponent(SOTRE_LIST_SCREEN, () => StoreListScreen);

//Order
Navigation.registerComponent(ORDER_SCREEN, () => OrderScreen);
Navigation.registerComponent(ORDER_CATEGORY_SCREEN, () => OrderCategoryScreen);
Navigation.registerComponent(
  ORDER_CONFIRMATION_SCREEN,
  () => OrderConfirmationScreen,
);

//Product
Navigation.registerComponent(PRODUCT_DETAIL_SCREEN, () => ProductDetailScreen);

//AccoumulatePoint
Navigation.registerComponent(
  ACCOUMULATED_POINT_SCREEN,
  () => AccoumulatePointScreen,
);

//Other
Navigation.registerComponent(OTHER_SCREEN, () => OtherScreen);
