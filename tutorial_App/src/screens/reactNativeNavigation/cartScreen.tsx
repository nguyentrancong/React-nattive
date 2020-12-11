import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    Button,
    StyleSheet,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const CartScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Cart Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

CartScreen.options = {
    topBar: {
      title: {
        text: 'Cart',
        // color: 'white'
      },
    //   background: {
    //     color: '#4d089a'
    //   }
    },
    bottomTab: {
        text: 'Cart',
    }
  };

  Navigation.registerComponent('Cart', () => CartScreen);
