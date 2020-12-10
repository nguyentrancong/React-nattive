import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';
import LineComponent from '../commons/line';

const KeyboardAvoidingViewComponent = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textHeader}>KeyboardAvoidingView</Text>
                <LineComponent marginLeftAndRight={0}/>
            </View>
            <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>Header</Text>
                        <TextInput style={styles.textInput}
                            placeholder='enter name'
                        ></TextInput>
                        <View style={styles.btnContainer}>
                            <Button title='click me!'
                                onPress={() => {
                                    alert("Click me!")
                                }}
                            ></Button>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textHeader: {
        height: 44,
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 8,
    },
    inner: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 42,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    }, 
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12
    }
});

export default KeyboardAvoidingViewComponent;