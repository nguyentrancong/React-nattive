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
import { COLORS, icons, images, SIZES, FONTS } from '../../../constants';
import RestaurantItem from './restaurantItem';

const RestaurantList = ({navigation, currentLocation, restaurants, categories}) => {
    return(
        <FlatList style={styles.flatList}
            data={restaurants}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (<RestaurantItem item={item} categories={categories} navigation={navigation} currentLocation={currentLocation} />)}
            contentContainerStyle={{
                padding: SIZES.padding * 2,
                paddingBottom: 20,
            }}
    />
    )
}

const styles = StyleSheet.create({
    flatList: {
    }
});

export default RestaurantList;