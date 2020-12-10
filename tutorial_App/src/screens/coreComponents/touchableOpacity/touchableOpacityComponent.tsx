import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,

} from 'react-native';
import LineComponent from '../commons/line';

const TouchableOpacityComponent = () => {
    //value
    const [count, setCount] = useState(0);

    //function
    const onPress = () => {
        setCount(count + 1);
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text>TouchableOpacityComponent</Text>
            <LineComponent/>
            <View style={styles.view}>
                <View style={styles.countContainer}>
                    <Text>Count: {count}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text>Press here</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    }

});

export default TouchableOpacityComponent;