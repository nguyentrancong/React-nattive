import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TextInput,
    Dimensions
} from 'react-native';

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} // ios
                onMomentumScrollBegin={() => {
                    // alert("Bắt đầu scroll")
                }}
                onMomentumScrollEnd={() => {
                    // alert("kết thúc scroll")
                }}
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}
                >
                <View
                    style={{
                        backgroundColor: "#5f9ea0",
                        flex: 1,
                        marginTop: 33,
                        width: screenWidth,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>
                        Screen 1
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "red",
                        flex: 1,
                        marginTop: 33,
                        width: screenWidth,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>
                        Screen 2
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: "green",
                        flex: 1,
                        marginTop: 33,
                        width: screenWidth,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}