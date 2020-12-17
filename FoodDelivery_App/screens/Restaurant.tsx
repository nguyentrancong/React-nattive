import React, { useState, useEffect } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Animated,
 } from 'react-native';
 import { isIphoneX } from 'react-native-iphone-x-helper';
 import { COLORS, icons, images, SIZES, FONTS } from '../constants';

import FoodInfo from './restaurant/foodInfo';
import HeaderRestaurant from './restaurant/headerRestaurant';


 const Restaurant = ({ route }) => {

    const [restaurant, setRestaurant] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)

    useEffect(() => {
        let {item, currentLocation} = route.params;

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    })

     return(
         <SafeAreaView style={styles.container}>
             <HeaderRestaurant restaurant={restaurant}/>
             <FoodInfo restaurant={restaurant}/>
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
 })

 export default Restaurant;