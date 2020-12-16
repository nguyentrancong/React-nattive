import Swiper from 'react-native-swiper';
import React from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
 } from 'react-native';

 import { Banner, HomeSection } from '../index';

 const BannerSwiper = ({ id, title, data, sectionType, direction, images, onPressHandle }) => {
    return (
        <Swiper style={styles.content} autoplay={true} loop={true}>
        {data.map((item, key) => {
            return (
                <TouchableOpacity onPress={() => onPressHandle(item)}>
                    <View key={key} style={styles.contentView}>
                        <Image style={styles.image} source={{uri: item.image}}/>
                    </View>
                </TouchableOpacity>
            )
        })}
        </Swiper>
    );
 }

 const styles = StyleSheet.create({
     content: {
        height: 232,
        justifyContent: 'center',
        alignContent: 'center',
     },
     contentView:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 22,
        margin: 16,
        height: 200,
     },
     image: {
         height: 200,
         borderRadius: 22,
         borderWidth: 0.5,
         borderColor: 'lightgray'
     },
 });

 export default BannerSwiper;

