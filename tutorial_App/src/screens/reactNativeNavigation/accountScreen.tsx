import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const AccountScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Account Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

AccountScreen.options = {
    topBar: {
        title: {
            text: 'Account',
            // color: 'white',
        },
        // background: {
        //     color: '#4d089a'
        // }
    },
    bottomTab: {
        text: 'Account',
    }
}

Navigation.registerComponent('Account', () => AccountScreen);