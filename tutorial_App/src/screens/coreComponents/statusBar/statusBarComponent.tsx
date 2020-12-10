import React, { useState } from 'react';
import {
    View,
    TextInput,
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar,
    Button,
} from 'react-native';
import LineComponent from '../commons/line';
import Constants from 'expo-constants';

const StatusBarComponent = () => {

    // value
    const styleTypes = ['default','dark-content', 'light-content'];

    const [visibleStatusBar, setVisibleStatusBar] = useState(false);

    const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

    // function
    const changeVisibilityStatusBar = () => {
        setVisibleStatusBar(!visibleStatusBar);
    };

    const changeStyleStatusBar = () => {
        const styleId = styleTypes.indexOf(styleStatusBar) + 1;

        if (styleId === styleTypes.length) {
            return setStyleStatusBar(styleTypes[0]);
        }
        return setStyleStatusBar(styleTypes[styleId]);
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            <Text>StatusBar Component</Text>
            <LineComponent marginLeftAndRight={0}/>
            <View style={styles.container}>
                <Text style={styles.text}>StatuBar Visibility: {visibleStatusBar ? 'Visible' : 'Hidden'}</Text>
                <Text style={styles.text}>StatuBar Style: {styleStatusBar}</Text>

                <StatusBar backgroundColor="blue" barStyle={styleStatusBar} />
                <View>
                    <StatusBar hidden={visibleStatusBar} />
                </View>


                <Button title='Toggle StatusBar' onPress={() => changeVisibilityStatusBar()} />
                <Button title='Change StatusBar Style' onPress={() => changeStyleStatusBar()} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        margin: 8
    }
});

export default StatusBarComponent;

