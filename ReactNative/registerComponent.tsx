import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/home/HomeScreen';
import ShopScreen from './src/shop/ShopScreen';
import CategoryScreen from './src/order/OrderScreen';
import AccoumulatePointScreen from './src/accoumulatePoint/AccoumulatePointScreen';
import OtherScreen from './src/other/OtherScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Shop', () => ShopScreen);
Navigation.registerComponent('Order', () => CategoryScreen);
Navigation.registerComponent('AccoumulatePoint', () => AccoumulatePointScreen);
Navigation.registerComponent('Other', () => OtherScreen);
