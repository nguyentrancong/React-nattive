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
 import { COLORS, icons, images, SIZES, FONTS } from '../../constants';
 
 const HeaderRestaurant = ({ restaurant }) => {
     return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.touchableButtonBack}>
                <Image 
                    style={styles.imageBtBack} 
                    source={icons.back}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            {/* Restaurant Name Section */}
            <View style={styles.contentText}>
                <View 
                    style={{
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.padding * 3,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray3,
                    }}
                >
                    <Text style={{...FONTS.h3}}>{restaurant?.name}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btMenu}>
                <Image source={icons.list}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
            </TouchableOpacity>
        </View>
     )
 }

 const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
    }, 
    touchableButtonBack: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center',
    },
    imageBtBack: {
        width: 30,
        height: 30,
    }, 
    contentText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btMenu: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
    }
 })

 export default HeaderRestaurant;