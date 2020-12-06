import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TextInput,
    Dimensions
} from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get("window").width;
        return(
            <ScrollView
                keyboardDismissMode="on-drag"
                maximumZoomScale={1}
                minimumZoomScale={1}
            >
                <Image
                    style={{width: screenWidth, height: screenWidth * 288 / 512, marginTop: 40}}
                    source={require('./images/background.jpg')}>
                </Image>
                <Text
                    style={{
                        padding: 15,
                        fontSize: 20,
                        textAlign: "center",
                        backgroundColor: "green",
                        color: "white",
                    }}> this is a text</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            margin: 20,
                            borderWidth: 1,
                        }}
                        placeholder="Enter text"
                    ></TextInput>
                     <Image
                    style={{width: screenWidth, height: screenWidth * 288 / 512, marginTop: 40}}
                    source={require('./images/background.jpg')}>
                </Image>
                <Image
                    style={{width: screenWidth, height: screenWidth * 288 / 512, marginTop: 40}}
                    source={require('./images/background.jpg')}>
                </Image>
                <Image
                    style={{width: screenWidth, height: screenWidth * 288 / 512, marginTop: 40}}
                    source={require('./images/background.jpg')}>
                </Image>
            </ScrollView>
        );
    }
}