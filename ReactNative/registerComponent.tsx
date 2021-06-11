import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/home/HomeScreen';
import StoreScreen from './src/store/StoreScreen';
import CategoryScreen from './src/order/OrderScreen';
import AccoumulatePointScreen from './src/accoumulatePoint/AccoumulatePointScreen';
import OtherScreen from './src/other/OtherScreen';
import StoreDetailScreen from './src/store/StoreDetailScreen';

Navigation.registerComponent('Home', () => HomeScreen);

Navigation.registerComponent('Store', () => StoreScreen);
Navigation.registerComponent('StoreDetail', () => StoreDetailScreen);

Navigation.registerComponent('Order', () => CategoryScreen);

Navigation.registerComponent('AccoumulatePoint', () => AccoumulatePointScreen);

Navigation.registerComponent('Other', () => OtherScreen);
