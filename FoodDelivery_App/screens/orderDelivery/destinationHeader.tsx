import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
 } from 'react-native';
 import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
 import { COLORS, icons, images, SIZES, FONTS, GOOGLE_API_KEY } from '../../constants';
 import MapViewDirections from 'react-native-maps-directions';

 const DestinationHeader = ({streetName, duration}) => {
     return (
        <View style={styles.content}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SIZES.width * 0.9,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding * 2,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                }}
            >
                <Image
                    source={icons.red_pin}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: SIZES.padding,
                    }}
                />

                <View style={{flex: 1}}>
                    <Text style={{...FONTS.body3}}>{streetName}</Text>
                </View>

                <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text>
            </View>
        </View>
     )
 }

 const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
 })

 export default DestinationHeader;