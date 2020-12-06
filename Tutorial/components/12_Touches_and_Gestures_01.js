import React, {Component} from 'react';
import {Alert, Button, View, StyleSheet} from 'react-native';

export default class TouchesAndGestures extends Component {
    _onPressButton = () => {
        Alert.alert("You press the button !")
    }
    render() {
        return(
            <View 
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <View
                    style={{
                        backgroundColor: "green",
                        padding: 10,
                        borderRadius: 16,
                        shadowColor: "gray",
                        shadowRadius: 16,
                        shadowOpacity: 0.5,
                    }}>
                    <Button
                        title="Click Button"
                        color="white"
                        onPress={this._onPressButton}
                        >

                    </Button>
                </View>
            </View>
        );
    }
}