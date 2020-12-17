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

const CategoryItem = ({item, onSelectCategory, selectedCategory}) => {
    return(
        <View>
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: SIZES.padding,
                    ...styles.shadow,
                }}
                onPress={() => onSelectCategory(item)}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
                    }}
                >
                    <Image 
                        source={item.icon}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: SIZES.padding,
                        color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        ...FONTS.body5,
                    }}
                >{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }, 
 });

 export default CategoryItem;