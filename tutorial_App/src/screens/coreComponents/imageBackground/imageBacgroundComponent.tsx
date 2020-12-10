import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Image,
    SafeAreaView,
} from 'react-native';
import LineComponent from '../commons/line';

const imageUrl = {url: "https://reactjs.org/logo-og.png"};

const ImageBackgroundComponent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>ImageBackground Core Component</Text>
            <LineComponent marginLeftAndRight={0}/>
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <ImageBackground source={imageUrl} style={styles.imageBackground}>
                    <Text style={styles.textInside}>Inside</Text>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }, 
    textHeader: {
        height: 44,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        margin: 8,
        paddingTop: 8
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        // justifyContent: 'center'
    },
    textInside: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default ImageBackgroundComponent;