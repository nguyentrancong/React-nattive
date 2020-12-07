import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native';

const logo = {
    url: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

const ScrollViewCustom = () => {
    return(
        <ScrollView style={{margin: 16}}>
            <Text style={{fontSize: 96, margin: 20}}>Scroll me please!</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 96, margin: 20}}>If you like</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Text style={{fontSize: 96, margin: 20}}>Scroll down</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
        </ScrollView>
    );
}

export default ScrollViewCustom;