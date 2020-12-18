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
import { sin } from 'react-native-reanimated';
 import { COLORS, icons, images, SIZES, FONTS } from '../../constants';

const DotsComponent = ({ scrollX, restaurant }) => {

    const dotPosition = Animated.divide(scrollX, SIZES.width)

     return (
         <View style={{ height: 30 }}>
             <View  
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: SIZES.padding,
                }}
            >
                {
                    restaurant?.menu.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        })

                        const dotSize = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: 'clamp',
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: 'clamp',
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSize,
                                    height: dotSize,
                                    backgroundColor: dotColor,
                                }}
                            />
                        )
                    })
                }
            </View>
         </View>
     )
 }

 const OrderComponent = ({ scrollX, restaurant, getBasketItemCount, sumOrder, currentLocation, navigation }) => {
     return (
         <View>
             <DotsComponent scrollX={scrollX} restaurant={restaurant} />
             <View 
                style={{
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}
             >
                 <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3,
                        borderBottomColor: COLORS.lightGray2,
                        borderBottomWidth: 1,
                    }}
                 >
                     <Text style={{...FONTS.h3}}>{getBasketItemCount()} { getBasketItemCount() > 1 ? 'items' : 'item'} in Cart</Text>
                     <Text style={{...FONTS.h3}}>${sumOrder()}</Text>
                 </View>

                 <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: SIZES.padding * 2,
                        paddingHorizontal: SIZES.padding * 3,
                    }}
                 >
                     <View style={{flexDirection: 'row'}}>
                         <Image source={icons.pin}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                            }}
                         />

                         <Text style={{marginLeft: SIZES.padding, ...FONTS.h4}}>Location</Text>
                     </View>

                     <View 
                        style={{
                            flexDirection: 'row',
                        }}
                     >
                         <Image 
                            source={icons.master_card}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray,
                            }}
                         />

                         <Text style={{marginLeft: SIZES.padding, ...FONTS.h4}}>8888</Text>
                     </View>
                 </View>

                 {/* Order Button */}
                 <View 
                    style={{
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                 >
                     <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            width: SIZES.width * 0.9,
                            padding: SIZES.padding,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                        }}

                        onPress={() => navigation.navigate("OrderDelivery", {
                            restaurant: restaurant,
                            currentLocation: currentLocation
                        })}
                     >
                         <Text style={{color: COLORS.white, ...FONTS.h2}} >Order</Text>
                     </TouchableOpacity>
                 </View>
             </View>

             {isIphoneX() &&
                <View
                    style={{
                        position: 'absolute',
                        bottom: -34,
                        left: 0,
                        right: 0,
                        height: 34,
                        backgroundColor: COLORS.white,
                    }}
                >
                </View>
             }
         </View>
     )
 }

 export default OrderComponent;