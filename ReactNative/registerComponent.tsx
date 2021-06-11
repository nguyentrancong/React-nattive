import {
  ACCOUMULATED_POINT_SCREEN,
  CART_SCREEN,
  CATEGORY_SCREEN,
  HOME_SCREEN,
  ORDER_SCREEN,
  OTHER_SCREEN,
  SOTRE_DETAIL_SCREEN,
  SOTRE_LIST_SCREEN,
  STORE_SCREEN,
} from '@utils/Constant';
import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/home/HomeScreen';
import StoreScreen from './src/store/StoreScreen';
import CategoryScreen from './src/order/OrderScreen';
import AccoumulatePointScreen from './src/accoumulatePoint/AccoumulatePointScreen';
import OtherScreen from './src/other/OtherScreen';
import StoreDetailScreen from './src/store/StoreDetailScreen';
import CartScreen from './src/order/CartScreen';
import StoreListScreen from './src/store/StoreListScreen';

//Home
Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);

//Store
Navigation.registerComponent(STORE_SCREEN, () => StoreScreen);
Navigation.registerComponent(SOTRE_DETAIL_SCREEN, () => StoreDetailScreen);
Navigation.registerComponent(SOTRE_LIST_SCREEN, () => StoreListScreen);

//Order
Navigation.registerComponent(ORDER_SCREEN, () => CategoryScreen);
Navigation.registerComponent(CATEGORY_SCREEN, () => CategoryScreen);
Navigation.registerComponent(CART_SCREEN, () => CartScreen);

//AccoumulatePoint
Navigation.registerComponent(
  ACCOUMULATED_POINT_SCREEN,
  () => AccoumulatePointScreen,
);

//Other
Navigation.registerComponent(OTHER_SCREEN, () => OtherScreen);
