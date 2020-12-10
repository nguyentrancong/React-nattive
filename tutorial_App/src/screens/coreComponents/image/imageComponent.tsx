import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import LineComponent from '../commons/line';

const ImageComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>Image Core Component</Text>
            <LineComponent height={0.5} color={'gray'}/>
            <View style={styles.viewContent}>
                <Image 
                    style={styles.tinyLogo}
                    source={require('../../../images/account_icon.png')}
                ></Image>
            </View>
            <LineComponent height={0.5} color={'blue'}/>
            <View style={styles.viewContent}>
                <Image 
                    style={styles.logo}
                    source={require('../../../images/account_icon.png')}
                ></Image>
            </View>
            <LineComponent height={0.5} color={'blue'}/>
            <View style={styles.viewContent}>
                <Image 
                    style={styles.largeLogo}
                    source={{url: 'https://reactnative.dev/img/tiny_logo.png'}}
                ></Image>
            </View>
            <LineComponent height={0.5} color={'blue'}/>
            <View style={styles.viewContent}>
                <Image 
                    style={styles.largeLogo}
                    source={{url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
                ></Image>
            </View>
            <LineComponent height={0.5} color={'blue'}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContent:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    textHeader: {
        height: 44,
        color: 'blue',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
        marginTop: 10
    },
    tinyLogo: {
        height: 50,
        width: 50,
    },
    logo: {
        height: 100,
        width: 100,
    },
    largeLogo: {
        height: 150,
        width: 150,
    }
});

export default ImageComponent;