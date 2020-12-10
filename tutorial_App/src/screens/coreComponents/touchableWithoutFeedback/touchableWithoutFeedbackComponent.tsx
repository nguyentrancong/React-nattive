import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';
import LineComponent from '../commons/line';

const TouchableWithoutFeedbackComponent = () => {
    //
    const [count, setCount] = useState(0);

    //function
    const onPress = () => {
        setCount(count + 1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>TouchableWithoutFeedbackComponent</Text>
                <LineComponent/>
            </View>
            <View style={styles.view}>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>Count: {count}</Text>
                </View>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.button}>
                        <Text>Touch Here</Text>
                    </View>
                </TouchableWithoutFeedback>
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
        alignItems: "center",
        padding: 10
      },
      countText: {
        color: "#FF00FF"
      }
});

export default TouchableWithoutFeedbackComponent;