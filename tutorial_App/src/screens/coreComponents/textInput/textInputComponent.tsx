import React, { useState } from 'react';
import { 
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
 } from 'react-native'
import LineComponent from '../commons/line';

 const TextInputComponent = () => {
     //value
     const [value, setValue] = useState('');

     return(
        <SafeAreaView style={styles.container}>
            <Text>TextInput Component</Text>
            <LineComponent/>
            <TextInput style={styles.textInput}
                onChangeText={(text) => setValue(text)}
                placeholder='Enter world'
            >
            </TextInput>
            <Text>{value}</Text>
        </SafeAreaView>
     );
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 44,
        margin: 16,
        borderColor: 'white',
        borderBottomColor: 'red',
        borderWidth: 0.5
    }
 });

 export default TextInputComponent;