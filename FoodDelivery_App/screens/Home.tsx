import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    SafeAreaView,
 } from 'react-native';
import { COLORS, icons, images, SIZES, FONTS } from '../constants';
import MainCategories from './home/category/mainCategories';

import HeaderComponent from './home/headerComponent/headerComponent';

import { restaurantData, categoryData, initialCurrentLocation } from './home/mockData';
import RestaurantList from './home/restaurant/restaurantList';

 const Home = ({navigation}) => {

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation) 

    const onSelectCategory = (category) => {
        //filter restaurant
        let restaurantList = restaurantData.filter(item => 
            item.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

     return(
         <SafeAreaView style={styles.container}>
             <HeaderComponent/>
             <MainCategories onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />
             <RestaurantList restaurants={restaurants} categories={categories} navigation={navigation} currentLocation={currentLocation} />
         </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
 });

 export default Home;