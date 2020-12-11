import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const CategoryScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Category Screen</Text>
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

CategoryScreen.options = {
    topBar: {
        title: {
            text: 'Category',
            // color: 'white',
        },
        // background: {
        //     color: '#4d089a'
        // }
    },
    bottomTab: {
        text: 'Category',
    }
}

Navigation.registerComponent('Category', () => CategoryScreen);