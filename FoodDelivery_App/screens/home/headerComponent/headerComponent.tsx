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

const HeaderComponent = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity 
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent:'center',
                }}
            >
                <Image 
                    source={icons.nearby}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
            </TouchableOpacity>

            <View
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '70%',
                        height: '100%',
                        backgroundColor: COLORS.lightGray3,
                        borderRadius: SIZES.radius,
                    }}
                >
                    <Text style={{...FONTS.h3}}>Location</Text>
                </View>
            </View>

            <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
            >
                <Image  
                    source={icons.basket}
                    resizeMode='contain'
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
            </TouchableOpacity>
        </View>
    )
 }

 const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 50,
    }
 });

 export default HeaderComponent;