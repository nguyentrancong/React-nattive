import {Dimensions} from 'react-native';

export const dimensions = {
  screenWidth: Math.floor(Dimensions.get('window').width),
  screenHeight: Math.floor(Dimensions.get('window').height),
};

// SCREEN
//Home
export const HOME_SCREEN = 'Home';

//Store
export const STORE_SCREEN = 'Store';
export const SOTRE_DETAIL_SCREEN = 'StoreDetail';

//Order
export const ORDER_SCREEN = 'Order';
export const CATEGORY_SCREEN = 'Category';
export const CART_SCREEN = 'Cart';

//AccoumulatePoint
export const ACCOUMULATED_POINT_SCREEN = 'AccoumulatePoint';

//Other
export const OTHER_SCREEN = 'Other';
