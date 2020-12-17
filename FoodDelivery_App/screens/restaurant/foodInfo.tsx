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

 const FoodInfo = ({ restaurant }) => {
     return (
         <Animated.ScrollView
            horizontal
            pagingEnable
            scrollEventThrottle={16}
            snapToAlignment='center'
            showsHorizontalScrollIndicator={false}
            //onScroll
         >
             {
                 restaurant?.menu.map((item, index) => (
                     <View 
                        key={`menu-${index}`}
                        style={{ alignItems: 'center' }}
                     >
                         <View style={{height: SIZES.height * 0.35}}>
                             {/* Food Image */}
                            <Image 
                                source={item.photo}
                                resizeMode='cover'
                                style={{
                                    width: SIZES.width,
                                    height: "100%",
                                }}
                            />
                            {/* Quantity */}
                            <View
                                style={{
                                    position: 'absolute',
                                    bottom: -20,
                                    width: SIZES.width,
                                    height: 50,
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopLeftRadius: 25,
                                        borderBottomLeftRadius: 25,
                                    }}
                                >
                                    <Text style={{...FONTS.body1}}>-</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text style={{...FONTS.body2}}>5</Text>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        backgroundColor: COLORS.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderTopRightRadius: 25,
                                        borderBottomRightRadius: 25,
                                    }}
                                >
                                    <Text style={{...FONTS.body1}}>+</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {/* Name & Description */}
                            <View
                                style={{
                                    width: SIZES.width,
                                    alignItems: 'center',
                                    marginTop: 15, 
                                    paddingHorizontal: SIZES.padding * 2,
                                }}
                            >
                                <Text
                                    style={{
                                        marginVertical: 10,
                                        textAlign: 'center',
                                        ...FONTS.h2,
                                    }}
                                >{item.name} - {item.price.toFixed(2)}</Text>
                                <Text style={{...FONTS.body3, textAlign: 'center'}}>{item.description}</Text>
                            </View>

                            {/* Calories */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    justifyContent: 'center',
                                }}
                            >
                                <Image 
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10,
                                    }}
                                />
                                
                                <Text style={{...FONTS.body3, color: COLORS.darkgray}}>{item.calories.toFixed(2)} cal</Text>
                            </View>
                         </View>
                     </View>
                 ))
             }
         </Animated.ScrollView>
     )
 }

 const styles = StyleSheet.create({

 })

 export default FoodInfo;