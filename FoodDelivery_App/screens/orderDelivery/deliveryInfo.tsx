import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
 } from 'react-native';
 import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
 import { COLORS, icons, images, SIZES, FONTS, GOOGLE_API_KEY } from '../../constants';
 import MapViewDirections from 'react-native-maps-directions';
import FoodInfo from '../restaurant/foodInfo';

 const DeliveryInfo = ({restaurant, navigation}) => {
     return (
         <View style={styles.content}>
             <View
                style={{
                    width: SIZES.width * 0.9,
                    paddingVertical: SIZES.padding * 3,
                    paddingHorizontal: SIZES.padding * 2,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                }}
             >
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/* Avatar */}
                    <Image
                        source={restaurant?.courier.avatar}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                    />

                    <View style={{flex: 1, marginLeft: SIZES.padding}}>
                        {/* Name and Rating */}
                        <View
                            style={{flexDirection: 'row', justifyContent: 'space-between'}}
                        >
                            <Text style={{...FONTS.h4}}>{restaurant?.courier.name}</Text>

                            <View style={{flexDirection: 'row'}}>
                                <Image 
                                    source={icons.star}
                                    style={{
                                        width: 18,
                                        height: 18,
                                        tintColor: COLORS.primary,
                                        marginRight: SIZES.padding,
                                    }}
                                />

                                <Text style={{...FONTS.body3}}>{restaurant?.rating}</Text>
                            </View>
                        </View>

                        {/* Restaurant  */}
                        <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>{restaurant?.name}</Text>
                    </View>
                 </View>

                 {/* Button  */}
                 <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding * 2,
                        justifyContent: 'space-between',
                    }}
                 >
                     <TouchableOpacity
                        style={{
                            height: 50,
                            flex: 1,
                            // width: SIZES.width * 0.5 - SIZES.padding * 6,
                            marginRight: 10,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                        onPress={() => navigation.navigate("Home")}
                     >
                         <Text style={{...FONTS.h4, color: COLORS.white}}>
                             Call
                         </Text>
                     </TouchableOpacity>

                     <TouchableOpacity
                        style={{
                            height: 50,
                            flex: 1,
                            // width: SIZES.width * 0.5 - SIZES.padding * 6,
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                        onPress={() => navigation.goBack()}
                     >
                         <Text style={{...FONTS.h4, color: COLORS.white}}>
                             Cancel
                         </Text>
                     </TouchableOpacity>
                 </View>
             </View>
         </View>
     )
 }

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

 export default DeliveryInfo;