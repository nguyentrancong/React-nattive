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
export const SOTRE_LIST_SCREEN = 'StoreList';

//Order
export const ORDER_SCREEN = 'Order';
export const ORDER_CONFIRMATION_SCREEN = 'OrderConfirmation';
export const ORDER_CATEGORY_SCREEN = 'OrderCategory';

//Product
export const PRODUCT_DETAIL_SCREEN = 'ProductDetail';

//AccoumulatePoint
export const ACCOUMULATED_POINT_SCREEN = 'AccoumulatePoint';

//Other
export const OTHER_SCREEN = 'Other';
