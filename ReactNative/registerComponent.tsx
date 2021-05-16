import {Navigation} from 'react-native-navigation';
import HomeScreen from './src/home/HomeScreen';
import FavoriteScreen from './src/favorite/FavoriteScreen';
import CategoryScreen from './src/cateogry/CategoryScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Favorite', () => FavoriteScreen);
Navigation.registerComponent('Category', () => CategoryScreen);
