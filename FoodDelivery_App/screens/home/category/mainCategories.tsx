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
import { categoryData } from '../mockData';
import CategoryItem from './categoryItem';

 const MainCategories = ({onSelectCategory, selectedCategory}) => {
     return (
         <View
            style={{
                padding: SIZES.padding * 2,
            }}
         >
             <Text style={{...FONTS.h1}}>Main</Text>
             <Text style={{...FONTS.h1}}>Categories</Text>

             <FlatList
                data={categoryData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => ( <CategoryItem item={item} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} />)}
                contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
             />
         </View>
     )
 }

 export default MainCategories;