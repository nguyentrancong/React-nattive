import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Swiper from 'react-native-swiper';

const url = 'https://tutofox.com/foodapp/api.json';

const CategoryScreen = () => {
    return (
        <View style={styles.root}>
            <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true} pagingEnabled={true}>
                <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        // flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        backgroundColor: 'red',
        flex: 1
    },
    slide2: {
        backgroundColor: 'yellow',
        flex: 1
    },
    slide3: {
        backgroundColor: 'green',
        flex: 1
    }
});

CategoryScreen.options = {
    topBar: {
        title: {
            text: 'Category',
        },
    },
    bottomTab: {
        text: 'Category',
    }
}

Navigation.registerComponent('Category', () => CategoryScreen);